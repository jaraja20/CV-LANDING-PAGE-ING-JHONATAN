import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Car, Clock } from 'lucide-react';
import { personalInfo } from '../data/cvData';

const Hero = () => {
  return (
    <section className="relative py-16 mb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold text-white/20 font-outfit">JV</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mono text-xs tracking-[0.2em] text-zinc-500 mb-2">
                INGENIERO DE SISTEMAS
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-zinc-400 text-lg max-w-2xl mb-8 leading-relaxed">
                {personalInfo.summary}
              </p>
            </motion.div>

            {/* Contact Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <ContactItem icon={Mail} label="Email" value={personalInfo.email} />
              <ContactItem icon={Phone} label="Teléfono" value={personalInfo.phone} />
              <ContactItem icon={MapPin} label="Ubicación" value={personalInfo.location} />
              <ContactItem icon={Calendar} label="Nacimiento" value={personalInfo.birthDate} />
              <ContactItem icon={Car} label="Movilidad" value="Vehículo propio" />
              <ContactItem icon={Clock} label="Disponibilidad" value="Tiempo completo" />
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {personalInfo.languages.map((lang, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
                >
                  <span className="text-white">{lang.name}</span>
                  <span className="text-zinc-500 ml-2">• {lang.level}</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 bg-[#0F0F11] border border-[#1F1F22] rounded-xl">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
      <Icon className="w-4 h-4 text-zinc-400" />
    </div>
    <div>
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  </div>
);

export default Hero;
