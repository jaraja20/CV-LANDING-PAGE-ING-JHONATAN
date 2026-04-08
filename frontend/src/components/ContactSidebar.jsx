import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Calendar, Car, Clock, Globe, Users } from 'lucide-react';
import { personalInfo } from '../data/cvData';

const ContactSidebar = ({ isOpen, onClose }) => {
  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Teléfono", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Ubicación", value: personalInfo.location },
    { icon: Calendar, label: "Nacimiento", value: personalInfo.birthDate },
    { icon: Car, label: "Movilidad", value: "Vehículo propio" },
    { icon: Clock, label: "Disponibilidad", value: "Tiempo completo" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sidebar-overlay"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            data-testid="contact-sidebar"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-semibold text-gray-900">Información de Contacto</h2>
              <button
                onClick={onClose}
                data-testid="close-sidebar-btn"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                      <p className="text-sm text-gray-800">{item.value}</p>
                    </div>
                  </motion.div>
                );

                if (item.href) {
                  return (
                    <a key={index} href={item.href} className="block">
                      {content}
                    </a>
                  );
                }
                return content;
              })}
            </div>

            {/* Languages Section */}
            <div className="p-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Idiomas
              </h3>
              <div className="space-y-2">
                {personalInfo.languages.map((lang, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-sm font-medium text-gray-800">{lang.name}</span>
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* References Section */}
            <div className="p-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Referencias Laborales
              </h3>
              <div className="space-y-3">
                {personalInfo.references.map((ref, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 bg-blue-50 rounded-xl border border-blue-100"
                  >
                    <p className="text-sm font-semibold text-gray-900">{ref.name}</p>
                    <p className="text-xs text-gray-600 mb-2">{ref.position}</p>
                    <div className="space-y-1">
                      <a href={`mailto:${ref.email}`} className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800">
                        <Mail className="w-3 h-3" />
                        {ref.email}
                      </a>
                      <a href={`tel:${ref.phone}`} className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800">
                        <Phone className="w-3 h-3" />
                        {ref.phone}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="p-4 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Información Adicional</h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.extras.map((extra, index) => (
                  <span 
                    key={index}
                    className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactSidebar;
