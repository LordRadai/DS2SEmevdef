#include "Class.h"

namespace Emedf
{
	Class::Class(nlohmann::ordered_json& json) : m_json(json)
	{
		for (auto& instrJson : m_json["instrs"])
		{
			Instruction* instr = new Instruction(instrJson);
			m_instructions.push_back(instr);
		}
	}

	void Class::addInstruction(Instruction* instruction)
	{
		m_json["instrs"].push_back(instruction->getJson());
		m_instructions.push_back(instruction);
	}

	Instruction* Class::findInstruction(int index)
	{
		for (Instruction* instr : m_instructions)
		{
			if (instr->getIndex() == index)
				return instr;
		}

		return nullptr;
	}
}