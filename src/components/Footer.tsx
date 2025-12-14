import { Heart, Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  language: "fr" | "en";
  onNavigate?: (
    section: "home" | "about" | "experience" | "skills" | "projects" | "contact"
  ) => void;
}

const content = {
  fr: {
    madeWith: "Créé avec",
    by: "par",
    rights: "Tous droits réservés.",
    portfolio: "E-Portfolio",
    year: new Date().getFullYear(),
  },
  en: {
    madeWith: "Made with",
    by: "by",
    rights: "All rights reserved.",
    portfolio: "E-Portfolio",
    year: new Date().getFullYear(),
  },
};

export function Footer({ language, onNavigate }: FooterProps) {
  const t = content[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-4">{t.portfolio}</h3>
            <p className="text-gray-400">
              {language === "fr"
                ? "BUT Informatique - Parcours Réalisation d'Applications"
                : "Computer Science Bachelor - Application Development"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">
              {language === "fr" ? "Liens rapides" : "Quick Links"}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => onNavigate?.("about")}
                >
                  {language === "fr" ? "À propos" : "About"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => onNavigate?.("skills")}
                >
                  {language === "fr" ? "Compétences" : "Skills"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => onNavigate?.("projects")}
                >
                  {language === "fr" ? "Projets" : "Projects"}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                  onClick={() => onNavigate?.("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4">
              {language === "fr" ? "Suivez-moi" : "Follow me"}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Simonftr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/simon-fetre"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:fetre.simon@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>{t.madeWith}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>{t.by}</span>
            <span className="text-white">Simon Fétré</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
