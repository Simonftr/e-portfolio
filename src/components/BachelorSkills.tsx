import { Code, Zap, Server, Database, Folder, Users, ChevronRight } from 'lucide-react';
import type { SkillType } from '../App';

interface BachelorSkillsProps {
  onSkillSelect: (skill: SkillType) => void;
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Compétences du BUT Informatique',
    subtitle: 'Les 6 compétences développées tout au long de ma formation',
    description: 'Cliquez sur une compétence pour découvrir les détails de chaque niveau',
    explore: 'Explorer',
  },
  en: {
    title: 'Bachelor Computer Science Skills',
    subtitle: 'The 6 skills developed throughout my training',
    description: 'Click on a skill to discover the details of each level',
    explore: 'Explore',
  },
};

const skills = {
  fr: [
    {
      id: 'realiser' as SkillType,
      title: 'Réaliser',
      subtitle: 'Développer des applications',
      description: 'Développer, concevoir, tester et intégrer une application',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      levels: 3,
    },
    {
      id: 'optimiser' as SkillType,
      title: 'Optimiser',
      subtitle: 'Solutions algorithmiques',
      description: 'Sélectionner et adapter des solutions algorithmiques',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-200',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      levels: 3,
    },
    {
      id: 'administrer' as SkillType,
      title: 'Administrer',
      subtitle: 'Systèmes informatiques',
      description: 'Administrer des systèmes informatiques communicants',
      icon: Server,
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      levels: 2,
    },
    {
      id: 'gerer' as SkillType,
      title: 'Gérer',
      subtitle: 'Données et information',
      description: 'Gérer des données de l\'information',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      levels: 2,
    },
    {
      id: 'conduire' as SkillType,
      title: 'Conduire',
      subtitle: 'Projets informatiques',
      description: 'Conduire un projet informatique',
      icon: Folder,
      color: 'from-pink-500 to-pink-600',
      borderColor: 'border-pink-200',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      levels: 3,
    },
    {
      id: 'collaborer' as SkillType,
      title: 'Collaborer',
      subtitle: 'Travail en équipe',
      description: 'Collaborer au sein d\'une équipe informatique',
      icon: Users,
      color: 'from-indigo-500 to-indigo-600',
      borderColor: 'border-indigo-200',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      levels: 3,
    },
  ],
  en: [
    {
      id: 'realiser' as SkillType,
      title: 'Develop',
      subtitle: 'Application development',
      description: 'Develop, design, test and integrate an application',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      levels: 3,
    },
    {
      id: 'optimiser' as SkillType,
      title: 'Optimize',
      subtitle: 'Algorithmic solutions',
      description: 'Select and adapt algorithmic solutions',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-200',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      levels: 3,
    },
    {
      id: 'administrer' as SkillType,
      title: 'Administer',
      subtitle: 'IT systems',
      description: 'Administer communicating IT systems',
      icon: Server,
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      levels: 2,
    },
    {
      id: 'gerer' as SkillType,
      title: 'Manage',
      subtitle: 'Data and information',
      description: 'Manage data and information',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      levels: 2,
    },
    {
      id: 'conduire' as SkillType,
      title: 'Lead',
      subtitle: 'IT projects',
      description: 'Lead an IT project',
      icon: Folder,
      color: 'from-pink-500 to-pink-600',
      borderColor: 'border-pink-200',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      levels: 3,
    },
    {
      id: 'collaborer' as SkillType,
      title: 'Collaborate',
      subtitle: 'Teamwork',
      description: 'Collaborate within an IT team',
      icon: Users,
      color: 'from-indigo-500 to-indigo-600',
      borderColor: 'border-indigo-200',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      levels: 3,
    },
  ],
};

export function BachelorSkills({ onSkillSelect, language }: BachelorSkillsProps) {
  const t = content[language];
  const skillsList = skills[language];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600 mb-2">{t.subtitle}</p>
          <p className="text-gray-500">{t.description}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill) => {
            const Icon = skill.icon;
            return (
              <button
                key={skill.id}
                onClick={() => onSkillSelect(skill.id)}
                className={`group relative bg-white rounded-xl p-6 border-2 ${skill.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105 text-left cursor-pointer`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h2 className="text-gray-900 mb-1">{skill.title}</h2>
                  <p className={`${skill.textColor} mb-2`}>{skill.subtitle}</p>
                  <p className="text-gray-600">{skill.description}</p>
                </div>

                {/* Badge with levels */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: skill.levels }).map((_, index) => (
                      <span key={index} className={`w-8 h-1 ${skill.bgColor} rounded-full`} />
                    ))}
                  </div>
                  <div className={`flex items-center gap-1 ${skill.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <span>{t.explore}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity pointer-events-none`} />
              </button>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
          <div className="text-center">
            <h3 className="text-gray-900 mb-4">
              {language === 'fr' 
                ? 'Niveaux par Compétence' 
                : 'Levels per Skill'}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Les compétences du BUT Informatique Parcours A se déclinent en 2 ou 3 niveaux progressifs selon le référentiel officiel. Cliquez sur une compétence pour découvrir les apprentissages critiques de chaque niveau, les projets associés et les traces de mes réalisations.'
                : 'The Bachelor Computer Science skills are divided into 2 or 3 progressive levels according to the official framework. Click on a skill to discover the critical learnings of each level, associated projects and evidence of my achievements.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}