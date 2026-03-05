#pragma once
#include <nlohmann/json.hpp>
#include <vector>
#include "EnumValue.h"

namespace Emedf
{
	class Enum
	{
		nlohmann::ordered_json m_json;
		std::vector<EnumValue*> m_values;
	public:
		Enum() {}
		Enum(nlohmann::ordered_json& json);
		~Enum() {}

		nlohmann::ordered_json& getJson() { return m_json; }

		std::string getName() const { return m_json.at("name").get<std::string>(); }
		void setName(const std::string& name) { m_json["name"] = name; }

		std::vector<EnumValue*>& getValues() { return m_values; }
		void addValue(int value, std::string str);
	};
}