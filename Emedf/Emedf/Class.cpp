#include "Class.h"

namespace Emedf
{
	Class::Class(nlohmann::ordered_json& json) : m_json(json)
	{
		for (auto& instrJson : m_json["instructions"])
		{
			Instruction* instr = new Instruction(instrJson);
			m_instructions.push_back(instr);
		}
	}

	void Class::addInstruction(Instruction* instruction)
	{
		m_json["instructions"].push_back(instruction->getJson());
		m_instructions.push_back(instruction);
	}
}