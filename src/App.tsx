import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { BachelorSkills } from "./components/BachelorSkills";
import { SkillDetail } from "./components/SkillDetail";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export type Section =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "contact";
export type SkillType =
  | "realiser"
  | "optimiser"
  | "administrer"
  | "gerer"
  | "conduire"
  | "collaborer"
  | null;

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>("home");
  const [selectedSkill, setSelectedSkill] = useState<SkillType>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  const handleSkillSelect = (skill: SkillType) => {
    setSelectedSkill(skill);
  };

  const handleBackToSkills = () => {
    setSelectedSkill(null);
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    setCurrentSection("projects");
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    // Quand on navigue vers la section compétences, réinitialiser la compétence sélectionnée
    if (section === "skills") {
      setSelectedSkill(null);
    }
    // Quand on navigue vers la section projets, réinitialiser le projet sélectionné
    if (section === "projects") {
      setSelectedProject(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentSection={currentSection}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className="pt-16">
        {currentSection === "home" && (
          <Hero onNavigate={handleNavigate} language={language} />
        )}
        {currentSection === "about" && <About language={language} />}
        {currentSection === "experience" && <Experience language={language} />}
        {currentSection === "skills" &&
          (selectedSkill ? (
            <SkillDetail
              skill={selectedSkill}
              onBack={handleBackToSkills}
              language={language}
              onProjectSelect={handleProjectSelect}
            />
          ) : (
            <BachelorSkills
              onSkillSelect={handleSkillSelect}
              language={language}
            />
          ))}
        {currentSection === "projects" &&
          (selectedProject ? (
            <ProjectDetail
              projectId={selectedProject}
              onBack={handleBackToProjects}
              language={language}
            />
          ) : (
            <Projects
              language={language}
              onProjectSelect={handleProjectSelect}
            />
          ))}
        {currentSection === "contact" && <Contact language={language} />}
      </main>

      <Footer language={language} onNavigate={handleNavigate} />
    </div>
  );
}
