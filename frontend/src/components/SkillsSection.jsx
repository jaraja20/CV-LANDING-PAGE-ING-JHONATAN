import { motion } from 'framer-motion';
import { skills, certifications } from '../data/cvData';
import { 
  Network, Monitor, Server, Code, Database, Cloud, Wrench, Award
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    { 
      id: 'networking', 
      title: 'Redes', 
      icon: Network, 
      color: '#0055A4',
      skills: skills.networking 
    },
    { 
      id: 'monitoring', 
      title: 'Monitoreo', 
      icon: Monitor, 
      color: '#EA7600',
      skills: skills.monitoring 
    },
    { 
      id: 'servers', 
      title: 'Servidores', 
      icon: Server, 
      color: '#10B981',
      skills: skills.servers 
    },
    { 
      id: 'development', 
      title: 'Desarrollo', 
      icon: Code, 
      color: '#8B5CF6',
      skills: skills.development 
    },
    { 
      id: 'databases', 
      title: 'Bases de Datos', 
      icon: Database, 
      color: '#EC4899',
      skills: skills.databases 
    },
    { 
      id: 'devops', 
      title: 'DevOps', 
      icon: Cloud, 
      color: '#F59E0B',
      skills: skills.devops 
    },
    { 
      id: 'tools', 
      title: 'Herramientas', 
      icon: Wrench, 
      color: '#6366F1',
      skills: skills.tools 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section data-testid="skills-section">
      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              variants={itemVariants}
              data-testid={`skill-card-${category.id}`}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = category.color;
                e.currentTarget.style.boxShadow = `0 10px 40px ${category.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: category.color }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors border border-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        data-testid="certifications-section"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
          <Award className="w-6 h-6 text-amber-500" />
          Certificaciones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="p-4 bg-white border border-gray-200 rounded-xl hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-amber-700 transition-colors">
                    {cert.name}
                  </p>
                  <p className="mono text-xs text-gray-400 mt-1">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
