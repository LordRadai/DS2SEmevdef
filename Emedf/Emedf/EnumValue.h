#pragma once
#include <nlohmann/json.hpp>

namespace Emedf
{
	class EnumValue
	{
		nlohmann::json m_json;
		int m_value;
	public:
		EnumValue() {}
		EnumValue(nlohmann::json& json) : m_json(json), m_value(json["value"]) {}
		~EnumValue() {}

		std::wstring getName() const { return m_json.at("name").get<std::wstring>(); }
		void setName(const std::wstring& name) { m_json["name"] = name; }

		int getValue() const { m_value; }
		void setValue(int value) { m_value = value; m_json["value"] = value; }
	};
}