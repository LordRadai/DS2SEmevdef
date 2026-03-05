#pragma once
#include <nlohmann/json.hpp>
#include <vector>
#include "Instruction.h"

namespace Emedf
{
	class Class
	{
		nlohmann::ordered_json m_json;
		std::vector<Instruction*> m_instructions;
	public:
		Class() {}
		Class(nlohmann::ordered_json& json) : m_json(json);
		~Class() {}

		nlohmann::ordered_json& getJson() { return m_json; }

		int getIndex() const { return m_json["index"]; }
		void setIndex(int index) { m_json["index"] = index; }

		std::string getName() const { return m_json.at("name").get<std::string>(); }
		void setName(const std::string& name) { m_json["name"] = name; }

		std::vector<Instruction*>& getInstructions() { return m_instructions; }
		void addInstruction(Instruction* instruction);
	};
}