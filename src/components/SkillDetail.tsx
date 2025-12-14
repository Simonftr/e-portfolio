import { ArrowLeft, CheckCircle, BookOpen, Lightbulb, FolderOpen, FileText, Image as ImageIcon, Target } from 'lucide-react';
import type { SkillType } from '../App';

interface SkillDetailProps {
  skill: SkillType;
  onBack: () => void;
  language: 'fr' | 'en';
  onProjectSelect?: (projectId: string) => void;
}

const content = {
  fr: {
    back: 'Retour aux compétences',
    level: 'Niveau',
    year: 'Année',
    definition: 'Définition',
    learnings: 'Apprentissages Critiques',
    resources: 'Ressources Mobilisées',
    situations: 'Situations de Référence',
    components: 'Composantes Essentielles',
    projects: 'Projets Associés',
    reflection: 'Réflexion',
  },
  en: {
    back: 'Back to skills',
    level: 'Level',
    year: 'Year',
    definition: 'Definition',
    learnings: 'Critical Learnings',
    resources: 'Resources Used',
    situations: 'Reference Situations',
    components: 'Essential Components',
    projects: 'Related Projects',
    reflection: 'Reflection',
  },
};

const colorSchemes = {
  blue: {
    gradient: 'from-blue-600 to-cyan-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
  },
  purple: {
    gradient: 'from-purple-600 to-pink-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
  },
  green: {
    gradient: 'from-green-600 to-teal-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600',
  },
  orange: {
    gradient: 'from-orange-600 to-red-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
  },
  indigo: {
    gradient: 'from-indigo-600 to-purple-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
  },
  yellow: {
    gradient: 'from-yellow-600 to-orange-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-600',
  },
  pink: {
    gradient: 'from-pink-600 to-rose-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600',
  },
};

const skillsData = {
  realiser: {
    fr: {
      title: 'Réaliser',
      subtitle: 'Développer des applications',
      description: 'Développer — c\'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.',
      color: 'blue',
      components: [
        'CE1.01 | En respectant les besoins décrits par le client',
        'CE1.03 | En appliquant les principes algorithmiques',
        'CE1.04 | En veillant à la qualité du code et à sa documentation',
        'CE1.06 | En choisissant les ressources techniques appropriées',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Développer des applications informatiques simples',
          definition: 'Implémenter des conceptions simples',
          learnings: [
            'AC11.01 | Implémenter des conceptions simples',
            'AC11.02 | Élaborer des conceptions simples',
            'AC11.03 | Faire des essais et évaluer leurs résultats en regard des spécifications',
            'AC11.04 | Développer des interfaces utilisateurs',
          ],
          resources: ['Programmation', 'Bases de données', 'Interfaces utilisateur', 'Tests'],
          situations: [
            {
              project: 'Botanic',
              description: 'Application métier en C# - Implémentation d\'interfaces utilisateur, gestion de la logique métier et validation des formulaires',
              technologies: ['C#', '.NET', 'WPF'],
            },
            {
              project: 'Scodoc',
              description: 'Base de données complète PostgreSQL - Scripts SQL de création de tables, gestion de l\'intégrité et requêtes',
              technologies: ['PostgreSQL', 'SQL'],
            },
          ],
          evidence: [
            'Extraits de code C# gérant la validation des formulaires (Botanic)',
            'Captures d\'écran de l\'interface finale de l\'application Botanic',
            'Scripts SQL de création du schéma Scodoc',
            'Exemples de requêtes SQL pour obtenir les relevés de notes',
          ],
          reflection: 'Dans le cadre de Botanic, j\'ai développé une application métier complète en C#. J\'ai appris à implémenter des interfaces utilisateur fonctionnelles et à gérer la logique métier. Pour Scodoc, j\'ai conçu et implémenté une base de données complète, ce qui m\'a permis de maîtriser les scripts SQL et l\'intégrité des données.',
        },
        {
          number: 2,
          year: 2,
          title: 'Partir des exigences et aller jusqu\'à une application complète',
          definition: 'À partir d\'exigences, développer une application',
          learnings: [
            'AC21.01 | Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles',
            'AC21.02 | Appliquer des principes d\'accessibilité et d\'ergonomie',
            'AC21.03 | Adopter de bonnes pratiques de conception et de programmation',
            'AC21.04 | Vérifier et valider la qualité de l\'application par les tests',
          ],
          resources: ['Conception d\'applications', 'Design patterns', 'Tests', 'Accessibilité', 'Qualité du code'],
          situations: [
            {
              project: 'Vinted_API',
              description: 'API REST en C# avec PostgreSQL - Conception d\'endpoints, validation des données et documentation Swagger',
              technologies: ['C#', '.NET', 'PostgreSQL', 'REST API', 'Swagger'],
            },
            {
              project: 'VintedClient',
              description: 'Interface web Vue - Affichage d\'annonces, filtres de recherche et consultation détaillée',
              technologies: ['Vue.js', 'JavaScript', 'CSS', 'Axios'],
            },
            {
              project: 'movie_app',
              description: 'Application mobile Flutter - Architecture, navigation entre écrans et gestion de l\'état',
              technologies: ['Flutter', 'Dart', 'REST API'],
            },
          ],
          evidence: [
            'Code d\'un endpoint /items/{id} de l\'API Vinted_API',
            'Extrait de la documentation Swagger générée',
            'Composant Vue pour l\'affichage d\'une fiche produit (VintedClient)',
            'Code du widget affichant les cartes de films (movie_app)',
            'Capture d\'écran de l\'interface movie_app',
          ],
          reflection: 'En deuxième année, j\'ai appris à partir d\'un cahier des charges pour créer une application complète. L\'API Vinted_API m\'a permis de maîtriser les endpoints REST et la validation des données. Le client Vue m\'a appris à créer des interfaces cohérentes, et movie_app m\'a initié au développement mobile avec Flutter.',
        },
        {
          number: 3,
          year: 3,
          title: 'Adapter des applications sur un ensemble de supports',
          definition: 'Développer des applications en partant des exigences et en tenant compte des contraintes multi-supports',
          learnings: [
            'AC31.01 | Développer à l\'aide d\'un framework de développement',
            'AC31.02 | Utiliser des techniques algorithmiques adaptées',
            'AC31.03 | Faire évoluer une application existante',
            'AC31.04 | Intégrer des solutions dans un environnement de production',
          ],
          resources: ['Frameworks modernes', 'Architecture logicielle', 'Responsive design', 'Production'],
          situations: [
            {
              project: 'Pokémon Trainer Manager',
              description: 'Application iOS en Swift - Gestion d\'entraîneurs Pokémon avec vues, modèles et navigation',
              technologies: ['Swift', 'SwiftUI', 'Xcode'],
            },
          ],
          evidence: [
            'Extrait du code Swift pour l\'affichage de la liste d\'entraîneurs',
            'Capture d\'écran de l\'application iOS',
            'Documentation de l\'architecture de l\'application',
          ],
          reflection: 'En troisième année, j\'ai développé une application iOS native en Swift. Ce projet m\'a permis de comprendre les spécificités du développement mobile natif, la gestion des modèles de données et la navigation dans un environnement iOS.',
        },
      ],
    },
    en: {
      title: 'Develop',
      subtitle: 'Develop applications',
      description: 'Develop — that is, design, code, test and integrate — an IT solution for a client.',
      color: 'blue',
      components: [
        'EC1.01 | Respecting client requirements',
        'EC1.03 | Applying algorithmic principles',
        'EC1.04 | Ensuring code quality and documentation',
        'EC1.06 | Choosing appropriate technical resources',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Develop simple computer applications',
          definition: 'Implement simple designs',
          learnings: [
            'CL11.01 | Implement simple designs',
            'CL11.02 | Develop simple designs',
            'CL11.03 | Test and evaluate results against specifications',
            'CL11.04 | Develop user interfaces',
          ],
          resources: ['Programming', 'Databases', 'User interfaces', 'Testing'],
          situations: [
            {
              project: 'Botanic',
              description: 'Business application in C# - User interface implementation, business logic management and form validation',
              technologies: ['C#', '.NET', 'WPF'],
            },
            {
              project: 'Scodoc',
              description: 'Complete PostgreSQL database - SQL table creation scripts, integrity management and queries',
              technologies: ['PostgreSQL', 'SQL'],
            },
          ],
          evidence: [
            'C# code extracts managing form validation (Botanic)',
            'Screenshots of the final Botanic application interface',
            'SQL scripts for Scodoc schema creation',
            'SQL query examples for grade reports',
          ],
          reflection: 'With Botanic, I developed a complete business application in C#. I learned to implement functional user interfaces and manage business logic. For Scodoc, I designed and implemented a complete database, which helped me master SQL scripts and data integrity.',
        },
        {
          number: 2,
          year: 2,
          title: 'From requirements to complete application',
          definition: 'From requirements, develop an application',
          learnings: [
            'CL21.01 | Develop and implement functional and non-functional specifications',
            'CL21.02 | Apply accessibility and ergonomics principles',
            'CL21.03 | Adopt good design and programming practices',
            'CL21.04 | Verify and validate application quality through tests',
          ],
          resources: ['Application design', 'Design patterns', 'Testing', 'Accessibility', 'Code quality'],
          situations: [
            {
              project: 'Vinted_API',
              description: 'REST API in C# with PostgreSQL - Endpoint design, data validation and Swagger documentation',
              technologies: ['C#', '.NET', 'PostgreSQL', 'REST API', 'Swagger'],
            },
            {
              project: 'VintedClient',
              description: 'Vue web interface - Listing display, search filters and detailed view',
              technologies: ['Vue.js', 'JavaScript', 'CSS', 'Axios'],
            },
            {
              project: 'movie_app',
              description: 'Flutter mobile app - Architecture, screen navigation and state management',
              technologies: ['Flutter', 'Dart', 'REST API'],
            },
          ],
          evidence: [
            '/items/{id} endpoint code from Vinted_API',
            'Generated Swagger documentation extract',
            'Vue component for product card display (VintedClient)',
            'Widget code displaying movie cards (movie_app)',
            'Screenshot of movie_app interface',
          ],
          reflection: 'In second year, I learned to start from specifications to create a complete application. Vinted_API helped me master REST endpoints and data validation. The Vue client taught me to create consistent interfaces, and movie_app introduced me to mobile development with Flutter.',
        },
        {
          number: 3,
          year: 3,
          title: 'Adapt applications across multiple platforms',
          definition: 'Develop applications from requirements while considering multi-platform constraints',
          learnings: [
            'CL31.01 | Develop using a development framework',
            'CL31.02 | Use appropriate algorithmic techniques',
            'CL31.03 | Evolve an existing application',
            'CL31.04 | Integrate solutions in a production environment',
          ],
          resources: ['Modern frameworks', 'Software architecture', 'Responsive design', 'Production'],
          situations: [
            {
              project: 'Pokémon Trainer Manager',
              description: 'iOS app in Swift - Managing Pokémon trainers with views, models and navigation',
              technologies: ['Swift', 'SwiftUI', 'Xcode'],
            },
          ],
          evidence: [
            'Swift code extract for trainer list display',
            'iOS application screenshot',
            'Application architecture documentation',
          ],
          reflection: 'In third year, I developed a native iOS application in Swift. This project helped me understand the specifics of native mobile development, data model management and navigation in an iOS environment.',
        },
      ],
    },
  },
  optimiser: {
    fr: {
      title: 'Optimiser',
      subtitle: 'Optimiser des applications',
      description: 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d\'exécution, précision, consommation de ressources.',
      color: 'yellow',
      components: [
        'CE2.01 | En choisissant des structures de données complexes adaptées au problème',
        'CE2.02 | En respectant des contraintes d\'environnement économique',
        'CE2.03 | En maîtrisant les outils mathématiques et statistiques',
        'CE2.04 | En suivant une démarche scientifique',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Appréhender et construire des algorithmes',
          definition: 'Analyser un problème et implémenter une solution algorithmique',
          learnings: [
            'AC12.01 | Analyser un problème avec méthode',
            'AC12.02 | Comparer des algorithmes pour des problèmes classiques',
            'AC12.03 | Formaliser et mettre en œuvre des outils mathématiques pour l\'informatique',
          ],
          resources: ['Algorithmique', 'Structures de données', 'Mathématiques', 'Complexité'],
          situations: [],
          evidence: [],
          reflection: 'Au niveau 1, j\'ai appris les fondamentaux de l\'algorithmique à travers divers exercices pratiques. J\'ai appris à analyser des problèmes et à choisir les bonnes structures de données.',
        },
        {
          number: 2,
          year: 2,
          title: 'Sélectionner les algorithmes adéquats',
          definition: 'Choisir les structures de données et algorithmes les plus adaptés',
          learnings: [
            'AC22.01 | Sélectionner les algorithmes adéquats pour répondre à un problème',
            'AC22.02 | Appliquer les principes de sécurisation',
            'AC22.03 | Évaluer l\'impact environnemental d\'une solution',
          ],
          resources: ['Structures de données avancées', 'Sécurité', 'Impact environnemental', 'Performance'],
          situations: [
            {
              project: 'Scodoc',
              description: 'Optimisation SQL - Mise en place d\'index sur les colonnes id_etudiant et id_matiere, division par trois des temps de réponse',
              technologies: ['PostgreSQL', 'Indexation', 'Optimisation'],
            },
            {
              project: 'Vinted_API',
              description: 'Structures de données optimisées - DTO, modèles d\'entités, pagination et tri pour améliorer les performances',
              technologies: ['C#', 'DTO', 'Pagination', 'Sérialisation JSON'],
            },
            {
              project: 'movie_app',
              description: 'Gestion efficace des listes - ListView.builder() avec lazy loading pour optimiser l\'affichage',
              technologies: ['Flutter', 'Lazy loading', 'ListView'],
            },
          ],
          evidence: [
            'Requêtes SQL avant/après optimisation (Scodoc)',
            'Code du système de pagination de l\'API (Vinted_API)',
            'Résultats de tests de charge de l\'API',
            'Widget ListView.builder() avec commentaires sur les gains de performance (movie_app)',
          ],
          reflection: 'J\'ai appris à optimiser mes applications en choisissant les bonnes structures de données. L\'optimisation SQL de Scodoc m\'a montré l\'importance des index. L\'API Vinted m\'a appris la pagination et le tri efficace. Flutter m\'a initié au lazy loading pour éviter les re-rendus inutiles.',
        },
        {
          number: 3,
          year: 3,
          title: 'Analyser et optimiser des applications',
          definition: 'Profiler et optimiser des applications en production',
          learnings: [
            'AC32.01 | Formaliser et modéliser des situations complexes',
            'AC32.02 | Utiliser des techniques algorithmiques adaptées',
            'AC32.03 | Choisir et utiliser des bibliothèques et méthodes dédiées',
          ],
          resources: ['Profiling', 'Métriques', 'Optimisation', 'Bibliothèques spécialisées'],
          situations: [],
          evidence: [],
          reflection: 'Le niveau 3 m\'apprend à analyser et optimiser des applications en production avec des outils de profiling professionnels et des métriques mesurables.',
        },
      ],
    },
    en: {
      title: 'Optimize',
      subtitle: 'Optimize applications',
      description: 'Propose optimized IT applications based on specific criteria: execution time, accuracy, resource consumption.',
      color: 'yellow',
      components: [
        'EC2.01 | Choosing complex data structures suited to the problem',
        'EC2.02 | Respecting economic environment constraints',
        'EC2.03 | Mastering mathematical and statistical tools',
        'EC2.04 | Following a scientific approach',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Understand and build algorithms',
          definition: 'Analyze a problem and implement an algorithmic solution',
          learnings: [
            'CL12.01 | Analyze a problem methodically',
            'CL12.02 | Compare algorithms for classic problems',
            'CL12.03 | Formalize and implement mathematical tools for computing',
          ],
          resources: ['Algorithms', 'Data structures', 'Mathematics', 'Complexity'],
          situations: [],
          evidence: [],
          reflection: 'At level 1, I learned the fundamentals of algorithms through various practical exercises. I learned to analyze problems and choose the right data structures.',
        },
        {
          number: 2,
          year: 2,
          title: 'Select appropriate algorithms',
          definition: 'Choose the most suitable data structures and algorithms',
          learnings: [
            'CL22.01 | Select appropriate algorithms to solve a problem',
            'CL22.02 | Apply security principles',
            'CL22.03 | Evaluate the environmental impact of a solution',
          ],
          resources: ['Advanced data structures', 'Security', 'Environmental impact', 'Performance'],
          situations: [
            {
              project: 'Scodoc',
              description: 'SQL optimization - Index implementation on id_etudiant and id_matiere columns, response time divided by three',
              technologies: ['PostgreSQL', 'Indexing', 'Optimization'],
            },
            {
              project: 'Vinted_API',
              description: 'Optimized data structures - DTOs, entity models, pagination and sorting to improve performance',
              technologies: ['C#', 'DTO', 'Pagination', 'JSON Serialization'],
            },
            {
              project: 'movie_app',
              description: 'Efficient list management - ListView.builder() with lazy loading to optimize display',
              technologies: ['Flutter', 'Lazy loading', 'ListView'],
            },
          ],
          evidence: [
            'SQL queries before/after optimization (Scodoc)',
            'API pagination system code (Vinted_API)',
            'API load test results',
            'ListView.builder() widget with performance gain comments (movie_app)',
          ],
          reflection: 'I learned to optimize my applications by choosing the right data structures. SQL optimization in Scodoc showed me the importance of indexes. The Vinted API taught me efficient pagination and sorting. Flutter introduced me to lazy loading to avoid unnecessary re-renders.',
        },
        {
          number: 3,
          year: 3,
          title: 'Analyze and optimize applications',
          definition: 'Profile and optimize production applications',
          learnings: [
            'CL32.01 | Formalize and model complex situations',
            'CL32.02 | Use appropriate algorithmic techniques',
            'CL32.03 | Choose and use dedicated libraries and methods',
          ],
          resources: ['Profiling', 'Metrics', 'Optimization', 'Specialized libraries'],
          situations: [],
          evidence: [],
          reflection: 'Level 3 teaches me to analyze and optimize production applications with professional profiling tools and measurable metrics.',
        },
      ],
    },
  },
  administrer: {
    fr: {
      title: 'Administrer',
      subtitle: 'Administrer des systèmes informatiques',
      description: 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux.',
      color: 'green',
      components: [
        'CE3.01 | En respectant les procédures',
        'CE3.02 | En appliquant les règles de sécurité',
        'CE3.03 | En garantissant la qualité de service',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Installer et configurer un poste de travail',
          definition: 'Configurer un environnement de développement',
          learnings: [
            'AC13.01 | Identifier les différents composants d\'un système',
            'AC13.02 | Utiliser les fonctionnalités de base d\'un OS',
            'AC13.03 | Installer et configurer un système d\'exploitation et des outils',
            'AC13.04 | Configurer un poste de travail dans un réseau d\'entreprise',
          ],
          resources: ['Systèmes d\'exploitation', 'Réseaux', 'Configuration', 'Virtualisation'],
          situations: [],
          evidence: [],
          reflection: 'J\'ai appris à installer et configurer des environnements de développement complets en respectant les bonnes pratiques système et réseau.',
        },
        {
          number: 2,
          year: 2,
          title: 'Déployer des services dans une architecture réseau',
          definition: 'Mettre en place des services sécurisés',
          learnings: [
            'AC23.01 | Concevoir et développer des applications communicantes',
            'AC23.02 | Utiliser des serveurs et des services réseaux virtualisés',
            'AC23.03 | Sécuriser les services et données d\'un système',
          ],
          resources: ['Virtualisation', 'Docker', 'Réseaux', 'Sécurité', 'Services'],
          situations: [
            {
              project: 'Scodoc',
              description: 'Déploiement PostgreSQL - Installation, configuration, gestion des droits et contraintes de qualité',
              technologies: ['PostgreSQL', 'Configuration', 'Droits', 'Sécurité'],
            },
            {
              project: 'Vinted_API',
              description: 'Configuration environnement backend - Base PostgreSQL, serveur C#, fichiers de configuration',
              technologies: ['PostgreSQL', 'C#', 'Configuration'],
            },
          ],
          evidence: [
            'Scripts SQL d\'initialisation de Scodoc',
            'Capture de la structure de la base Scodoc',
            'Fichiers de configuration (Vinted_API)',
            'Capture du test de connexion à la base',
          ],
          reflection: 'J\'ai appris à déployer et configurer des bases de données et des environnements backend. Scodoc m\'a appris la gestion des droits PostgreSQL. Vinted_API m\'a initié à la configuration d\'environnements de développement complets.',
        },
      ],
    },
    en: {
      title: 'Administer',
      subtitle: 'Administer IT systems',
      description: 'Install, configure, deploy, maintain operational infrastructures, services and networks.',
      color: 'green',
      components: [
        'EC3.01 | Following procedures',
        'EC3.02 | Applying security rules',
        'EC3.03 | Ensuring quality of service',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Install and configure a workstation',
          definition: 'Configure a development environment',
          learnings: [
            'CL13.01 | Identify different system components',
            'CL13.02 | Use basic OS functionalities',
            'CL13.03 | Install and configure an OS and tools',
            'CL13.04 | Configure a workstation in a corporate network',
          ],
          resources: ['Operating systems', 'Networks', 'Configuration', 'Virtualization'],
          situations: [],
          evidence: [],
          reflection: 'I learned to install and configure complete development environments following system and network best practices.',
        },
        {
          number: 2,
          year: 2,
          title: 'Deploy services in a network architecture',
          definition: 'Set up secure services',
          learnings: [
            'CL23.01 | Design and develop communicating applications',
            'CL23.02 | Use virtualized servers and network services',
            'CL23.03 | Secure services and data of a system',
          ],
          resources: ['Virtualization', 'Docker', 'Networks', 'Security', 'Services'],
          situations: [
            {
              project: 'Scodoc',
              description: 'PostgreSQL deployment - Installation, configuration, rights management and quality constraints',
              technologies: ['PostgreSQL', 'Configuration', 'Rights', 'Security'],
            },
            {
              project: 'Vinted_API',
              description: 'Backend environment configuration - PostgreSQL database, C# server, configuration files',
              technologies: ['PostgreSQL', 'C#', 'Configuration'],
            },
          ],
          evidence: [
            'Scodoc initialization SQL scripts',
            'Scodoc database structure screenshot',
            'Configuration files (Vinted_API)',
            'Database connection test screenshot',
          ],
          reflection: 'I learned to deploy and configure databases and backend environments. Scodoc taught me PostgreSQL rights management. Vinted_API introduced me to complete development environment configuration.',
        },
      ],
    },
  },
  gerer: {
    fr: {
      title: 'Gérer',
      subtitle: 'Gérer des données de l\'information',
      description: 'Concevoir, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l\'entreprise.',
      color: 'purple',
      components: [
        'CE4.01 | En respectant les réglementations sur le respect de la vie privée',
        'CE4.02 | En sécurisant les données',
        'CE4.03 | En optimisant les modèles de données',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Concevoir et mettre en place une base de données',
          definition: 'Modéliser et créer une base de données relationnelle',
          learnings: [
            'AC14.01 | Mettre à jour et interroger une base de données relationnelle',
            'AC14.02 | Visualiser des données',
            'AC14.03 | Concevoir une base de données relationnelle à partir d\'un cahier des charges',
          ],
          resources: ['SQL', 'Modélisation', 'Bases de données relationnelles', 'Visualisation'],
          situations: [
            {
              project: 'Scodoc',
              description: 'Conception MCD/MLD complet - Modélisation d\'étudiants, notes, modules et matières avec requêtes de génération de bulletins',
              technologies: ['SQL', 'MCD', 'MLD', 'PostgreSQL'],
            },
          ],
          evidence: [
            'Diagramme MCD/MLD de Scodoc',
            'Requête SQL de génération des bulletins',
            'Scripts de création des tables',
          ],
          reflection: 'Pour Scodoc, j\'ai modélisé et réalisé un schéma relationnel complet. J\'ai appris à concevoir des bases de données à partir de cahiers des charges et à les interroger efficacement pour générer des rapports.',
        },
        {
          number: 2,
          year: 2,
          title: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
          definition: 'Gérer et sécuriser les données',
          learnings: [
            'AC24.01 | Optimiser les modèles de données',
            'AC24.02 | Assurer la sécurité des données',
            'AC24.03 | Organiser la restitution de données à travers un outil de visualisation',
          ],
          resources: ['Optimisation', 'Sécurité', 'RGPD', 'Visualisation de données'],
          situations: [
            {
              project: 'Vinted (API + Client)',
              description: 'Gestion des données utilisateurs - Structure (produits, utilisateurs, transactions) et protection via validation et gestion des droits',
              technologies: ['PostgreSQL', 'C#', 'Validation', 'Sécurité'],
            },
          ],
          evidence: [
            'Modèle d\'entité User de l\'API',
            'Requête SQL filtrant les données sensibles',
            'Code de validation des entrées',
          ],
          reflection: 'J\'ai géré la structure des données de Vinted (API + Client) et assuré leur protection via la validation des entrées et la gestion des droits. J\'ai appris l\'importance de la sécurisation des données utilisateurs.',
        },
      ],
    },
    en: {
      title: 'Manage',
      subtitle: 'Manage information data',
      description: 'Design, manage, administer and exploit company data and make all information available for good company management.',
      color: 'purple',
      components: [
        'EC4.01 | Respecting privacy regulations',
        'EC4.02 | Securing data',
        'EC4.03 | Optimizing data models',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Design and implement a database',
          definition: 'Model and create a relational database',
          learnings: [
            'CL14.01 | Update and query a relational database',
            'CL14.02 | Visualize data',
            'CL14.03 | Design a relational database from specifications',
          ],
          resources: ['SQL', 'Modeling', 'Relational databases', 'Visualization'],
          situations: [
            {
              project: 'Scodoc',
              description: 'Complete CDM/PDM design - Modeling of students, grades, modules and subjects with report generation queries',
              technologies: ['SQL', 'CDM', 'PDM', 'PostgreSQL'],
            },
          ],
          evidence: [
            'Scodoc CDM/PDM diagram',
            'SQL query for report generation',
            'Table creation scripts',
          ],
          reflection: 'For Scodoc, I modeled and created a complete relational schema. I learned to design databases from specifications and query them efficiently to generate reports.',
        },
        {
          number: 2,
          year: 2,
          title: 'Optimize database, interact with application and implement security',
          definition: 'Manage and secure data',
          learnings: [
            'CL24.01 | Optimize data models',
            'CL24.02 | Ensure data security',
            'CL24.03 | Organize data presentation through visualization tools',
          ],
          resources: ['Optimization', 'Security', 'GDPR', 'Data visualization'],
          situations: [
            {
              project: 'Vinted (API + Client)',
              description: 'User data management - Structure (products, users, transactions) and protection via validation and rights management',
              technologies: ['PostgreSQL', 'C#', 'Validation', 'Security'],
            },
          ],
          evidence: [
            'API User entity model',
            'SQL query filtering sensitive data',
            'Input validation code',
          ],
          reflection: 'I managed the Vinted (API + Client) data structure and ensured their protection through input validation and rights management. I learned the importance of securing user data.',
        },
      ],
    },
  },
  conduire: {
    fr: {
      title: 'Conduire',
      subtitle: 'Conduire un projet',
      description: 'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique.',
      color: 'pink',
      components: [
        'CE5.01 | En identifiant les besoins métiers des clients',
        'CE5.02 | En appliquant une démarche de suivi de projet',
        'CE5.03 | En développant une communication efficace',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Identifier les besoins et mettre en place un environnement de développement',
          definition: 'Comprendre les besoins et organiser le travail',
          learnings: [
            'AC15.01 | Identifier les processus présents dans une organisation',
            'AC15.02 | Formaliser les besoins du client et de l\'utilisateur',
            'AC15.03 | Identifier les critères de faisabilité d\'un projet',
            'AC15.04 | Définir et mettre en œuvre une démarche de suivi',
          ],
          resources: ['Gestion de projet', 'Analyse des besoins', 'Planification', 'Outils collaboratifs'],
          situations: [
            {
              project: 'Botanic',
              description: 'Gestion de projet étudiant avec planification et suivi, répartition des tâches',
              technologies: ['Git', 'GitHub'],
            },
          ],
          evidence: [
            'Capture du tableau Kanban utilisé pour Botanic',
            'Cahier des charges et documentation des besoins',
            'Planning de répartition des tâches',
          ],
          reflection: 'Dans Botanic, j\'ai utilisé des outils de gestion (GitHub) pour répartir les tâches et suivre l\'avancement. J\'ai appris à identifier les besoins clients et à mettre en place des outils de suivi adaptés.',
        },
        {
          number: 2,
          year: 2,
          title: 'Appliquer une démarche de suivi de projet',
          definition: 'Gérer un projet avec méthodologie agile',
          learnings: [
            'AC25.01 | Choisir et appliquer une méthode de conduite de projet',
            'AC25.02 | Élaborer et présenter des documents de suivi',
            'AC25.03 | Communiquer de manière appropriée avec les parties prenantes',
          ],
          resources: ['Méthodes agiles', 'Scrum', 'Documentation', 'Communication'],
          situations: [
            {
              project: 'Vinted (API + Client)',
              description: 'Projet complet avec suivi hebdomadaire, répartition des tâches et documentation',
              technologies: ['Git', 'Documentation'],
            },
          ],
          evidence: [
            'Historique Git montrant la répartition des tâches',
            'Captures du système de suivi de projet',
            'Documentation de projet collaborative',
          ],
          reflection: 'Les projets Vinted m\'ont appris à suivre un projet de A à Z avec des outils professionnels. J\'ai maîtrisé le suivi de projet et la documentation collaborative.',
        },
        {
          number: 3,
          year: 3,
          title: 'Maîtriser la qualité et la satisfaction client',
          definition: 'Piloter un projet avec exigences qualité',
          learnings: [
            'AC35.01 | Respecter et faire respecter les procédures qualité',
            'AC35.02 | Piloter la qualité en collaboration avec les équipes',
            'AC35.03 | Mesurer la satisfaction client',
          ],
          resources: ['Qualité', 'Satisfaction client', 'Pilotage', 'Métriques'],
          situations: [],
          evidence: [],
          reflection: 'Le niveau 3 m\'apprend à piloter la qualité d\'un projet et à mesurer la satisfaction client avec des métriques concrètes.',
        },
      ],
    },
    en: {
      title: 'Lead',
      subtitle: 'Lead a project',
      description: 'Meet user needs regarding the client value chain, organize and manage an IT project.',
      color: 'pink',
      components: [
        'EC5.01 | Identifying client business needs',
        'EC5.02 | Applying project tracking approach',
        'EC5.03 | Developing effective communication',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Identify needs and set up development environment',
          definition: 'Understand needs and organize work',
          learnings: [
            'CL15.01 | Identify processes present in an organization',
            'CL15.02 | Formalize client and user needs',
            'CL15.03 | Identify project feasibility criteria',
            'CL15.04 | Define and implement tracking approach',
          ],
          resources: ['Project management', 'Needs analysis', 'Planning', 'Collaborative tools'],
          situations: [
            {
              project: 'Botanic',
              description: 'Student project management with planning and tracking, task distribution',
              technologies: ['Git', 'GitHub'],
            },
          ],
          evidence: [
            'Kanban board screenshot used for Botanic',
            'Specifications and requirements documentation',
            'Task distribution planning',
          ],
          reflection: 'In Botanic, I used management tools (GitHub) to distribute tasks and track progress. I learned to identify client needs and set up appropriate tracking tools.',
        },
        {
          number: 2,
          year: 2,
          title: 'Apply project tracking approach',
          definition: 'Manage project with agile methodology',
          learnings: [
            'CL25.01 | Choose and apply a project management method',
            'CL25.02 | Develop and present tracking documents',
            'CL25.03 | Communicate appropriately with stakeholders',
          ],
          resources: ['Agile methods', 'Scrum', 'Documentation', 'Communication'],
          situations: [
            {
              project: 'Vinted (API + Client)',
              description: 'Complete project with weekly tracking, task distribution and documentation',
              technologies: ['Git', 'Documentation'],
            },
          ],
          evidence: [
            'Git history showing task distribution',
            'Project tracking system screenshots',
            'Collaborative project documentation',
          ],
          reflection: 'The Vinted projects taught me to track a project from A to Z with professional tools. I mastered project tracking and collaborative documentation.',
        },
        {
          number: 3,
          year: 3,
          title: 'Master quality and client satisfaction',
          definition: 'Manage project with quality requirements',
          learnings: [
            'CL35.01 | Respect and enforce quality procedures',
            'CL35.02 | Manage quality in collaboration with teams',
            'CL35.03 | Measure client satisfaction',
          ],
          resources: ['Quality', 'Client satisfaction', 'Management', 'Metrics'],
          situations: [],
          evidence: [],
          reflection: 'Level 3 teaches me to manage project quality and measure client satisfaction with concrete metrics.',
        },
      ],
    },
  },
  collaborer: {
    fr: {
      title: 'Collaborer',
      subtitle: 'Travailler dans une équipe informatique',
      description: 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
      color: 'indigo',
      components: [
        'CE6.01 | En comprenant les enjeux économiques et les rôles',
        'CE6.02 | En rendant compte de son activité',
        'CE6.03 | En développant des compétences interpersonnelles',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Identifier ses aptitudes pour travailler en équipe',
          definition: 'Découvrir le travail en équipe',
          learnings: [
            'AC16.01 | Identifier les acteurs et les différents rôles',
            'AC16.02 | Appréhender les enjeux de l\'économie de l\'informatique',
            'AC16.03 | Comprendre les enjeux de l\'économie d\'une organisation',
            'AC16.04 | Acquérir les compétences interpersonnelles pour travailler en équipe',
          ],
          resources: ['Communication', 'Travail d\'équipe', 'Git collaboratif', 'Métiers IT'],
          situations: [
            {
              project: 'Tous les projets de groupe',
              description: 'Travail collaboratif avec répartition des tâches et utilisation de Git',
              technologies: ['Git'],
            },
          ],
          evidence: [
            'Historique Git montrant les contributions de chaque membre',
            'Exemples de discussions techniques ayant résolu des problèmes',
            'Documentation collaborative rédigée en groupe',
          ],
          reflection: 'Dans chacun de mes projets (Scodoc, Botanic, etc.), j\'ai travaillé en équipe. Nous avons réparti les tâches, communiqué via Git et rédigé des documents partagés. J\'ai découvert les différents rôles en équipe et développé mes compétences interpersonnelles.',
        },
        {
          number: 2,
          year: 2,
          title: 'Situer son rôle et ses missions au sein d\'une équipe',
          definition: 'Se positionner dans une équipe',
          learnings: [
            'AC26.01 | Comprendre la diversité et la complémentarité des domaines informatiques',
            'AC26.02 | Appliquer une démarche de suivi de projet en équipe',
            'AC26.03 | Rendre compte de son activité professionnelle',
          ],
          resources: ['Méthodes agiles', 'Code review', 'Reporting', 'Collaboration'],
          situations: [
            {
              project: 'Vinted (API + Client)',
              description: 'Projet en équipe avec répartition frontend/backend et code reviews',
              technologies: ['Git'],
            },
          ],
          evidence: [
            'Exemples de code reviews effectuées sur GitHub',
            'Historique des contributions montrant la collaboration',
            'Documentation de répartition des tâches',
          ],
          reflection: 'Le projet Vinted m\'a appris à me positionner dans une équipe (backend API vs frontend Client). J\'ai pratiqué les code reviews et appris à rendre compte de mon activité.',
        },
        {
          number: 3,
          year: 3,
          title: 'Manager une équipe informatique',
          definition: 'Développer des compétences de leadership',
          learnings: [
            'AC36.01 | Organiser et partager une veille technologique et informationnelle',
            'AC36.02 | Identifier les enjeux de l\'intelligence économique',
            'AC36.03 | Caractériser, évaluer et mettre en œuvre des méthodes de management',
            'AC36.04 | Accompagner le management de projet informatique',
          ],
          resources: ['Leadership', 'Veille technologique', 'Management', 'Conduite du changement'],
          situations: [],
          evidence: [],
          reflection: 'Le niveau 3 développe mes compétences en leadership et en accompagnement d\'équipe, notamment via la veille technologique partagée et la participation au management.',
        },
      ],
    },
    en: {
      title: 'Collaborate',
      subtitle: 'Work in an IT team',
      description: 'Acquire, develop and exploit the skills needed to work effectively in an IT team.',
      color: 'indigo',
      components: [
        'EC6.01 | Understanding economic stakes and roles',
        'EC6.02 | Reporting on activity',
        'EC6.03 | Developing interpersonal skills',
      ],
      levels: [
        {
          number: 1,
          year: 1,
          title: 'Identify skills to work in a team',
          definition: 'Discover teamwork',
          learnings: [
            'CL16.01 | Identify actors and different roles',
            'CL16.02 | Understand IT economics issues',
            'CL16.03 | Understand organization economics issues',
            'CL16.04 | Acquire interpersonal skills for teamwork',
          ],
          resources: ['Communication', 'Teamwork', 'Collaborative Git', 'IT careers'],
          situations: [
            {
              project: 'All group projects',
              description: 'Collaborative work with task distribution and Git usage',
              technologies: ['Git'],
            },
          ],
          evidence: [
            'Git history showing each member\'s contributions',
            'Examples of technical discussions that solved problems',
            'Collaborative documentation written as a group',
          ],
          reflection: 'In each of my projects (Scodoc, Botanic, etc.), I worked in a team. We distributed tasks, communicated via Git and wrote shared documents. I discovered different team roles and developed my interpersonal skills.',
        },
        {
          number: 2,
          year: 2,
          title: 'Position your role within a team',
          definition: 'Position yourself in a team',
          learnings: [
            'CL26.01 | Understand diversity and complementarity of IT domains',
            'CL26.02 | Apply team project tracking approach',
            'CL26.03 | Report on professional activity',
          ],
          resources: ['Agile methods', 'Code review', 'Reporting', 'Collaboration'],
          situations: [
            {
              project: 'Vinted (API + Client)',
              description: 'Team project with frontend/backend distribution and code reviews',
              technologies: ['Git'],
            },
          ],
          evidence: [
            'Examples of code reviews performed on GitHub',
            'Contribution history showing collaboration',
            'Task distribution documentation',
          ],
          reflection: 'The Vinted project taught me to position myself in a team (backend API vs frontend Client). I practiced code reviews and learned to report on my activity.',
        },
        {
          number: 3,
          year: 3,
          title: 'Manage an IT team',
          definition: 'Develop leadership skills',
          learnings: [
            'CL36.01 | Organize and share technological and informational watch',
            'CL36.02 | Identify economic intelligence stakes',
            'CL36.03 | Characterize, evaluate and implement management methods',
            'CL36.04 | Support IT project management',
          ],
          resources: ['Leadership', 'Tech watch', 'Management', 'Change management'],
          situations: [],
          evidence: [],
          reflection: 'Level 3 develops my leadership and team support skills, particularly through shared tech watch and participation in management.',
        },
      ],
    },
  },
};

export function SkillDetail({ skill, onBack, language, onProjectSelect }: SkillDetailProps) {
  if (!skill) return null;

  const t = content[language];
  const skillData = skillsData[skill]?.[language];
  
  if (!skillData) return null;

  const colors = colorSchemes[skillData.color as keyof typeof colorSchemes];

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

        {/* Header */}
        <div className={`bg-gradient-to-r ${colors.gradient} rounded-xl p-8 mb-8 text-white`}>
          <h1 className="mb-2">{skillData.title}</h1>
          <p className="text-white/90 mb-4">{skillData.subtitle}</p>
          {skillData.description && <p className="text-white/80 mb-6">{skillData.description}</p>}
          
          {/* Essential Components */}
          {skillData.components && skillData.components.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5" />
                <h3>{t.components}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {skillData.components.map((component: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <span className="text-white/80">•</span>
                    <span className="text-white/90">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Levels */}
        <div className="space-y-12">
          {skillData.levels.map((level: any) => (
            <div key={level.number} className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${colors.border}`}>
              {/* Level Header */}
              <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-4 py-1 bg-white/20 rounded-full">
                    {t.level} {level.number}
                  </span>
                  <span className="px-4 py-1 bg-white/20 rounded-full">
                    {t.year} {level.year}
                  </span>
                </div>
                <h2 className="mb-2">{level.title}</h2>
                {level.definition && <p className="text-white/90">{level.definition}</p>}
              </div>

              {/* Level Content */}
              <div className="p-6 space-y-6">
                {/* Critical Learnings */}
                {level.learnings && level.learnings.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className={`w-5 h-5 ${colors.text}`} />
                      <h3 className="text-gray-900">{t.learnings}</h3>
                    </div>
                    <ul className="space-y-2">
                      {level.learnings.map((learning: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className={`${colors.text} mt-1`}>•</span>
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Resources */}
                {level.resources && level.resources.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className={`w-5 h-5 ${colors.text}`} />
                      <h3 className="text-gray-900">{t.resources}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {level.resources.map((resource: string, index: number) => (
                        <span key={index} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full`}>
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reference Situations / Projects */}
                {level.situations && level.situations.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FolderOpen className={`w-5 h-5 ${colors.text}`} />
                      <h3 className="text-gray-900">{t.situations}</h3>
                    </div>
                    <div className="grid gap-4">
                      {level.situations.map((situation: any, index: number) => {
                        // Convert project name to project ID
                        const projectIdMap: { [key: string]: string } = {
                          'Botanic': 'botanic',
                          'Scodoc': 'scodoc',
                          'Vinted_API': 'vinted_api',
                          'VintedClient': 'vinted_client',
                          'movie_app': 'movie_app',
                          'Pokémon Trainer Manager': 'pokemon_trainer',
                        };
                        const projectId = projectIdMap[situation.project];
                        
                        return (
                          <div 
                            key={index} 
                            onClick={() => projectId && onProjectSelect?.(projectId)}
                            className={`p-4 ${colors.bg} rounded-lg border ${colors.border} ${projectId ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                          >
                            <p className={`${colors.text} mb-2 ${projectId ? 'hover:underline' : ''}`}>{situation.project}</p>
                            <p className="text-gray-700 mb-2">{situation.description}</p>
                            {situation.technologies && (
                              <div className="flex flex-wrap gap-2">
                                {situation.technologies.map((tech: string, tIndex: number) => (
                                  <span key={tIndex} className="px-2 py-1 bg-white rounded text-gray-700">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Reflection */}
                {level.reflection && (
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-4 border-2 border-amber-300 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-amber-600" />
                      <h3 className="text-gray-900">{t.reflection}</h3>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">{level.reflection}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
