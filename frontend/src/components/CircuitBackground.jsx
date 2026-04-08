import { motion } from 'framer-motion';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* SVG Circuit Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient for lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0" />
            <stop offset="50%" stopColor="#94A3B8" stopOpacity="1" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
          </linearGradient>
          
          {/* Animated pulse filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* ============ LEFT SIDE CIRCUITS ============ */}
        <g className="circuit-left" opacity="0.7">
          
          {/* Top left main circuit */}
          <motion.path 
            d="M -20 50 L 80 50 L 80 120 L 150 120 L 150 180" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="80" cy="50" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle 
            cx="80" cy="120" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle 
            cx="150" cy="120" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />

          {/* Second circuit line */}
          <motion.path 
            d="M -20 200 L 100 200 L 100 280 L 60 280 L 60 350 L 120 350" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.circle 
            cx="100" cy="200" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <motion.circle 
            cx="100" cy="280" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          />
          <motion.circle 
            cx="60" cy="280" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          />
          <motion.circle 
            cx="60" cy="350" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }}
          />

          {/* Third circuit */}
          <motion.path 
            d="M -20 420 L 70 420 L 70 500 L 130 500 L 130 560" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          />
          <motion.circle 
            cx="70" cy="420" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle 
            cx="70" cy="500" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.3, repeat: Infinity }}
          />
          <motion.circle 
            cx="130" cy="500" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: 0.5 }}
          />

          {/* Fourth circuit */}
          <motion.path 
            d="M -20 620 L 90 620 L 90 700 L 40 700 L 40 780" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.9 }}
          />
          <motion.circle 
            cx="90" cy="620" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle 
            cx="90" cy="700" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.7, repeat: Infinity }}
          />
          <motion.circle 
            cx="40" cy="700" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
          />

          {/* Hexagons left */}
          <motion.polygon 
            points="50,150 70,130 90,150 90,180 70,200 50,180" 
            stroke="#94A3B8" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path d="M 90 165 L 140 165" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
          <motion.circle 
            cx="140" cy="165" r="4" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.polygon 
            points="80,550 100,530 120,550 120,580 100,600 80,580" 
            stroke="#94A3B8" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />

          {/* Decorative crosses */}
          <motion.g 
            transform="translate(110, 250)"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#94A3B8" strokeWidth="2" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#94A3B8" strokeWidth="2" />
          </motion.g>

          <motion.g 
            transform="translate(45, 470)"
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <line x1="-6" y1="0" x2="6" y2="0" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="0" y1="-6" x2="0" y2="6" stroke="#94A3B8" strokeWidth="1.5" />
          </motion.g>

          {/* Diamond */}
          <motion.polygon 
            points="120,400 135,385 150,400 135,415" 
            stroke="#94A3B8" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Small squares */}
          <motion.rect 
            x="30" y="300" width="12" height="12" 
            stroke="#94A3B8" strokeWidth="1.5" fill="none"
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* ============ RIGHT SIDE CIRCUITS ============ */}
        <g className="circuit-right" opacity="0.7">
          
          {/* Top right main circuit */}
          <motion.path 
            d="M 1940 80 L 1840 80 L 1840 150 L 1770 150 L 1770 220" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.circle 
            cx="1840" cy="80" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <motion.circle 
            cx="1840" cy="150" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
          <motion.circle 
            cx="1770" cy="150" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
          />

          {/* Second right circuit */}
          <motion.path 
            d="M 1940 280 L 1820 280 L 1820 360 L 1880 360 L 1880 430" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.3, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle 
            cx="1820" cy="280" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle 
            cx="1820" cy="360" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle 
            cx="1880" cy="360" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 0.5 }}
          />

          {/* Third right circuit */}
          <motion.path 
            d="M 1940 500 L 1850 500 L 1850 580 L 1790 580 L 1790 650" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.1, ease: "easeInOut", delay: 0.7 }}
          />
          <motion.circle 
            cx="1850" cy="500" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle 
            cx="1850" cy="580" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle 
            cx="1790" cy="580" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
          />

          {/* Fourth right circuit */}
          <motion.path 
            d="M 1940 720 L 1860 720 L 1860 800 L 1920 800" 
            stroke="#94A3B8" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 1 }}
          />
          <motion.circle 
            cx="1860" cy="720" r="4" 
            fill="#94A3B8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.7, repeat: Infinity, delay: 0.4 }}
          />
          <motion.circle 
            cx="1860" cy="800" r="5" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Hexagons right */}
          <motion.polygon 
            points="1830,200 1850,180 1870,200 1870,230 1850,250 1830,230" 
            stroke="#94A3B8" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.path d="M 1830 215 L 1780 215" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
          <motion.circle 
            cx="1780" cy="215" r="4" 
            fill="#3B82F6"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.3, repeat: Infinity, delay: 0.2 }}
          />

          <motion.polygon 
            points="1800,450 1820,430 1840,450 1840,480 1820,500 1800,480" 
            stroke="#94A3B8" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.polygon 
            points="1850,630 1870,610 1890,630 1890,660 1870,680 1850,660" 
            stroke="#94A3B8" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }}
          />

          {/* Decorative crosses */}
          <motion.g 
            transform="translate(1810, 320)"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          >
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#94A3B8" strokeWidth="2" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#94A3B8" strokeWidth="2" />
          </motion.g>

          <motion.g 
            transform="translate(1870, 550)"
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          >
            <line x1="-6" y1="0" x2="6" y2="0" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="0" y1="-6" x2="0" y2="6" stroke="#94A3B8" strokeWidth="1.5" />
          </motion.g>

          {/* Diamond */}
          <motion.polygon 
            points="1770,420 1785,405 1800,420 1785,435" 
            stroke="#94A3B8" 
            strokeWidth="1.5" 
            fill="none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.4 }}
          />

          {/* Small squares */}
          <motion.rect 
            x="1878" y="260" width="12" height="12" 
            stroke="#94A3B8" strokeWidth="1.5" fill="none"
            animate={{ rotate: [0, -45, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <motion.rect 
            x="1800" y="700" width="10" height="10" 
            stroke="#94A3B8" strokeWidth="1.5" fill="none"
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default CircuitBackground;
