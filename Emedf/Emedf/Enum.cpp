#include "Enum.h"

namespace Emedf
{
	Enum::Enum(nlohmann::ordered_json& json) : m_json(json)
	{
		for (auto& valueJson : m_json["values"].items())
		{
			int value = std::stoi(valueJson.key());
			std::string str = valueJson.value().get<std::string>();

			m_values.push_back(new EnumValue(str, value));
		}
	}

	void Enum::addValue(int value, std::string str)
	{
        std::string key = std::to_string(value);
        m_json["values"][key] = str;

        m_values.push_back(new EnumValue(str, value));
	}
}