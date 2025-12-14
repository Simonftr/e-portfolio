import { Mail, Linkedin, Github, MapPin, GraduationCap } from 'lucide-react';
import postgresqlIcon from 'figma:asset/798fabf02295234b5faac039bee99161a9824092.png';
import powerPlatformIcon from 'figma:asset/888b2ef9ed27201564c05bb7f39f9a4c8855abc5.png';

interface AboutProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'À propos de moi',
    intro: 'Étudiant passionné en BUT Informatique, parcours Réalisation d\'Applications, je développe mes compétences à travers l\'alternance et des projets variés.',
    formation: {
      title: 'Formation',
      items: [
        {
          degree: 'BUT Informatique - Parcours Réalisation d\'Applications',
          school: 'IUT - Université',
          period: '2023 - 2026',
          mode: 'En alternance',
        },
        {
          degree: 'Baccalauréat Général - Spécialités Mathématiques et NSI',
          school: 'Lycée Anna de Noailles - Évian-les-Bains',
          period: '2023',
          mode: 'Mention Bien',
        },
      ],
    },
    skills: {
      title: 'Compétences Techniques',
      subtitle: 'Technologies et outils maîtrisés',
    },
    softSkills: {
      title: 'Soft Skills',
      subtitle: 'Qualités personnelles et professionnelles',
    },
    hobbies: {
      title: 'Loisirs & Centres d\'intérêt',
      subtitle: 'Ce qui me passionne en dehors du code',
    },
    contact: 'Me contacter',
    social: 'Retrouvez-moi sur',
  },
  en: {
    title: 'About Me',
    intro: 'Passionate Computer Science student in Application Development track, developing my skills through work-study programs and various projects.',
    formation: {
      title: 'Education',
      items: [
        {
          degree: 'Bachelor in Computer Science - Application Development',
          school: 'IUT - University',
          period: '2023 - 2026',
          mode: 'Work-study program',
        },
        {
          degree: 'High School Diploma - Mathematics and Computer Science',
          school: 'Lycée Anna de Noailles - Évian-les-Bains',
          period: '2023',
          mode: 'With Honors',
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools mastered',
    },
    softSkills: {
      title: 'Soft Skills',
      subtitle: 'Personal and professional qualities',
    },
    hobbies: {
      title: 'Hobbies & Interests',
      subtitle: 'What I\'m passionate about beyond coding',
    },
    contact: 'Contact me',
    social: 'Find me on',
  },
};

const technicalSkills = [
  { 
    name: 'C#',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
        <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
        <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
        <path fill="#fff" d="M115 66.1l-6.9-4-6.9 4v7.9l6.9 4 6.9-4v-7.9zm-4.1 5.3l-2.9 1.7-2.9-1.7v-3.4l2.9-1.7 2.9 1.7v3.4zM102.3 66.1l-6.9-4-6.9 4v7.9l6.9 4 6.9-4v-7.9zm-4.1 5.3l-2.9 1.7-2.9-1.7v-3.4l2.9-1.7 2.9 1.7v3.4zM115 52.3l-6.9-4-6.9 4v7.9l6.9 4 6.9-4v-7.9zm-4.1 5.3l-2.9 1.7-2.9-1.7v-3.4l2.9-1.7 2.9 1.7v3.4zM102.3 52.3l-6.9-4-6.9 4v7.9l6.9 4 6.9-4v-7.9zm-4.1 5.3l-2.9 1.7-2.9-1.7v-3.4l2.9-1.7 2.9 1.7v3.4z"/>
      </svg>
    ),
  },
  { 
    name: 'Flutter',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/></g>
        <path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"/>
        <path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/>
        <linearGradient id="flutter-a" x1="59.365" x2="86.825" y1="116.36" y2="99.399" gradientUnits="userSpaceOnUse"><stop offset="0" stopOpacity=".5"/><stop offset="1" stopOpacity="0"/></linearGradient>
        <path fill="url(#flutter-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"/>
      </svg>
    ),
  },
  { 
    name: 'React',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21.1c1.2-2.2 2.4-4.1 3.6-6.1 3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.1zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g>
      </svg>
    ),
  },
  { 
    name: 'Vue.js',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
      </svg>
    ),
  },
  { 
    name: 'Swift',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#F05138" d="M126.33 34.06a39.32 39.32 0 00-.84-7.79 28.94 28.94 0 00-2.24-6.75 23.5 23.5 0 00-3.69-5.62 19.87 19.87 0 00-5.21-4.27 17.36 17.36 0 00-6.45-2.18 33.15 33.15 0 00-7.29-.41H26.71a32.86 32.86 0 00-7.29.41 17.31 17.31 0 00-6.45 2.18 19.8 19.8 0 00-5.2 4.27 23.62 23.62 0 00-3.7 5.62A29 29 0 001.83 26.27a39.32 39.32 0 00-.84 7.79v55.87a39.32 39.32 0 00.84 7.79 28.94 28.94 0 002.24 6.75 23.5 23.5 0 003.69 5.62 19.87 19.87 0 005.21 4.27 17.36 17.36 0 006.45 2.18 33.15 33.15 0 007.29.41h73.9a32.86 32.86 0 007.29-.41 17.31 17.31 0 006.45-2.18 19.8 19.8 0 005.2-4.27 23.62 23.62 0 003.7-5.62 29 29 0 002.23-6.75 39.32 39.32 0 00.84-7.79V34.06z"/>
        <path fill="#FFF" d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0 0 0-25.35-23.27-37-36.76a254.52 254.52 0 01-15.46-20A31.14 31.14 0 0011.77 11a14.83 14.83 0 014.14.32 28.47 28.47 0 0110.77 4.65 26.1 26.1 0 016.69 7.35c7.23 11.58 28.72 36.31 46.42 46.74a50 50 0 0010.08-6.44C89.87 52.45 84.6 39.6 78.7 28.26c-5.54-10.66-12.35-19.73-20.24-25.08a35.54 35.54 0 00-6.37-3.53c21.51 0 41.14 12.61 48.43 31.66 7.29 19.05-.23 44.64-15.52 65.19z"/>
      </svg>
    ),
  },
  { 
    name: 'Power Platform',
    icon: (
      <img src={powerPlatformIcon} alt="Power Platform" className="w-12 h-12" />
    ),
  },
  { 
    name: 'Python',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <linearGradient id="python-a" x1="19.075" x2="34.898" y1="34.968" y2="50.791" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#387eb8"/><stop offset="1" stopColor="#366994"/></linearGradient>
        <linearGradient id="python-b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffe052"/><stop offset="1" stopColor="#ffc331"/></linearGradient>
        <path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
        <path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
        <radialGradient id="python-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b8b8b8" stopOpacity=".498"/><stop offset="1" stopColor="#7f7f7f" stopOpacity="0"/></radialGradient>
        <path opacity=".444" fill="url(#python-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
      </svg>
    ),
  },
  { 
    name: 'PostgreSQL',
    icon: (
      <img src={postgresqlIcon} alt="PostgreSQL" className="w-12 h-12" />
    ),
  },
  { 
    name: 'Docker',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#019BC6" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zM28 39h10v11H28V39zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1zM28 52h10v11H28V52zm13 0h11v11H41V52zm0-13h11v11H41V39zm13 13h11v11H54V52zm0-13h11v11H54V39zm13 0h11v11H67V39zm0 13h11v11H67V52zm13 0h11v11H80V52z"/>
      </svg>
    ),
  },
  { 
    name: 'Git',
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333 3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.864-54.995c3.21-3.207 3.21-8.392 0-11.364z"/>
      </svg>
    ),
  },
];

const softSkills = {
  fr: [
    'Travail en équipe',
    'Rigueur',
    'Autonomie',
    'Organisation',
    'Esprit d\'analyse',
    'Adaptabilité',
    'Communication',
    'Sens des responsabilités',
  ],
  en: [
    'Teamwork',
    'Rigor',
    'Autonomy',
    'Organization',
    'Analytical thinking',
    'Adaptability',
    'Communication',
    'Sense of responsibility',
  ],
};

const hobbies = {
  fr: [
    {
      icon: '🎮',
      title: 'Jeux vidéo narratifs et stratégiques',
      description: 'Jeux à forte composante narrative et stratégique, développant l\'analyse et la prise de décision',
    },
    {
      icon: '🎬',
      title: 'Cinéma & séries sci-fi',
      description: 'Cinéma et séries de science-fiction et films complexes, stimulant la réflexion et l\'imaginaire',
    },
    {
      icon: '⛰️',
      title: 'Randonnée et montagne',
      description: 'Activités en montagne, favorisant l\'endurance, la rigueur et la gestion de l\'effort',
    },
    {
      icon: '🎵',
      title: 'Rap français',
      description: 'Intérêt pour l\'expression artistique et la culture contemporaine',
    },
    {
      icon: '🧠',
      title: 'Nouvelles technologies',
      description: 'Intérêt pour les nouvelles technologies et le numérique',
    },
    {
      icon: '📱',
      title: 'UX/UI Design',
      description: 'Découverte d\'applications et d\'interfaces utilisateur',
    },
  ],
  en: [
    {
      icon: '🎮',
      title: 'Narrative & strategic games',
      description: 'Story-driven and strategic video games, developing analytical thinking and decision-making',
    },
    {
      icon: '🎬',
      title: 'Sci-fi cinema & series',
      description: 'Science-fiction cinema and complex films, stimulating reflection and imagination',
    },
    {
      icon: '⛰️',
      title: 'Hiking & mountain activities',
      description: 'Mountain activities, fostering endurance, rigor and effort management',
    },
    {
      icon: '🎵',
      title: 'French rap',
      description: 'Interest in artistic expression and contemporary culture',
    },
    {
      icon: '🧠',
      title: 'New technologies',
      description: 'Interest in new technologies and digital innovation',
    },
    {
      icon: '📱',
      title: 'UX/UI Design',
      description: 'Discovering applications and user interfaces',
    },
  ],
};

export function About({ language }: AboutProps) {
  const t = content[language];

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">{t.intro}</p>
        </div>

        {/* Formation */}
        <div className="mb-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-600 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">{t.formation.title}</h3>
              {t.formation.items.map((item, index) => (
                <div key={index} className={`${index > 0 ? 'mt-6 pt-6 border-t border-indigo-200' : ''}`}>
                  <p className="text-gray-800 mb-1">{item.degree}</p>
                  <p className="text-gray-600">{item.school}</p>
                  <div className="flex gap-4 mt-3">
                    <span className="inline-flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {item.period}
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                      {item.mode}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-2">{t.skills.title}</h2>
            <p className="text-gray-600">{t.skills.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technicalSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-indigo-300 transition-all group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <p className="text-gray-700 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-2">{t.softSkills.title}</h2>
            <p className="text-gray-600">{t.softSkills.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills[language].map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-2">{t.hobbies.title}</h2>
            <p className="text-gray-600">{t.hobbies.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hobbies[language].map((hobby, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700">{hobby.icon} {hobby.title}</p>
                <p className="text-gray-500 text-sm mt-1">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Social */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-gray-900 mb-2">{t.contact}</h3>
          <p className="text-gray-600 mb-6">{t.social}</p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:fetre.simon@gmail.com"
              className="p-3 bg-white rounded-lg hover:bg-indigo-50 transition-colors border border-gray-200 hover:border-indigo-300 cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/simon-fetre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg hover:bg-indigo-50 transition-colors border border-gray-200 hover:border-indigo-300 cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://github.com/Simonftr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg hover:bg-indigo-50 transition-colors border border-gray-200 hover:border-indigo-300 cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}