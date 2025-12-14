import { FileText, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Section } from "../App";
import cvFr from "../assets/cv/cv-fr.pdf";
import cvEn from "../assets/cv/cv-en.pdf";

interface HeroProps {
  onNavigate: (section: Section) => void;
  language: "fr" | "en";
}

const content = {
  fr: {
    greeting: "Bonjour, je suis",
    name: "Simon Fétré",
    title: "Étudiant en BUT Informatique - Parcours Réalisation d'Applications",
    subtitle:
      "En alternance, passionné par le développement d'applications modernes et performantes",
    currentGoal:
      "Actuellement en poste, concentré sur mon alternance et ma formation",
    cvButton: "Télécharger mon CV",
    cvPdf: cvFr,
    contactButton: "Me contacter",
  },
  en: {
    greeting: "Hello, I'm",
    name: "Simon Fétré",
    title: "Computer Science Student - Application Development Track",
    subtitle:
      "Work-study student passionate about modern and efficient application development",
    currentGoal:
      "Currently employed, focused on my work-study program and education",
    cvButton: "Download CV",
    cvPdf: cvEn,
    contactButton: "Contact me",
  },
};

export function Hero({ onNavigate, language }: HeroProps) {
  const t = content[language];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 animate-gradient-shift" />

      {/* Parallax content */}
      <div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-transform duration-300"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-indigo-600">{t.greeting}</p>
            <h1 className="text-gray-900">{t.name}</h1>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-4 animate-fade-in-up animation-delay-200">
            <h2 className="text-gray-800 max-w-3xl mx-auto">{t.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>

          {/* Current Goal */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-indigo-100 animate-fade-in-up animation-delay-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <p className="text-gray-700">{t.currentGoal}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up animation-delay-600">
            <a
              href={t.cvPdf}
              download
              className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{t.cvButton}</span>
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-indigo-200 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <span>{t.contactButton}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
