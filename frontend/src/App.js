import { useState } from "react";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";
import FloatingIcons from "./components/FloatingIcons";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  const [activeSection, setActiveSection] = useState("experiencia");
  const [selectedExpId, setSelectedExpId] = useState(null);
  const [selectedEduId, setSelectedEduId] = useState(null);

  const renderSection = () => {
    switch (activeSection) {
      case "formacion":
        return (
          <EducationSection 
            selectedId={selectedEduId} 
            setSelectedId={setSelectedEduId} 
          />
        );
      case "experiencia":
        return (
          <ExperienceSection 
            selectedId={selectedExpId} 
            setSelectedId={setSelectedExpId} 
          />
        );
      case "habilidades":
        return <SkillsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] relative" data-testid="portfolio-app">
      {/* Floating Background Icons */}
      <FloatingIcons />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-6">
          <Navigation 
            activeSection={activeSection} 
            setActiveSection={(section) => {
              setActiveSection(section);
              setSelectedExpId(null);
              setSelectedEduId(null);
            }} 
          />

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="pb-20"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1F1F22] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm">
            © 2025 Jhonatan Villalba • Ingeniero de Sistemas
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
