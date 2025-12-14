import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

interface ExperienceProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Expériences Professionnelles',
    subtitle: 'Mon parcours en entreprise',
    internship: 'Stage',
    workStudy: 'Alternance',
    current: 'En cours',
    period: 'Période',
    company: 'Entreprise',
    missions: 'Missions principales',
    technologies: 'Technologies utilisées',
    achievements: 'Réalisations & Impact',
    skills: 'Compétences développées',
  },
  en: {
    title: 'Professional Experience',
    subtitle: 'My journey in companies',
    internship: 'Internship',
    workStudy: 'Work-Study Program',
    current: 'Current',
    period: 'Period',
    company: 'Company',
    missions: 'Main missions',
    technologies: 'Technologies used',
    achievements: 'Achievements & Impact',
    skills: 'Skills developed',
  },
};

const experiences = {
  fr: [
    {
      type: 'alternance',
      title: 'Développeur',
      company: 'Infologo',
      location: 'Genève, Suisse',
      period: 'Septembre 2025 - Présent',
      current: true,
      missions: [
        'Développement d\'une application métier sous Power Platform : Conception et réalisation d\'une application complète répondant aux besoins spécifiques du client',
        'Gestion de projet et recueil des besoins clients : Analyse des besoins utilisateurs, définition des spécifications fonctionnelles et suivi du projet de bout en bout',
        'Poursuite de la migration et optimisation ERP Odoo : Amélioration continue du système ERP et développement de nouvelles fonctionnalités',
        'Automatisation des processus métier : Création de workflows et scripts pour optimiser les opérations quotidiennes',
      ],
      technologies: ['Power Platform', 'Power Apps', 'Power Automate', 'Odoo', 'Python', 'PowerShell', 'Microsoft 365', 'ERP', 'PostgreSQL'],
      achievements: [
        'Livraison d\'une application Power Platform complète en production',
        'Gestion autonome d\'un projet avec recueil et validation des besoins clients',
        'Amélioration des processus métier par l\'automatisation et l\'optimisation Odoo',
      ],
      skills: [
        'Réaliser',
        'Optimiser',
        'Administrer',
        'Gérer',
        'Conduire',
        'Collaborer',
      ],
    },
    {
      type: 'stage',
      title: 'Développeur',
      company: 'Infologo',
      location: 'Genève, Suisse',
      period: 'Mai 2025 - Août 2025',
      current: false,
      missions: [
        'Migration ERP vers Odoo : Assurer la migration de l\'ancien système ERP vers Odoo, en prenant en charge l\'extraction, la transformation et l\'importation des données critiques (clients, produits, commandes, etc.)',
        'Intégration personnalisée sur Odoo : Développer des modules et réaliser des intégrations spécifiques en fonction des besoins métier identifiés',
        'Scripts PowerShell pour Microsoft 365 : Concevoir et mettre en place des scripts PowerShell pour faciliter la maintenance quotidienne et la gestion des comptes, groupes et licences M365',
      ],
      technologies: ['Odoo', 'Python', 'PowerShell', 'Microsoft 365', 'ERP', 'PostgreSQL'],
      achievements: [
        'Participation active à la phase initiale de migration ERP',
        'Développement de scripts d\'automatisation M365',
        'Contribution aux modules personnalisés Odoo',
      ],
      skills: ['Réaliser', 'Administrer', 'Gérer', 'Collaborer'],
    },
  ],
  en: [
    {
      type: 'alternance',
      title: 'Developer',
      company: 'Infologo',
      location: 'Geneva, Switzerland',
      period: 'September 2025 - Present',
      current: true,
      missions: [
        'Development of a business application on Power Platform: Design and implementation of a complete application meeting specific client needs',
        'Project management and client requirements gathering: User needs analysis, functional specification definition and end-to-end project monitoring',
        'Continuation of ERP Odoo migration and optimization: Continuous improvement of the ERP system and development of new features',
        'Business process automation: Creation of workflows and scripts to optimize daily operations',
      ],
      technologies: ['Power Platform', 'Power Apps', 'Power Automate', 'Odoo', 'Python', 'PowerShell', 'Microsoft 365', 'ERP', 'PostgreSQL'],
      achievements: [
        'Delivery of a complete Power Platform application in production',
        'Autonomous management of a project with client requirements gathering and validation',
        'Improvement of business processes through automation and Odoo optimization',
      ],
      skills: [
        'Develop',
        'Optimize',
        'Administer',
        'Manage',
        'Lead',
        'Collaborate',
      ],
    },
    {
      type: 'stage',
      title: 'Developer',
      company: 'Infologo',
      location: 'Geneva, Switzerland',
      period: 'May 2025 - August 2025',
      current: false,
      missions: [
        'ERP Migration to Odoo: Ensure the migration of the legacy ERP system to Odoo, handling extraction, transformation and import of critical data (customers, products, orders, etc.)',
        'Custom Odoo Integration: Develop modules and implement specific integrations based on identified business needs',
        'PowerShell Scripts for Microsoft 365: Design and implement PowerShell scripts to facilitate daily maintenance and management of M365 accounts, groups and licenses',
      ],
      technologies: ['Odoo', 'Python', 'PowerShell', 'Microsoft 365', 'ERP', 'PostgreSQL'],
      achievements: [
        'Active participation in the initial ERP migration phase',
        'Development of M365 automation scripts',
        'Contribution to custom Odoo modules',
      ],
      skills: ['Develop', 'Administer', 'Manage', 'Collaborate'],
    },
  ],
};

export function Experience({ language }: ExperienceProps) {
  const t = content[language];
  const exp = experiences[language];

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {exp.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline line removed */}

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                {/* Header with type badge */}
                <div className={`p-6 ${experience.type === 'alternance' ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-cyan-600'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
                            {experience.type === 'alternance' ? t.workStudy : t.internship}
                          </span>
                          {experience.current && (
                            <span className="px-3 py-1 bg-green-400 rounded-full text-white">
                              {t.current}
                            </span>
                          )}
                        </div>
                        <h2 className="text-white mb-1">{experience.title}</h2>
                        <p className="text-white/90">{experience.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Missions */}
                  <div>
                    <h3 className="text-gray-900 mb-3">{t.missions}</h3>
                    <ul className="space-y-2">
                      {experience.missions.map((mission, mIndex) => (
                        <li key={mIndex} className="flex items-start gap-2 text-gray-600">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-gray-900 mb-3">{t.technologies}</h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h3 className="text-gray-900">{t.achievements}</h3>
                    </div>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills developed */}
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-indigo-600" />
                      <h3 className="text-gray-900">{t.skills}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}