import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const ContactBubble = ({ onClick, accentColor }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      data-testid="contact-bubble"
      className="contact-bubble"
      style={{ backgroundColor: accentColor || '#3B82F6' }}
    >
      <User className="w-6 h-6 text-white" />
    </motion.button>
  );
};

export default ContactBubble;
