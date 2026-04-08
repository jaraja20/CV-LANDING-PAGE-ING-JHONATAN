import { motion, AnimatePresence } from 'framer-motion';
import { education } from '../data/cvData';
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
            className="experience-card cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = edu.color;
              e.currentTarget.style.boxShadow = `0 10px 40px ${edu.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E7EB';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
          >
            {/* Logo - Full Width */}
            <div 
              className="w-full h-36 logo-container"
              style={{ backgroundColor: edu.logo ? 'white' : `${edu.color}10` }}
            >
              {edu.logo ? (
                <img 
                  src={edu.logo} 
                  alt={edu.institution}
                  className="w-full h-full object-contain p-2"
                  style={{ backgroundColor: 'white' }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <GraduationCap className="w-12 h-12" style={{ color: edu.color }} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                {edu.institution}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{edu.degree}</p>
              <p className="mono text-xs text-gray-400 flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                {edu.period}
              </p>
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`edu-card-${selectedId}`}
              className="fixed inset-4 md:inset-8 lg:inset-20 xl:inset-32 z-50 bg-white rounded-2xl overflow-hidden shadow-2xl"
              data-testid={`modal-edu-${selectedId}`}
            >
              {/* Background Glow */}
              <div 
                className="radial-glow"
                style={{ backgroundColor: selectedEducation.color }}
              />

              <div className="relative h-full overflow-y-auto flex flex-col items-center justify-center text-center p-8">
                {/* Close Button */}
                <button
                  data-testid="close-modal-btn"
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Logo */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-48 h-48 rounded-2xl flex items-center justify-center overflow-hidden mb-8 shadow-lg"
                  style={{ backgroundColor: 'white', border: `2px solid ${selectedEducation.color}20` }}
                >
                  {selectedEducation.logo ? (
                    <img 
                      src={selectedEducation.logo} 
                      alt={selectedEducation.institution}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <GraduationCap className="w-20 h-20" style={{ color: selectedEducation.color }} />
                  )}
                </motion.div>

                {/* Content */}
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                >
                  {selectedEducation.institution}
                </motion.h2>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-600 mb-6"
                >
                  {selectedEducation.degree}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: `${selectedEducation.color}10`, color: selectedEducation.color }}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="mono text-lg font-medium">{selectedEducation.period}</span>
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
