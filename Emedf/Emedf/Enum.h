#pragma once
#include <nlohmann/json.hpp>
#include <vector>
#include "EnumValue.h"

namespace Emedf
{
	class Enum
	{
		nlohmann::json m_json;
		std::vector<EnumValue*> m_values;
	public:
		Enum() {}
		Enum(nlohmann::json& json) : m_json(json) {}
		~Enum() {}

		std::wstring getName() const { return m_json.at("name").get<std::wstring>(); }
		void setName(const std::wstring& name) { m_json["name"] = name; }

		std::vector<EnumValue*>& getValues() { return m_values; }
		void addValue(EnumValue* value) { m_values.push_back(value); }
	};
}