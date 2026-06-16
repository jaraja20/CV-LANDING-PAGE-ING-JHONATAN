import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap } from 'lucide-react';
import { projects } from '../data/cvData';

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Proyectos Realizados
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Una selección de proyectos profesionales que demuestran mi expertise en desarrollo web, diseño de interfaces y arquitectura de sistemas.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div
              className="h-full p-8 rounded-2xl text-white transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden"
              style={{
                backgroundColor: project.color,
                backgroundImage: `linear-gradient(135deg, ${project.color}ee 0%, ${project.color}cc 100%)`,
              }}
            >
              {/* Animated Background Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-block p-3 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                  <Code className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-white/90 font-semibold text-sm mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">
                    Tecnologías
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium group-hover:bg-white/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <Zap className="w-4 h-4 text-white/60" />
                      {highlight}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Visitar Proyecto</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Border Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  border: `2px solid ${project.color}`,
                  boxShadow: `inset 0 0 20px ${project.color}20, 0 0 30px ${project.color}40`,
                }}
              />
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Note */}
      <motion.div
        variants={itemVariants}
        className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
      >
        <p className="text-gray-700 text-center">
          <span className="font-semibold">Nota:</span> Estos son solo algunos de los proyectos realizados. Para más información sobre mi trabajo, tecnologías utilizadas y metodologías de desarrollo, no dudes en contactarme.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
