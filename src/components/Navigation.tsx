import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import type { Section } from '../App';

interface NavigationProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const navItems = {
  fr: [
    { id: 'home' as Section, label: 'Accueil' },
    { id: 'about' as Section, label: 'À propos' },
    { id: 'experience' as Section, label: 'Expériences' },
    { id: 'skills' as Section, label: 'Compétences BUT' },
    { id: 'projects' as Section, label: 'Projets' },
    { id: 'contact' as Section, label: 'Contact' },
  ],
  en: [
    { id: 'home' as Section, label: 'Home' },
    { id: 'about' as Section, label: 'About' },
    { id: 'experience' as Section, label: 'Experience' },
    { id: 'skills' as Section, label: 'Bachelor Skills' },
    { id: 'projects' as Section, label: 'Projects' },
    { id: 'contact' as Section, label: 'Contact' },
  ],
};

export function Navigation({ currentSection, onNavigate, language, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (section: Section) => {
    onNavigate(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavigate('home')}
            className="text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <span className="font-medium">Simon FÉTRÉ</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`relative transition-colors cursor-pointer group ${
                  currentSection === item.id
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                    currentSection === item.id 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="group flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span className="uppercase">{language}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems[language].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 transition-colors cursor-pointer ${
                  currentSection === item.id
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}