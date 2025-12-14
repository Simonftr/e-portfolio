import { ArrowLeft, Calendar, Users, Target, Code, CheckCircle, ExternalLink, Github } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
  language: 'fr' | 'en';
}

const skillColors = {
  realiser: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
  },
  optimiser: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-600',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  administrer: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
    badge: 'bg-green-100 text-green-700',
  },
  gerer: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
  },
  conduire: {
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600',
    badge: 'bg-pink-100 text-pink-700',
  },
  collaborer: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700',
  },
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

const content = {
  fr: {
    back: 'Retour aux projets',
    period: 'Période',
    team: 'Équipe',
    context: 'Contexte',
    objectives: 'Objectifs',
    technologies: 'Technologies utilisées',
    features: 'Fonctionnalités principales',
    skills: 'Compétences développées',
    challenges: 'Défis techniques',
    results: 'Résultats',
    code: 'Code source',
    links: 'Liens',
  },
  en: {
    back: 'Back to projects',
    period: 'Period',
    team: 'Team',
    context: 'Context',
    objectives: 'Objectives',
    technologies: 'Technologies used',
    features: 'Main features',
    skills: 'Developed skills',
    challenges: 'Technical challenges',
    results: 'Results',
    code: 'Source code',
    links: 'Links',
  },
};

const projectsData = {
  botanic: {
    fr: {
      title: 'Botanic',
      subtitle: 'Application métier en C#',
      image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=1200&h=600&fit=crop',
      period: 'Septembre 2022 - Janvier 2023',
      team: 'Équipe de 2 étudiants',
      year: 'BUT 1',
      context: 'Projet de première année visant à développer une application de gestion pour une jardinerie. L\'objectif était d\'apprendre les bases du développement logiciel en créant une solution métier complète.',
      objectives: [
        'Développer une application desktop en C#',
        'Implémenter une interface utilisateur intuitive',
        'Gérer la logique métier et la validation des données',
        'Travailler en équipe avec Git',
      ],
      features: [
        'Gestion du catalogue de produits (plantes, outils, accessoires)',
        'Système de recherche et filtrage avancé',
        'Validation des formulaires avec messages d\'erreur contextuels',
        'Interface responsive adaptée aux différentes tailles d\'écran',
        'Génération de rapports de stock',
      ],
      technologies: ['C#', '.NET Framework', 'WPF', 'Git', 'Visual Studio'],
      skills: ['realiser', 'conduire', 'collaborer'],
      challenges: [
        'Première expérience avec la programmation orientée objet en C#',
        'Apprentissage de la gestion des événements dans WPF',
        'Coordination du travail en équipe avec Git',
        'Validation complexe des données utilisateur',
      ],
      results: [
        'Application fonctionnelle livrée en fin de projet',
        'Interface utilisateur validée par le client (enseignant)',
        'Code source documenté et structuré selon les bonnes pratiques',
        'Présentation orale réussie du projet',
      ],
      codeUrl: '#',
    },
    en: {
      title: 'Botanic',
      subtitle: 'Business application in C#',
      image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=1200&h=600&fit=crop',
      period: 'September 2022 - January 2023',
      team: 'Team of 2 students',
      year: 'BUT 1',
      context: 'First-year project aimed at developing a management application for a garden center. The goal was to learn software development basics by creating a complete business solution.',
      objectives: [
        'Develop a desktop application in C#',
        'Implement an intuitive user interface',
        'Manage business logic and data validation',
        'Work as a team with Git',
      ],
      features: [
        'Product catalog management (plants, tools, accessories)',
        'Advanced search and filtering system',
        'Form validation with contextual error messages',
        'Responsive interface adapted to different screen sizes',
        'Stock report generation',
      ],
      technologies: ['C#', '.NET Framework', 'WPF', 'Git', 'Visual Studio'],
      skills: ['realiser', 'conduire', 'collaborer'],
      challenges: [
        'First experience with object-oriented programming in C#',
        'Learning event management in WPF',
        'Coordinating team work with Git',
        'Complex user data validation',
      ],
      results: [
        'Functional application delivered at project end',
        'User interface validated by client (teacher)',
        'Source code documented and structured following best practices',
        'Successful oral project presentation',
      ],
      codeUrl: '#',
    },
  },
  scodoc: {
    fr: {
      title: 'Scodoc',
      subtitle: 'Système de gestion d\'étudiants et de notes',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop',
      period: 'Février 2023 - Mai 2023',
      team: 'Équipe de 2 étudiants',
      year: 'BUT 1',
      context: 'Projet de base de données pour gérer les étudiants, leurs notes et leurs relevés. Ce projet visait à apprendre la modélisation et l\'implémentation de bases de données relationnelles.',
      objectives: [
        'Concevoir un schéma relationnel complet (MCD/MLD)',
        'Implémenter la base de données en PostgreSQL',
        'Créer des requêtes SQL complexes pour les bulletins',
        'Assurer l\'intégrité et la cohérence des données',
      ],
      features: [
        'Gestion complète des étudiants (inscription, informations personnelles)',
        'Système de modules et matières avec coefficients',
        'Enregistrement des notes avec calcul automatique des moyennes',
        'Génération de relevés de notes par étudiant et par semestre',
        'Contraintes d\'intégrité et triggers pour la cohérence des données',
      ],
      technologies: ['PostgreSQL', 'SQL', 'pgAdmin', 'Git'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'collaborer'],
      challenges: [
        'Modélisation d\'un schéma complexe avec de nombreuses relations',
        'Optimisation des requêtes avec des jointures multiples',
        'Mise en place d\'index pour améliorer les performances',
        'Gestion des contraintes d\'intégrité référentielle',
      ],
      results: [
        'Base de données complète et fonctionnelle',
        'Requêtes optimisées avec index (temps de réponse divisés par 3)',
        'Scripts SQL documentés et réutilisables',
        'Modèle MCD/MLD validé et conforme aux spécifications',
      ],
      codeUrl: '#',
    },
    en: {
      title: 'Scodoc',
      subtitle: 'Student and grade management system',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop',
      period: 'February 2023 - May 2023',
      team: 'Team of 2 students',
      year: 'BUT 1',
      context: 'Database project to manage students, their grades and reports. This project aimed to learn relational database modeling and implementation.',
      objectives: [
        'Design a complete relational schema (CDM/PDM)',
        'Implement the database in PostgreSQL',
        'Create complex SQL queries for reports',
        'Ensure data integrity and consistency',
      ],
      features: [
        'Complete student management (registration, personal information)',
        'Module and subject system with coefficients',
        'Grade recording with automatic average calculation',
        'Grade report generation by student and semester',
        'Integrity constraints and triggers for data consistency',
      ],
      technologies: ['PostgreSQL', 'SQL', 'pgAdmin', 'Git'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'collaborer'],
      challenges: [
        'Modeling a complex schema with many relationships',
        'Optimizing queries with multiple joins',
        'Implementing indexes to improve performance',
        'Managing referential integrity constraints',
      ],
      results: [
        'Complete and functional database',
        'Optimized queries with indexes (response time divided by 3)',
        'Documented and reusable SQL scripts',
        'CDM/PDM model validated and compliant with specifications',
      ],
      codeUrl: '#',
    },
  },
  vinted_api: {
    fr: {
      title: 'Vinted_API',
      subtitle: 'API REST pour plateforme de vente',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop',
      period: 'Septembre 2023 - Janvier 2024',
      team: 'Équipe de 5 étudiants',
      year: 'BUT 2',
      context: 'Développement d\'une API REST en C# pour une plateforme de vente de vêtements inspirée de Vinted. L\'objectif était de créer un backend robuste avec une base de données PostgreSQL.',
      objectives: [
        'Concevoir et développer une API REST complète',
        'Implémenter une architecture en couches (Controller, Service, Repository)',
        'Gérer l\'authentification et l\'autorisation',
        'Documenter l\'API avec Swagger',
      ],
      features: [
        'Endpoints CRUD complets pour articles, utilisateurs et transactions',
        'Système d\'authentification JWT',
        'Pagination et filtrage des résultats',
        'Upload et gestion d\'images',
        'Validation des données avec Data Annotations',
        'Documentation Swagger interactive',
      ],
      technologies: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Entity Framework Core', 'Swagger', 'JWT'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'conduire', 'collaborer'],
      challenges: [
        'Conception d\'une architecture RESTful propre',
        'Optimisation des requêtes avec Entity Framework',
        'Mise en place de la sécurité (JWT, hashing des mots de passe)',
        'Gestion des relations complexes entre entités',
      ],
      results: [
        'API complète avec 20+ endpoints documentés',
        'Performances optimisées avec pagination (tests de charge réussis)',
        'Code source structuré avec design patterns (Repository, DTO)',
        'Documentation Swagger complète et interactive',
      ],
      codeUrl: '#',
    },
    en: {
      title: 'Vinted_API',
      subtitle: 'REST API for sales platform',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop',
      period: 'September 2023 - January 2024',
      team: 'Team of 5 students',
      year: 'BUT 2',
      context: 'Development of a REST API in C# for a clothing sales platform inspired by Vinted. The goal was to create a robust backend with a PostgreSQL database.',
      objectives: [
        'Design and develop a complete REST API',
        'Implement a layered architecture (Controller, Service, Repository)',
        'Handle authentication and authorization',
        'Document the API with Swagger',
      ],
      features: [
        'Complete CRUD endpoints for items, users and transactions',
        'JWT authentication system',
        'Pagination and result filtering',
        'Image upload and management',
        'Data validation with Data Annotations',
        'Interactive Swagger documentation',
      ],
      technologies: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Entity Framework Core', 'Swagger', 'JWT'],
      skills: ['realiser', 'optimiser', 'administrer', 'gerer', 'conduire', 'collaborer'],
      challenges: [
        'Designing a clean RESTful architecture',
        'Optimizing queries with Entity Framework',
        'Implementing security (JWT, password hashing)',
        'Managing complex relationships between entities',
      ],
      results: [
        'Complete API with 20+ documented endpoints',
        'Optimized performance with pagination (successful load tests)',
        'Structured source code with design patterns (Repository, DTO)',
        'Complete and interactive Swagger documentation',
      ],
      codeUrl: '#',
    },
  },
  vinted_client: {
    fr: {
      title: 'VintedClient',
      subtitle: 'Interface web Vue.js',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      period: 'Février 2024 - Mai 2024',
      team: 'Équipe de 5 étudiants',
      year: 'BUT 2',
      context: 'Développement de l\'interface utilisateur web pour la plateforme Vinted, consommant l\'API développée précédemment. Focus sur l\'expérience utilisateur et le responsive design.',
      objectives: [
        'Développer une SPA (Single Page Application) avec Vue.js',
        'Consommer l\'API REST développée',
        'Créer une interface moderne et responsive',
        'Gérer l\'état de l\'application avec Pinia',
      ],
      features: [
        'Page d\'accueil avec liste d\'articles paginée',
        'Système de recherche et filtres multiples (prix, taille, état)',
        'Détails d\'article avec galerie d\'images',
        'Authentification et profil utilisateur',
        'Panier et processus d\'achat',
        'Interface responsive mobile-first',
      ],
      technologies: ['Vue.js 3', 'JavaScript', 'CSS3', 'Axios', 'Vue Router', 'Pinia'],
      skills: ['realiser', 'conduire', 'collaborer'],
      challenges: [
        'Première expérience avec Vue.js et son écosystème',
        'Gestion de l\'état avec Pinia pour les données partagées',
        'Création d\'une interface cohérente et accessible',
        'Communication avec l\'API et gestion des erreurs',
      ],
      results: [
        'Application web fonctionnelle et responsive',
        'Interface validée par des tests utilisateurs',
        'Code composants réutilisables et maintenables',
        'Intégration réussie avec l\'API backend',
      ],
      codeUrl: '#',
    },
    en: {
      title: 'VintedClient',
      subtitle: 'Vue.js web interface',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      period: 'February 2024 - May 2024',
      team: 'Team of 5 students',
      year: 'BUT 2',
      context: 'Development of the web user interface for the Vinted platform, consuming the previously developed API. Focus on user experience and responsive design.',
      objectives: [
        'Develop a SPA (Single Page Application) with Vue.js',
        'Consume the developed REST API',
        'Create a modern and responsive interface',
        'Manage application state with Pinia',
      ],
      features: [
        'Homepage with paginated item list',
        'Search system and multiple filters (price, size, condition)',
        'Item details with image gallery',
        'Authentication and user profile',
        'Shopping cart and purchase process',
        'Mobile-first responsive interface',
      ],
      technologies: ['Vue.js 3', 'JavaScript', 'CSS3', 'Axios', 'Vue Router', 'Pinia'],
      skills: ['realiser', 'conduire', 'collaborer'],
      challenges: [
        'First experience with Vue.js and its ecosystem',
        'State management with Pinia for shared data',
        'Creating a consistent and accessible interface',
        'API communication and error handling',
      ],
      results: [
        'Functional and responsive web application',
        'Interface validated by user testing',
        'Reusable and maintainable component code',
        'Successful integration with backend API',
      ],
      codeUrl: '#',
    },
  },
  movie_app: {
    fr: {
      title: 'movie_app',
      subtitle: 'Application mobile Flutter',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=600&fit=crop',
      period: 'Mars 2024 - Juin 2024',
      team: 'Projet individuel',
      year: 'BUT 2',
      context: 'Développement d\'une application mobile avec Flutter permettant de consulter des informations sur les films via une API publique (TMDB). Introduction au développement mobile cross-platform.',
      objectives: [
        'Découvrir le développement mobile avec Flutter',
        'Consommer une API REST externe (TMDB)',
        'Implémenter une navigation multi-écrans',
        'Gérer l\'état de l\'application',
      ],
      features: [
        'Liste de films populaires avec lazy loading',
        'Recherche de films par titre',
        'Page de détails avec synopsis, casting et notes',
        'Gestion des favoris en local',
        'Catégories (populaires, à venir, mieux notés)',
        'Interface adaptative (portrait/paysage)',
      ],
      technologies: ['Flutter', 'Dart', 'TMDB API', 'Provider', 'HTTP'],
      skills: ['realiser', 'optimiser', 'collaborer'],
      challenges: [
        'Apprentissage de Flutter et du langage Dart',
        'Optimisation du rendu des listes avec ListView.builder',
        'Gestion asynchrone des appels API',
        'Adaptation de l\'interface aux différentes tailles d\'écran',
      ],
      results: [
        'Application mobile fonctionnelle sur Android et iOS',
        'Performance optimisée avec lazy loading',
        'Code structuré avec séparation des responsabilités',
        'Interface fluide et agréable validée par des tests',
      ],
      codeUrl: '#',
    },
    en: {
      title: 'movie_app',
      subtitle: 'Flutter mobile application',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=600&fit=crop',
      period: 'March 2024 - June 2024',
      team: 'Individual project',
      year: 'BUT 2',
      context: 'Development of a mobile application with Flutter to consult movie information via a public API (TMDB). Introduction to cross-platform mobile development.',
      objectives: [
        'Discover mobile development with Flutter',
        'Consume an external REST API (TMDB)',
        'Implement multi-screen navigation',
        'Manage application state',
      ],
      features: [
        'Popular movie list with lazy loading',
        'Movie search by title',
        'Detail page with synopsis, cast and ratings',
        'Local favorites management',
        'Categories (popular, upcoming, top rated)',
        'Adaptive interface (portrait/landscape)',
      ],
      technologies: ['Flutter', 'Dart', 'TMDB API', 'Provider', 'HTTP'],
      skills: ['realiser', 'optimiser', 'collaborer'],
      challenges: [
        'Learning Flutter and Dart language',
        'Optimizing list rendering with ListView.builder',
        'Asynchronous API call management',
        'Adapting interface to different screen sizes',
      ],
      results: [
        'Functional mobile app on Android and iOS',
        'Optimized performance with lazy loading',
        'Structured code with separation of concerns',
        'Smooth and pleasant interface validated by testing',
      ],
      codeUrl: '#',
    },
  },
  pokemon_trainer: {
    fr: {
      title: 'Pokémon Trainer Manager',
      subtitle: 'Application iOS native en Swift',
      image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=1200&h=600&fit=crop',
      period: 'Septembre 2024 - Décembre 2024',
      team: 'Projet individuel',
      year: 'BUT 3',
      context: 'Développement d\'une application iOS native en Swift pour gérer une collection d\'entraîneurs Pokémon. Ce projet visait à apprendre le développement iOS natif avec UIKit.',
      objectives: [
        'Maîtriser Swift et UIKit',
        'Implémenter une architecture MVC',
        'Gérer la persistance des données localement',
        'Créer une interface native iOS moderne',
      ],
      features: [
        'Liste d\'entraîneurs',
        'Ajout/modification/suppression d\'entraîneurs',
        'Détails d\'entraîneur avec équipe de Pokémon',
        'Persistance des données en local',
        'Interface UIKit moderne et animations',
      ],
      technologies: ['Swift', 'UIKit', 'Xcode'],
      skills: ['realiser', 'conduire', 'collaborer'],
      challenges: [
        'Apprentissage de Swift et de l\'écosystème iOS',
        'Compréhension de l\'architecture MVC',
        'Gestion de la persistance des données',
      ],
      results: [
        'Application iOS native complète et fonctionnelle',
        'Interface conforme aux standards iOS',
        'Code structuré avec architecture MVC claire',
        'Persistance des données fiable',
      ],
      codeUrl: '#',
    },
    en: {
      title: 'Pokémon Trainer Manager',
      subtitle: 'Native iOS app in Swift',
      image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?w=1200&h=600&fit=crop',
      period: 'September 2024 - December 2024',
      team: 'Individual project',
      year: 'BUT 3',
      context: 'Development of a native iOS application in Swift to manage a collection of Pokémon trainers. This project aimed to learn native iOS development with UIKit.',
      objectives: [
        'Master Swift and UIKit',
        'Implement MVC architecture',
        'Manage local data persistence',
        'Create a modern native iOS interface',
      ],
      features: [
        'Trainer list',
        'Add/edit/delete trainers',
        'Trainer details with Pokémon team',
        'Local data persistence',
        'Modern UIKit interface and animations',
      ],
      technologies: ['Swift', 'UIKit', 'Xcode'],
      skills: ['realiser', 'conduire', 'collaborer'],
      challenges: [
        'Learning Swift and iOS ecosystem',
        'Understanding MVC architecture',
        'Managing data persistence',
      ],
      results: [
        'Complete and functional native iOS app',
        'Interface compliant with iOS standards',
        'Structured code with clear MVC architecture',
        'Reliable data persistence',
      ],
      codeUrl: '#',
    },
  },
};

export function ProjectDetail({ projectId, onBack, language }: ProjectDetailProps) {
  const t = content[language];
  const project = projectsData[projectId as keyof typeof projectsData]?.[language];

  if (!project) {
    return (
      <section className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.back}</span>
          </button>
          <div className="text-center py-16">
            <p className="text-gray-600">
              {language === 'fr' ? 'Projet non trouvé' : 'Project not found'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const skillsNames = skillNames[language];

  return (
    <section className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </button>

        {/* Header with Image */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  {project.year}
                </span>
              </div>
              <h1 className="mb-2">{project.title}</h1>
              <p className="text-white/90 text-xl">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Context */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-gray-900 mb-4">{t.context}</h2>
              <p className="text-gray-700 leading-relaxed">{project.context}</p>
            </div>

            {/* Objectives */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
                <h2 className="text-gray-900">{t.objectives}</h2>
              </div>
              <ul className="space-y-2">
                {project.objectives.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-gray-900 mb-4">{t.features}</h2>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Challenges */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h2 className="text-gray-900 mb-4">{t.challenges}</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-orange-600 mt-1">⚡</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h2 className="text-gray-900 mb-4">{t.results}</h2>
              <ul className="space-y-2">
                {project.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              {/* Period */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <h3 className="text-gray-900">{t.period}</h3>
                </div>
                <p className="text-gray-700">{project.period}</p>
              </div>

              {/* Team */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <h3 className="text-gray-900">{t.team}</h3>
                </div>
                <p className="text-gray-700">{project.team}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-gray-600" />
                  <h3 className="text-gray-900">{t.technologies}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-gray-900 mb-3">{t.skills}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill: string) => {
                    const colors = skillColors[skill as keyof typeof skillColors];
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1 ${colors.badge} rounded-full text-sm`}
                      >
                        {skillsNames[skill as keyof typeof skillsNames]}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}