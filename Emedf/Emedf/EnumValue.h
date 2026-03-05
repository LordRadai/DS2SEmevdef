#pragma once
#include <nlohmann/json.hpp>

namespace Emedf
{
	class EnumValue
	{
		std::string m_name;
		int m_value;
	public:
		EnumValue() : m_name(""), m_value(0) {}
		EnumValue(const std::string& name, int value) : m_name(name), m_value(value) {}
		~EnumValue() {}

		std::string getName() const { return m_name; }
		void setName(const std::string& name) { m_name = name; }

		int getValue() const { m_value; }
		void setValue(int value) { m_value = value; }
	};
}