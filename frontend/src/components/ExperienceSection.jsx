import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../data/cvData';
import { X, Calendar, Building2, Briefcase } from 'lucide-react';

const ExperienceSection = ({ selectedId, setSelectedId }) => {
  const selectedExperience = experiences.find(exp => exp.id === selectedId);

  return (
    <section data-testid="experience-section">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            layoutId={`card-${exp.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            data-testid={`card-${exp.id}`}
            onClick={() => setSelectedId(exp.id)}
            className="experience-card cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = exp.color;
              e.currentTarget.style.boxShadow = `0 10px 40px ${exp.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
          >
            {/* Logo - Full Width */}
            <div 
              className="w-full h-32 logo-container"
              style={{ backgroundColor: `${exp.color}10` }}
            >
              {exp.logo ? (
                <img 
                  src={exp.logo} 
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Briefcase className="w-12 h-12" style={{ color: exp.color }} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {exp.company}
                </h3>
                <span 
                  className="mono text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${exp.color}15`, color: exp.color }}
                >
                  {exp.sector}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{exp.role}</p>
              <p className="mono text-xs text-gray-400">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && selectedExperience && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white rounded-2xl overflow-hidden shadow-2xl"
              data-testid={`modal-${selectedId}`}
            >
              {/* Background Glow */}
              <div 
                className="radial-glow"
                style={{ backgroundColor: selectedExperience.color }}
              />

              <div className="relative h-full overflow-y-auto">
                {/* Header with Logo */}
                <div 
                  className="h-48 md:h-64 logo-container relative"
                  style={{ backgroundColor: `${selectedExperience.color}10` }}
                >
                  {selectedExperience.logo && (
                    <img 
                      src={selectedExperience.logo} 
                      alt={selectedExperience.company}
                      className="w-full h-full object-cover opacity-90"
                    />
                  )}
                  {/* Close Button */}
                  <button
                    data-testid="close-modal-btn"
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-lg"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{selectedExperience.company}</h2>
                  <p className="text-xl text-gray-600 mb-4">{selectedExperience.role}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {selectedExperience.period}
                    </span>
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Building2 className="w-4 h-4" />
                      {selectedExperience.sector}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
                      <span 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: selectedExperience.color }}
                      />
                      Responsabilidades
                    </h3>
                    <ul className="grid gap-3">
                      {selectedExperience.description.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                        >
                          <span 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: selectedExperience.color }}
                          />
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
