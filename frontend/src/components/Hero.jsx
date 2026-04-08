import { motion } from 'framer-motion';
import { personalInfo } from '../data/cvData';

const Hero = () => {
  return (
    <section className="relative py-12 mb-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Info - Right Side */}
          <div className="flex-1 text-center md:text-left">
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
              <p className="text-gray-600 text-base max-w-xl leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-3"
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
      </div>
    </section>
  );
};

export default Hero;
