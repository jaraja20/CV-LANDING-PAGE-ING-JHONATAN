import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code2, FolderOpen } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, accentColor }) => {
  const sections = [
    { id: 'formacion', label: 'Formación', icon: GraduationCap },
    { id: 'experiencia', label: 'Experiencia', icon: Briefcase },
    { id: 'desarrollo', label: 'Desarrollo', icon: Code2 },
    { id: 'proyectos', label: 'Proyectos', icon: FolderOpen },
    { id: 'habilidades', label: 'Habilidades', icon: Award },
  ];

  return (
    <nav className="sticky top-4 z-40 flex justify-center mb-12 overflow-x-auto px-4">
      <div className="bg-white shadow-lg border border-gray-200 rounded-full p-1.5 flex gap-1">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              data-testid={`nav-btn-${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`relative px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors duration-300 whitespace-nowrap ${
                isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: accentColor || '#3B82F6' }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-medium text-sm tracking-wide">
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
