#pragma once
#include <nlohmann/json.hpp>

namespace Emedf
{
	class Argument
	{
		nlohmann::ordered_json m_json;
	public:
		enum Type
		{
			kTypeU8,
			kTypeU16,
			kTypeU32,
			kTypeS8,
			kTypeS16,
			kTypeS32,
			kTypeFloat32,

			kNumTypes
		};

		Argument() {};
		Argument(nlohmann::ordered_json& json) : m_json(json) {}
		~Argument() {}

		nlohmann::ordered_json& getJson() { return m_json; }

		std::string getName() const { return m_json["name"]; }
		void setName(const std::string& name) { m_json["name"] = name; }

		int getType() const { return m_json["type"]; }
		void setType(int type) { m_json["type"] = type; }

		std::string getEnumName() const { return m_json.at("enum_name").get<std::string>(); }
		void setEnumName(const std::string& enumName) { m_json["enum_name"] = enumName; }

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

		template<typename T>
		T getIncrement() { return m_json["increment"]; }

		template<typename T>
		void setIncrement(T increment) { m_json["increment"] = increment; }

		std::string getFormatString() const { return m_json.at("format_string").get<std::string>(); }
		void setFormatString(const std::string& formatString);

		static const char* getTypeName(int type);
		static int getTypeFromName(const std::string& str);
	};
}