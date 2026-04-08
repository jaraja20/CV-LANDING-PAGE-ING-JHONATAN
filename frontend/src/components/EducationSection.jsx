import { motion, AnimatePresence } from 'framer-motion';
import { education, backgroundImages } from '../data/cvData';
import { X, Calendar, GraduationCap } from 'lucide-react';

const EducationSection = ({ selectedId, setSelectedId }) => {
  const selectedEducation = education.find(edu => edu.id === selectedId);

  return (
    <section data-testid="education-section">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            layoutId={`edu-card-${edu.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            data-testid={`card-${edu.id}`}
            onClick={() => setSelectedId(edu.id)}
            className="experience-card cursor-pointer bg-[#0F0F11] border border-[#1F1F22] rounded-xl p-6 hover:border-opacity-50 transition-all duration-300 group"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = edu.color;
              e.currentTarget.style.boxShadow = `0 0 40px ${edu.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1F1F22';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
                style={{ backgroundColor: `${edu.color}15` }}
              >
                {edu.logo ? (
                  <img 
                    src={edu.logo} 
                    alt={edu.institution}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <GraduationCap className="w-8 h-8" style={{ color: edu.color }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-zinc-400 text-sm mb-2">{edu.degree}</p>
                <p className="mono text-xs text-zinc-500 flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && selectedEducation && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`edu-card-${selectedId}`}
              className="fixed inset-4 md:inset-8 lg:inset-20 xl:inset-32 z-50 bg-[#050505] rounded-2xl overflow-hidden"
              data-testid={`modal-edu-${selectedId}`}
            >
              {/* Background Glow */}
              <div 
                className="radial-glow"
                style={{ backgroundColor: selectedEducation.color }}
              />
              
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url(${backgroundImages.blue})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                }}
              />

              <div className="relative h-full overflow-y-auto p-8 md:p-12 flex flex-col items-center justify-center text-center">
                {/* Close Button */}
                <button
                  data-testid="close-modal-btn"
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Logo */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-32 h-32 rounded-2xl flex items-center justify-center overflow-hidden mb-8"
                  style={{ backgroundColor: `${selectedEducation.color}20` }}
                >
                  {selectedEducation.logo ? (
                    <img 
                      src={selectedEducation.logo} 
                      alt={selectedEducation.institution}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <GraduationCap className="w-16 h-16" style={{ color: selectedEducation.color }} />
                  )}
                </motion.div>

                {/* Content */}
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  {selectedEducation.institution}
                </motion.h2>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-zinc-300 mb-6"
                >
                  {selectedEducation.degree}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 text-zinc-400"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="mono text-lg">{selectedEducation.period}</span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EducationSection;
