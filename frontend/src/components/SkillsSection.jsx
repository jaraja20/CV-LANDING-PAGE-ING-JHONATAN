import { motion } from 'framer-motion';
import { skills, certifications } from '../data/cvData';
import { 
  Network, Monitor, Server, Code, Database, Cloud, Wrench, Award,
  Wifi, Shield, Terminal, Globe, Cpu, HardDrive
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
              className="bg-[#0F0F11] border border-[#1F1F22] rounded-xl p-6 hover:border-opacity-50 transition-all duration-300 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = category.color;
                e.currentTarget.style.boxShadow = `0 0 40px ${category.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1F1F22';
                e.currentTarget.style.boxShadow = 'none';
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
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
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
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Award className="w-6 h-6 text-yellow-500" />
          Certificaciones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="p-4 bg-[#0F0F11] border border-[#1F1F22] rounded-xl hover:border-yellow-500/30 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-yellow-400 transition-colors">
                    {cert.name}
                  </p>
                  <p className="mono text-xs text-zinc-500 mt-1">{cert.date}</p>
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
