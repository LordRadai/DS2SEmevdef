import re
import os
import glob
import sys
from collections import defaultdict

def analyze_folder_for_unmapped_enums(folder_path, output_file="unmapped_enums_report.txt"):
    # Categories to track
    categories = [
        "ChrStatusFlag", 
        "ChrStatusRate", 
        "ChrStatusValue", 
        "ChrStatusValue32"
    ]
    
    # Regex patterns
    event_start_re = re.compile(r'Event\s*\(\s*(\d+)')
    # Pattern to find Category.Member (e.g., ChrStatusFlag.Unknown29)
    enum_pattern = r'(' + '|'.join(categories) + r')\.(\w*Unknown\w*)'
    enum_re = re.compile(enum_pattern)

    # Structure: {Category: {MemberName: [(FileName, EventID)]}}
    results = {cat: defaultdict(list) for cat in categories}

    # Grab all .js files in the folder
    search_path = os.path.join(folder_path, "*.js")
    files = glob.glob(search_path)

    if not files:
        print(f"Error: No .js files found in folder: {folder_path}")
        return

    for file_path in files:
        file_name = os.path.basename(file_path)
        current_event_id = "Unknown ID"
        
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                for line in f:
                    # Update current Event context
                    event_match = event_start_re.search(line)
                    if event_match:
                        current_event_id = event_match.group(1)
                    
                    # Find unmapped enums
                    for match in enum_re.finditer(line):
                        category = match.group(1)
                        member = match.group(2)
                        
                        entry = (file_name, current_event_id)
                        if entry not in results[category][member]:
                            results[category][member].append(entry)
        except Exception as e:
            print(f"Could not read {file_name}: {e}")

    # Prepare output content
    output_lines = []
    header = f"{'='*60}\nUNMAPPED ENUM REPORT\nFOLDER: {os.path.abspath(folder_path)}\n{'='*60}\n"
    output_lines.append(header)

    found_any = False
    for category in categories:
        if results[category]:
            found_any = True
            output_lines.append(f"\n## {category}")
            for member in sorted(results[category].keys()):
                output_lines.append(f"  > {member}:")
                # Sort by filename, then by Event ID
                for fname, eid in sorted(results[category][member], key=lambda x: (x[0], x[1])):
                    output_lines.append(f"    - Event {eid} (in {fname})")
    
    if not found_any:
        output_lines.append("\nNo unmapped 'Unknown' enums were found in the specified categories.")

    final_report = "\n".join(output_lines)

    # Print to console
    print(final_report)

    # Dump to text file
    try:
        with open(output_file, 'w', encoding='utf-8') as out_f:
            out_f.write(final_report)
        print(f"\n[Done] Report saved to: {os.path.abspath(output_file)}")
    except Exception as e:
        print(f"Error writing to output file: {e}")

if __name__ == "__main__":
    # Check if folder path was provided as a command line argument
    if len(sys.argv) < 2:
        print("Usage: python script_name.py <path_to_folder>")
        sys.exit(1)

    target_folder = sys.argv[1]
    
    if os.path.isdir(target_folder):
        analyze_folder_for_unmapped_enums(target_folder)
    else:
        print(f"Error: The path '{target_folder}' is not a valid directory.")
        sys.exit(1)