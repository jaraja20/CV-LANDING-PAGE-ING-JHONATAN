import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/cvData';
import { X, Calendar, Building2, Briefcase } from 'lucide-react';

const ExperienceCard = ({ exp, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${exp.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      data-testid={`card-${exp.id}`}
      onClick={onClick}
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
      {/* Logo - Round */}
      <div className="p-6 flex items-center gap-4">
        <motion.div 
          layoutId={`logo-${exp.id}`}
          className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-2"
          style={{ 
            backgroundColor: `${exp.color}10`,
            borderColor: `${exp.color}30`
          }}
        >
          {exp.logo ? (
            <img 
              src={exp.logo} 
              alt={exp.company}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Briefcase className="w-7 h-7" style={{ color: exp.color }} />
          )}
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-800 transition-colors truncate">
              {exp.company}
            </h3>
            <span 
              className="mono text-xs px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: `${exp.color}15`, color: exp.color }}
            >
              {exp.sector}
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-0.5">{exp.role}</p>
          <p className="mono text-xs text-gray-400 mt-1">{exp.period}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = ({ selectedId, setSelectedId }) => {
  const selectedExperience = experiences.find(exp => exp.id === selectedId);

  return (
    <section data-testid="experience-section">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={exp.id}
            exp={exp}
            index={index}
            onClick={() => setSelectedId(exp.id)}
          />
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
              className="fixed inset-4 md:inset-8 lg:inset-12 z-50 bg-white rounded-2xl overflow-hidden shadow-2xl"
              data-testid={`modal-${selectedId}`}
            >
              {/* Background with Logo as watermark */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: selectedExperience.logo ? `url(${selectedExperience.logo})` : 'none',
                  backgroundSize: '60%',
                  backgroundPosition: 'right bottom',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              
              {/* Color accent bar */}
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: selectedExperience.color }}
              />

              <div className="relative h-full overflow-y-auto">
                {/* Header */}
                <div className="p-8 md:p-10 pb-0">
                  <div className="flex items-start gap-6">
                    {/* Animated Logo */}
                    <motion.div 
                      layoutId={`logo-${selectedId}`}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-3 shadow-lg"
                      style={{ 
                        backgroundColor: 'white',
                        borderColor: selectedExperience.color
                      }}
                    >
                      {selectedExperience.logo ? (
                        <img 
                          src={selectedExperience.logo} 
                          alt={selectedExperience.company}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <Briefcase className="w-10 h-10" style={{ color: selectedExperience.color }} />
                      )}
                    </motion.div>

                    <div className="flex-1 pt-2">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedExperience.company}</h2>
                      <p className="text-lg text-gray-600 mt-1">{selectedExperience.role}</p>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <span className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {selectedExperience.period}
                        </span>
                        <span className="flex items-center gap-2 text-gray-500 text-sm">
                          <Building2 className="w-4 h-4" />
                          {selectedExperience.sector}
                        </span>
                      </div>
                    </div>

                    {/* Close Button */}
                    <button
                      data-testid="close-modal-btn"
                      onClick={() => setSelectedId(null)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <X className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="p-8 md:p-10 pt-6">
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
                        transition={{ delay: 0.1 + index * 0.03 }}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
