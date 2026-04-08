import { useState, useMemo } from "react";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";
import CircuitBackground from "./components/CircuitBackground";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ContactBubble from "./components/ContactBubble";
import ContactSidebar from "./components/ContactSidebar";

// Accent colors for each section
const sectionColors = {
  formacion: '#2E7D32', // Green from UNE
  experiencia: '#0055A4', // Blue from Neotelecom
  habilidades: '#8B5CF6', // Purple for skills
};

function App() {
  const [activeSection, setActiveSection] = useState("experiencia");
  const [selectedExpId, setSelectedExpId] = useState(null);
  const [selectedEduId, setSelectedEduId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const accentColor = useMemo(() => {
    return sectionColors[activeSection] || '#3B82F6';
  }, [activeSection]);

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
    <div className="min-h-screen bg-[#F8FAFC] relative" data-testid="portfolio-app">
      {/* Circuit Background Pattern */}
      <CircuitBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-6">
          <Navigation 
            activeSection={activeSection} 
            accentColor={accentColor}
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

      {/* Contact Bubble */}
      <ContactBubble 
        onClick={() => setIsSidebarOpen(true)} 
        accentColor={accentColor}
      />

      {/* Contact Sidebar */}
      <ContactSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Jhonatan Villalba • Ingeniero de Sistemas
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
