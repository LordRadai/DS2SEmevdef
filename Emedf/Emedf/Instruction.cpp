#include "Instruction.h"

namespace Emedf
{
	Instruction::Instruction(nlohmann::ordered_json& json) : m_json(json)
	{
		for (auto& argJson : m_json["args"])
		{
			Argument* arg = new Argument(argJson);
			m_arguments.push_back(arg);
		}
	}

	void Instruction::addArgument(Argument* argument)
	{
		m_json["args"].push_back(argument->getJson());
		m_arguments.push_back(argument);
	}
}