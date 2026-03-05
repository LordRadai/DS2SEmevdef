#pragma once
#include <nlohmann/json.hpp>
#include <vector>
#include "Instruction.h"

namespace Emedf
{
	class Class
	{
		nlohmann::json m_json;
		std::vector<Instruction*> m_instructions;
	public:
		Class() {}
		Class(nlohmann::json& json) : m_json(json) {}
		~Class() {}

		int getIndex() const { return m_json["index"]; }
		void setIndex(int index) { m_json["index"] = index; }

		std::wstring getName() const { return m_json.at("name").get<std::wstring>(); }
		void setName(const std::wstring& name) { m_json["name"] = name; }

		std::vector<Instruction*>& getInstructions() { return m_instructions; }
		void addInstruction(Instruction* instruction) { m_instructions.push_back(instruction); }
	};
}