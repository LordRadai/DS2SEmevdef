#include <fstream>
#include <codecvt>
#include "Emedf.h"

namespace Emedf
{
	void Emedf::loadFromJson(const std::wstring& path)
	{
		std::ifstream file(path, std::ios::in);

		if (!file.is_open())
			throw std::runtime_error("Failed to open file: " + std::string(path.begin(), path.end()));

		file >> m_json;

		for (auto& mainClassJson : m_json["main_classes"])
		{
			Class* mainClass = new Class(mainClassJson);
			m_mainClasses.push_back(mainClass);
		}

		for (auto& extraClassJson : m_json["extra_classes"])
		{
			Class* extraClass = new Class(extraClassJson);
			m_extraClasses.push_back(extraClass);
		}

		for (auto& enumJson : m_json["enums"])
		{
			Enum* e = new Enum(enumJson);
			m_enums.push_back(e);
		}
	};

	void Emedf::saveToJson(const std::wstring& path)
	{
		std::ofstream file(path);

		if (!file.is_open())
			throw std::runtime_error("Failed to open file: " + std::string(path.begin(), path.end()));

		file.imbue(std::locale(file.getloc(),
			new std::codecvt_utf8<wchar_t>));

		file << m_json.dump(2);
	}

	Class* Emedf::findMainClass(int id)
	{
		for (Class* mainClass : m_mainClasses)
		{
			if (mainClass->getIndex() == id)
				return mainClass;
		}

		return nullptr;
	}

	Class* Emedf::findExtraClass(int id)
	{
		for (Class* extraClass : m_extraClasses)
		{
			if (extraClass->getIndex() == id)
				return extraClass;
		}

		return nullptr;
	}

	void Emedf::addMainClass(Class* mainClass)
	{
		m_json["main_classes"].push_back(mainClass->getJson());
		m_mainClasses.push_back(mainClass);
	}

	void Emedf::addExtraClass(Class* extraClass)
	{
		m_json["extra_classes"].push_back(extraClass->getJson());
		m_extraClasses.push_back(extraClass);
	}

	void Emedf::addEnum(Enum* e)
	{
		m_json["enums"].push_back(e->getJson());
		m_enums.push_back(e);
	}
}