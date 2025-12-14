import { useState } from 'react';
import { Github, Filter, X } from 'lucide-react';

interface ProjectsProps {
  language: 'fr' | 'en';
  onProjectSelect?: (projectId: string) => void;
}

const skillColors = {
  realiser: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    filterBg: 'bg-blue-600',
    filterBorder: 'border-blue-600',
  },
  optimiser: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    filterBg: 'bg-yellow-600',
    filterBorder: 'border-yellow-600',
  },
  administrer: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    filterBg: 'bg-green-600',
    filterBorder: 'border-green-600',
  },
  gerer: {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    filterBg: 'bg-purple-600',
    filterBorder: 'border-purple-600',
  },
  conduire: {
    bg: 'bg-pink-100',
    text: 'text-pink-700',
    filterBg: 'bg-pink-600',
    filterBorder: 'border-pink-600',
  },
  collaborer: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-700',
    filterBg: 'bg-indigo-600',
    filterBorder: 'border-indigo-600',
  },
};

const content = {
  fr: {
    title: 'Mes Projets',
    subtitle: 'Portfolio de réalisations académiques et personnelles',
    filterBy: 'Filtrer par compétence',
    all: 'Tous',
    viewDetails: 'Voir les détails',
    viewCode: 'Code source',
    technologies: 'Technologies',
    skills: 'Compétences',
    filters: {
      all: 'Tous',
      clear: 'Effacer le filtre',
    },
  },
  en: {
    title: 'My Projects',
    subtitle: 'Portfolio of academic and personal projects',
    filterBy: 'Filter by skill',
    all: 'All',
    viewDetails: 'View details',
    viewCode: 'Source code',
    technologies: 'Technologies',
    skills: 'Skills',
    filters: {
      all: 'All',
      clear: 'Clear filter',
    },
  },
};

const skillFilters = {
  fr: [
    { id: 'all', label: 'Tous' },
    { id: 'realiser', label: 'Réaliser' },
    { id: 'optimiser', label: 'Optimiser' },
    { id: 'administrer', label: 'Administrer' },
    { id: 'gerer', label: 'Gérer' },
    { id: 'conduire', label: 'Conduire' },
    { id: 'collaborer', label: 'Collaborer' },
  ],
  en: [
    { id: 'all', label: 'All' },
    { id: 'realiser', label: 'Develop' },
    { id: 'optimiser', label: 'Optimize' },
    { id: 'administrer', label: 'Administer' },
    { id: 'gerer', label: 'Manage' },
    { id: 'conduire', label: 'Lead' },
    { id: 'collaborer', label: 'Collaborate' },
  ],
};

const skillNames = {
  fr: {
    realiser: 'Réaliser',
    optimiser: 'Optimiser',
    administrer: 'Administrer',
    gerer: 'Gérer',
    conduire: 'Conduire',
    collaborer: 'Collaborer',
  },
  en: {
    realiser: 'Develop',
    optimiser: 'Optimize',
    administrer: 'Administer',
    gerer: 'Manage',
    conduire: 'Lead',
    collaborer: 'Collaborate',
  },
};

const projects = {
  fr: [
    {
      id: 'botanic',
      title: 'Botanic',
      description: 'Application métier en C# développée en première année. Implémentation d\'interfaces utilisateur, gestion de la logique métier et validation des formulaires.',
      image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=600&fit=crop',
      technologies: ['C#', '.NET', 'WPF', 'Git'],
      skills: ['realiser', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-green-500 to-teal-600',
    },
    {
      id: 'scodoc',
      title: 'Scodoc',
      description: 'Système de gestion d\'étudiants et de notes en PostgreSQL. Conception d\'un schéma relationnel complet, scripts SQL, gestion de l\'intégrité des données.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      technologies: ['PostgreSQL', 'SQL', 'Git'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'collaborer'],
      codeUrl: '#',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'vinted_api',
      title: 'Vinted_API',
      description: 'API REST en C# permettant de manipuler des données PostgreSQL pour une version simplifiée de Vinted. Conception d\'endpoints, validation des données et documentation complète.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      technologies: ['C#', '.NET', 'PostgreSQL', 'REST API', 'Swagger'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'vinted_client',
      title: 'VintedClient',
      description: 'Interface web en Vue pour la consultation d\'annonces. Affichage de produits, filtres de recherche et consultation détaillée avec cohérence graphique.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'JavaScript', 'CSS', 'Axios'],
      skills: ['realiser', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'movie_app',
      title: 'movie_app',
      description: 'Application mobile Flutter affichant une liste de films depuis une API. Architecture modulaire, navigation entre écrans et gestion de l\'état.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Dart', 'REST API', 'Git'],
      skills: ['realiser', 'optimiser', 'collaborer'],
      codeUrl: '#',
      color: 'from-red-500 to-orange-600',
    },
    {
      id: 'pokemon_trainer',
      title: 'Pokémon Trainer Manager',
      description: 'Application iOS en Swift pour gérer une liste d\'entraîneurs Pokémon. Conception de vues, modèles de données et navigation.',
      image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=800&h=600&fit=crop',
      technologies: ['Swift', 'SwiftUI', 'Xcode', 'Git'],
      skills: ['realiser', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-yellow-500 to-orange-600',
    },
  ],
  en: [
    {
      id: 'botanic',
      title: 'Botanic',
      description: 'Business application in C# developed in first year. User interface implementation, business logic management and form validation.',
      image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=600&fit=crop',
      technologies: ['C#', '.NET', 'WPF', 'Git'],
      skills: ['realiser', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-green-500 to-teal-600',
    },
    {
      id: 'scodoc',
      title: 'Scodoc',
      description: 'Student and grade management system in PostgreSQL. Complete relational schema design, SQL scripts, data integrity management.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      technologies: ['PostgreSQL', 'SQL', 'Git'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'collaborer'],
      codeUrl: '#',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'vinted_api',
      title: 'Vinted_API',
      description: 'REST API in C# to manipulate PostgreSQL data for a simplified Vinted version. Endpoint design, data validation and complete documentation.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      technologies: ['C#', '.NET', 'PostgreSQL', 'REST API', 'Swagger'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'vinted_client',
      title: 'VintedClient',
      description: 'Web interface in Vue for browsing listings. Product display, search filters and detailed view with graphic consistency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'JavaScript', 'CSS', 'Axios'],
      skills: ['realiser', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'movie_app',
      title: 'movie_app',
      description: 'Flutter mobile app displaying a movie list from an API. Modular architecture, screen navigation and state management.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Dart', 'REST API', 'Git'],
      skills: ['realiser', 'optimiser', 'collaborer'],
      codeUrl: '#',
      color: 'from-red-500 to-orange-600',
    },
    {
      id: 'pokemon_trainer',
      title: 'Pokémon Trainer Manager',
      description: 'iOS app in Swift to manage a list of Pokémon trainers. View design, data models and navigation.',
      image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=800&h=600&fit=crop',
      technologies: ['Swift', 'SwiftUI', 'Xcode', 'Git'],
      skills: ['realiser', 'conduire', 'collaborer'],
      codeUrl: '#',
      color: 'from-yellow-500 to-orange-600',
    },
  ],
};

export function Projects({ language, onProjectSelect }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const t = content[language];
  const projectsList = projects[language];
  const filters = skillFilters[language];
  const skillsNames = skillNames[language];

  const filteredProjects = selectedFilter === 'all'
    ? projectsList
    : projectsList.filter(project => project.skills.includes(selectedFilter));

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">{t.filterBy}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              key="all"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-gray-900 text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:scale-105'
              }`}
            >
              {t.filters.all}
            </button>
            {filters.slice(1).map((filter) => {
              const colors = skillColors[filter.id as keyof typeof skillColors];
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    selectedFilter === filter.id
                      ? `${colors.filterBg} text-white shadow-md scale-105`
                      : `bg-white ${colors.text} hover:bg-gray-50 border ${colors.filterBorder} hover:scale-105`
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Show All Button */}
          {selectedFilter !== 'all' && filteredProjects.length > 0 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setSelectedFilter('all')}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>{t.filters.clear}</span>
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2 hover:border-indigo-200"
            >
              {/* Image */}
              <div 
                onClick={() => onProjectSelect?.(project.id)}
                className="relative h-48 overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 
                    onClick={() => onProjectSelect?.(project.id)}
                    className="text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-gray-700 mb-2">{t.technologies}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-gray-700 mb-2">{t.skills}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => {
                      const colors = skillColors[skill as keyof typeof skillColors];
                      return (
                        <span
                          key={skill}
                          className={`px-2 py-1 ${colors.bg} ${colors.text} rounded text-sm`}
                        >
                          {skillsNames[skill as keyof typeof skillsNames]}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => onProjectSelect?.(project.id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600">
              {language === 'fr'
                ? 'Aucun projet trouvé pour ce filtre.'
                : 'No projects found for this filter.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}