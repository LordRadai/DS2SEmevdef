#pragma once
#include <string>
#include <vector>
#include <nlohmann/json.hpp>
#include "Class.h"
#include "Enum.h"

namespace Emedf
{
	class Emedf
	{
		nlohmann::json m_json;
		std::vector<Class*> m_mainClasses;
		std::vector<Class*> m_extraClasses;
		std::vector<Enum*> m_enums;
	public:
		Emedf();
		~Emedf();
	};
}