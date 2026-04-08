import { motion } from 'framer-motion';
import { personalInfo } from '../data/cvData';

const Hero = () => {
  return (
    <section className="relative py-12 mb-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="profile-image w-full h-full"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mono text-xs tracking-[0.2em] text-gray-500 mb-2">
              INGENIERO DE SISTEMAS
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gray-900">
              {personalInfo.name}
            </h1>
            <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              {personalInfo.summary}
            </p>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            {personalInfo.languages.map((lang, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm"
              >
                <span className="text-gray-800 font-medium">{lang.name}</span>
                <span className="text-gray-500 ml-2">• {lang.level}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
