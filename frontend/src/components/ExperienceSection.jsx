import { motion, AnimatePresence } from 'framer-motion';
import { experiences, backgroundImages } from '../data/cvData';
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
            className="experience-card cursor-pointer bg-[#0F0F11] border border-[#1F1F22] rounded-xl p-6 hover:border-opacity-50 transition-all duration-300 group"
            style={{
              '--hover-color': exp.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = exp.color;
              e.currentTarget.style.boxShadow = `0 0 40px ${exp.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1F1F22';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Logo */}
            <div className="flex items-start justify-between mb-4">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: `${exp.color}15` }}
              >
                {exp.logo ? (
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <Briefcase className="w-6 h-6" style={{ color: exp.color }} />
                )}
              </div>
              <span 
                className="mono text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: `${exp.color}15`, color: exp.color }}
              >
                {exp.sector}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors">
              {exp.company}
            </h3>
            <p className="text-zinc-400 text-sm mb-3">{exp.role}</p>
            <p className="mono text-xs text-zinc-500">{exp.period}</p>

            {/* Preview of tasks */}
            <div className="mt-4 pt-4 border-t border-[#1F1F22]">
              <p className="text-zinc-500 text-sm line-clamp-2">
                {exp.description[0]}
              </p>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-[#050505] rounded-2xl overflow-hidden"
              data-testid={`modal-${selectedId}`}
            >
              {/* Background Glow */}
              <div 
                className="radial-glow"
                style={{ backgroundColor: selectedExperience.color }}
              />
              
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url(${backgroundImages.orange})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                }}
              />

              <div className="relative h-full overflow-y-auto p-8 md:p-12">
                {/* Close Button */}
                <button
                  data-testid="close-modal-btn"
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: `${selectedExperience.color}20` }}
                  >
                    {selectedExperience.logo ? (
                      <img 
                        src={selectedExperience.logo} 
                        alt={selectedExperience.company}
                        className="w-full h-full object-contain p-3"
                      />
                    ) : (
                      <Briefcase className="w-10 h-10" style={{ color: selectedExperience.color }} />
                    )}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedExperience.company}</h2>
                    <p className="text-xl text-zinc-300 mb-4">{selectedExperience.role}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-2 text-zinc-400">
                        <Calendar className="w-4 h-4" />
                        {selectedExperience.period}
                      </span>
                      <span className="flex items-center gap-2 text-zinc-400">
                        <Building2 className="w-4 h-4" />
                        {selectedExperience.sector}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full"
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
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
                      >
                        <span 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: selectedExperience.color }}
                        />
                        <span className="text-zinc-300">{item}</span>
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
