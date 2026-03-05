#pragma once
#include <nlohmann/json.hpp>
#include "Argument.h"

namespace Emedf
{
	class Instruction
	{
		nlohmann::json m_json;
		std::vector<Argument*> m_arguments;
	public:
		Instruction() {}
		Instruction(nlohmann::json& json) : m_json(json) {}
		~Instruction() {}

		std::wstring getName() const { return m_json.at("name").get<std::wstring>(); }
		void setName(const std::wstring& name) { m_json["name"] = name; }

		int getIndex() const { return m_json["index"]; }
		void setIndex(int index) { m_json["index"] = index; }

		std::vector<Argument*>& getArguments() { return m_arguments; }
		void addArgument(Argument* argument) { m_arguments.push_back(argument); }
	};
}