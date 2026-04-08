import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/cvData';
import { X, Calendar, GraduationCap } from 'lucide-react';

const EducationCard = ({ edu, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      data-testid={`card-${edu.id}`}
      onClick={onClick}
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
      {/* Logo - Round */}
      <div className="p-6 flex items-center gap-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-2 bg-white"
          style={{ 
            borderColor: `${edu.color}30`
          }}
        >
          {edu.logo ? (
            <img 
              src={edu.logo} 
              alt={edu.institution}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <GraduationCap className="w-7 h-7" style={{ color: edu.color }} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-800 transition-colors line-clamp-2">
            {edu.institution}
          </h3>
          <p className="text-gray-600 text-sm mt-0.5">{edu.degree}</p>
          <p className="mono text-xs text-gray-400 mt-1 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {edu.period}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const EducationSection = ({ selectedId, setSelectedId }) => {
  const selectedEducation = education.find(edu => edu.id === selectedId);

  return (
    <section data-testid="education-section">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {education.map((edu, index) => (
          <EducationCard 
            key={edu.id}
            edu={edu}
            index={index}
            onClick={() => setSelectedId(edu.id)}
          />
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence mode="wait">
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-4 md:inset-12 lg:inset-20 xl:inset-28 z-50 bg-white rounded-2xl overflow-hidden shadow-2xl"
              data-testid={`modal-edu-${selectedId}`}
            >
              {/* Background with Logo as watermark */}
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: selectedEducation.logo ? `url(${selectedEducation.logo})` : 'none',
                  backgroundSize: '40%',
                  backgroundPosition: 'right bottom',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              
              {/* Color accent bar */}
              <div 
                className="absolute top-0 left-0 w-full h-1"
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
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center overflow-hidden mb-8 shadow-xl border-4 bg-white"
                  style={{ borderColor: `${selectedEducation.color}30` }}
                >
                  {selectedEducation.logo ? (
                    <img 
                      src={selectedEducation.logo} 
                      alt={selectedEducation.institution}
                      className="w-full h-full object-contain p-3"
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
                  className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 max-w-lg"
                >
                  {selectedEducation.institution}
                </motion.h2>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-600 mb-6"
                >
                  {selectedEducation.degree}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full"
                  style={{ backgroundColor: `${selectedEducation.color}10`, color: selectedEducation.color }}
                >
                  <Calendar className="w-5 h-5" />
                  <span className="mono text-base font-medium">{selectedEducation.period}</span>
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
