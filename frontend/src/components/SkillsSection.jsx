import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills, certifications } from '../data/cvData';
import { 
  Network, Monitor, Server, Code, Database, Cloud, Wrench, Award, Brain, Boxes
} from 'lucide-react';

const SkillCard = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
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
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color: category.color }} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors border border-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="p-4 bg-white border border-gray-200 rounded-xl hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
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
  );
};

const SkillsSection = () => {
  const skillCategories = [
    { 
      id: 'ai', 
      title: 'Inteligencia Artificial', 
      icon: Brain, 
      color: '#EF4444',
      skills: skills.ai 
    },
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
      id: 'erp', 
      title: 'ERP & Sistemas Empresariales', 
      icon: Boxes, 
      color: '#E30613',
      skills: skills.erp 
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

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section data-testid="skills-section">
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        data-testid="certifications-section"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
          <Award className="w-6 h-6 text-amber-500" />
          Certificaciones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
