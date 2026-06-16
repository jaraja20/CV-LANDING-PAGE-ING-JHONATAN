import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { ChevronDown, Code2, Server, X } from 'lucide-react';
import { developmentFields } from '../data/cvData';

const DevelopmentFieldsSection = ({ selectedId, setSelectedId }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const sectionColors = useMemo(() => ({
    'technical-it': '#0055A4',
    'full-stack-dev': '#10B981',
  }), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const selectedField = developmentFields.find(f => f.id === selectedId);

  if (selectedId && selectedField) {
    const modal = (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          style={{ zIndex: 2147483646 }}
          onClick={() => setSelectedId(null)}
        >
          <motion.div
            layoutId={`field-${selectedId}`}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            style={{ zIndex: 2147483647 }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
          >
            {/* Header */}
            <div
              className="sticky top-0 p-8 text-white rounded-t-2xl"
              style={{ backgroundColor: selectedField.color }}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4 mb-4">
                {(() => {
                  const Icon = selectedField.icon;
                  return <Icon className="w-12 h-12" />;
                })()}
                <div>
                  <h2 className="text-4xl font-bold">{selectedField.title}</h2>
                  <p className="text-white/90 text-lg mt-1">{selectedField.summary}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {selectedField.description}
              </p>

              {/* Tasks by Category */}
              <div className="space-y-4">
                {selectedField.tasks.map((task, idx) => (
                  <motion.div
                    key={task.category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <button
                      onClick={() => setExpandedCategory(
                        expandedCategory === idx ? null : idx
                      )}
                      className="w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300"
                      style={{
                        borderColor: selectedField.color,
                        backgroundColor: expandedCategory === idx
                          ? `${selectedField.color}15`
                          : 'transparent',
                      }}
                    >
                      <span
                        className="font-bold text-lg"
                        style={{ color: selectedField.color }}
                      >
                        {task.category}
                      </span>
                      <ChevronDown
                        className="w-5 h-5 transition-transform duration-300"
                        style={{
                          color: selectedField.color,
                          transform: expandedCategory === idx ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedCategory === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 pl-4 border-l-4"
                          style={{ borderColor: selectedField.color }}
                        >
                          <ul className="space-y-2 py-3">
                            {task.items.map((item, itemIdx) => (
                              <motion.li
                                key={itemIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIdx * 0.05 }}
                                className="flex items-start gap-3 text-gray-700"
                              >
                                <span
                                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: selectedField.color }}
                                />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );

    return createPortal(modal, document.body);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {developmentFields.map((field) => (
        <motion.div
          key={field.id}
          variants={itemVariants}
          layoutId={`field-${field.id}`}
          onClick={() => setSelectedId(field.id)}
          className="group cursor-pointer"
        >
          <div
            className="h-full p-8 rounded-2xl text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            style={{
              backgroundColor: field.color,
              backgroundImage: `linear-gradient(135deg, ${field.color}dd 0%, ${field.color}aa 100%)`,
            }}
          >
            {/* Icon */}
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {(() => {
                const Icon = field.icon;
                return <Icon className="w-12 h-12" />;
              })()}
            </div>

            {/* Title and Summary */}
            <h3 className="text-3xl font-bold mb-2">{field.title}</h3>
            <p className="text-white/90 text-lg font-medium mb-4">
              {field.summary}
            </p>

            {/* Description Preview */}
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              {field.description.substring(0, 120)}...
            </p>

            {/* Task Categories Preview */}
            <div className="space-y-2 mb-6">
              {field.tasks.slice(0, 3).map((task) => (
                <div
                  key={task.category}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  {task.category}
                </div>
              ))}
              {field.tasks.length > 3 && (
                <div className="text-sm text-white/70 italic pt-2">
                  +{field.tasks.length - 3} más categorías
                </div>
              )}
            </div>

            {/* Click to expand hint */}
            <div className="flex items-center gap-2 text-white/80 text-sm group-hover:text-white transition-colors">
              <span>Ver más</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DevelopmentFieldsSection;
