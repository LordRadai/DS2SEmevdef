#pragma once
#include <nlohmann/json.hpp>

namespace Emedf
{
	class Argument
	{
		nlohmann::json m_json;
	public:
		enum class Type
		{
			kType0,
			kType1,
			kType2,
			kType3,
			kType4,
			kType5,
			kTypeFloat,

			kNumTypes
		};

		Argument() {};
		Argument(nlohmann::json& json) : m_json(json) {}
		~Argument() {}

		std::wstring getName() const { return m_json["name"]; }
		void setName(const std::wstring& name) { m_json["name"] = name; }

		int getType() const { return m_json["type"]; }
		void setType(int type) { m_json["type"] = type; }

		std::wstring getEnumName() const { return m_json.at("enum_name").get<std::wstring>(); }
		void setEnumName(const std::wstring& enumName) { m_json["enum_name"] = enumName; }

		template<typename T>
		T getDefault() const { return m_json["default"]; }

		template<typename T>
		void setDefault(const T& defaultValue) { m_json["default"] = defaultValue; }

		template<typename T>
		T getMin() const { return m_json["min"]; }

		template<typename T>
		void setMin(const T& min) { m_json["min"] = min; }

		template<typename T>
		T getMax() const { return m_json["max"]; }

		template<typename T>
		void setMax(const T& max) { m_json["max"] = max; }

		std::wstring getFormatString() const { return m_json.at("format_string").get<std::wstring>(); }
		void setFormatString(const std::wstring& formatString) { m_json["format_string"] = formatString; }
	};
}