#pragma once
#include <nlohmann/json.hpp>
#include "Argument.h"

namespace Emedf
{
	class Instruction
	{
		nlohmann::ordered_json m_json;
		std::vector<Argument*> m_arguments;
	public:
		Instruction() {}
		Instruction(nlohmann::ordered_json& json);
		~Instruction() {}

		nlohmann::ordered_json& getJson() { return m_json; }

		std::string getName() const { return m_json.at("name").get<std::string>(); }
		void setName(const std::string& name) { m_json["name"] = name; }

		int getIndex() const { return m_json["index"]; }
		void setIndex(int index) { m_json["index"] = index; }

		std::vector<Argument*>& getArguments() { return m_arguments; }
		void addArgument(Argument* argument);
	};
}