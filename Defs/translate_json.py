import json
from deep_translator import GoogleTranslator
import time

# -------------------------------
# CONFIG
# -------------------------------
INPUT_FILE = "input.json"
OUTPUT_FILE = "output.json"
SOURCE_LANG = "ja"
TARGET_LANG = "en"
BATCH_SIZE = 50
RETRIES = 2
WAIT_BETWEEN_BATCHES = 0.5  # seconds

translator = GoogleTranslator(source=SOURCE_LANG, target=TARGET_LANG)

# -------------------------------
# Step 1: Collect all strings
# -------------------------------
def collect_strings(obj, path=[], collected=None):
    if collected is None:
        collected = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            collect_strings(v, path + [k], collected)
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            collect_strings(item, path + [i], collected)
    elif isinstance(obj, str) and obj.strip():
        collected.append((path, obj))
    return collected

# -------------------------------
# Step 2: Set translated values back
# -------------------------------
def set_value(obj, path, value):
    for p in path[:-1]:
        obj = obj[p]
    obj[path[-1]] = value

# -------------------------------
# Step 3: Translate a batch safely
# -------------------------------
def translate_batch(strings):
    translated = []
    for attempt in range(RETRIES + 1):
        try:
            # Send strings as a single "text" request separated by newlines
            joined = "\n".join(strings)
            result = translator.translate(joined)
            # Split back by newline
            translated = result.split("\n")
            if len(translated) != len(strings):
                raise ValueError("Mismatch in batch length")
            return translated
        except Exception as e:
            print(f"Batch translation failed (attempt {attempt+1}): {e}")
            time.sleep(0.5)
    # fallback if all retries fail
    print("Batch failed completely, keeping original strings")
    return strings

# -------------------------------
# Step 4: Translate all collected strings in batches
# -------------------------------
def translate_collected(collected):
    translated_results = []
    for i in range(0, len(collected), BATCH_SIZE):
        batch = collected[i:i+BATCH_SIZE]
        strings = [s[1] for s in batch]
        translated_batch = translate_batch(strings)
        for j in range(len(batch)):
            translated_results.append((batch[j][0], translated_batch[j]))
        print(f"Translated {i + len(batch)}/{len(collected)} strings...")
        time.sleep(WAIT_BETWEEN_BATCHES)
    return translated_results

# -------------------------------
# Main
# -------------------------------
def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    collected = collect_strings(data)
    print(f"Found {len(collected)} strings to translate.")

    translated = translate_collected(collected)

    for path, value in translated:
        set_value(data, path, value)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Translation complete! Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()