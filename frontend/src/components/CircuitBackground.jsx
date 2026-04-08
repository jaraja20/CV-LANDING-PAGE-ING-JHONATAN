const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {/* SVG Circuit Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circuit node marker */}
          <marker id="node" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
            <circle cx="5" cy="5" r="3" fill="#94A3B8" />
          </marker>
          <marker id="node-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="4" fill="#3B82F6" opacity="0.6" />
          </marker>
        </defs>

        {/* Left side circuits */}
        <g className="circuit-left">
          {/* Top left circuit */}
          <path 
            d="M -10 80 L 40 80 L 40 120 L 80 120" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="40" cy="80" r="3" fill="#94A3B8" />
          
          <path 
            d="M -10 150 L 60 150 L 60 200 L 30 200 L 30 250" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="60" cy="150" r="3" fill="#94A3B8" />
          <circle cx="30" cy="200" r="3" fill="#94A3B8" />

          {/* Middle left */}
          <path 
            d="M -10 350 L 50 350 L 50 400 L 90 400 L 90 450" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="50" cy="350" r="3" fill="#94A3B8" />
          <circle cx="90" cy="400" r="3" fill="#3B82F6" opacity="0.5" />

          <path 
            d="M 20 500 L 20 550 L 70 550" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="20" cy="500" r="3" fill="#94A3B8" />

          {/* Bottom left */}
          <path 
            d="M -10 650 L 45 650 L 45 700 L 80 700" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="45" cy="650" r="3" fill="#94A3B8" />

          {/* Hexagon left */}
          <polygon 
            points="35,280 50,265 65,280 65,300 50,315 35,300" 
            stroke="#CBD5E1" 
            strokeWidth="1" 
            fill="none"
          />
          <path d="M 65 290 L 100 290" stroke="#CBD5E1" strokeWidth="1" fill="none" />
          <circle cx="100" cy="290" r="2" fill="#94A3B8" />
        </g>

        {/* Right side circuits */}
        <g className="circuit-right">
          {/* Top right */}
          <path 
            d="M 100% 60 L calc(100% - 60px) 60 L calc(100% - 60px) 100 L calc(100% - 100px) 100" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
          />
          
          <path 
            d="M 1920 120 L 1850 120 L 1850 180 L 1800 180 L 1800 220" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="1850" cy="120" r="3" fill="#94A3B8" />
          <circle cx="1800" cy="180" r="3" fill="#94A3B8" />

          <path 
            d="M 1920 280 L 1870 280 L 1870 330 L 1820 330" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="1870" cy="280" r="3" fill="#3B82F6" opacity="0.5" />

          {/* Middle right */}
          <path 
            d="M 1920 400 L 1860 400 L 1860 450 L 1900 450 L 1900 500" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="1860" cy="400" r="3" fill="#94A3B8" />
          <circle cx="1900" cy="450" r="3" fill="#94A3B8" />

          {/* Bottom right */}
          <path 
            d="M 1920 550 L 1840 550 L 1840 600 L 1880 600 L 1880 650" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />
          <circle cx="1840" cy="550" r="3" fill="#94A3B8" />

          <path 
            d="M 1920 700 L 1870 700 L 1870 750" 
            stroke="#CBD5E1" 
            strokeWidth="1.5" 
            fill="none"
            markerEnd="url(#node)"
          />

          {/* Hexagon right */}
          <polygon 
            points="1855,350 1870,335 1885,350 1885,370 1870,385 1855,370" 
            stroke="#CBD5E1" 
            strokeWidth="1" 
            fill="none"
          />
          <path d="M 1855 360 L 1810 360" stroke="#CBD5E1" strokeWidth="1" fill="none" />
          <circle cx="1810" cy="360" r="2" fill="#94A3B8" />

          {/* Another hexagon */}
          <polygon 
            points="1825,480 1840,465 1855,480 1855,500 1840,515 1825,500" 
            stroke="#CBD5E1" 
            strokeWidth="1" 
            fill="none"
          />
        </g>

        {/* Decorative elements scattered */}
        <g className="decorative">
          {/* Small crosses */}
          <g transform="translate(60, 420)">
            <line x1="-6" y1="0" x2="6" y2="0" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="0" y1="-6" x2="0" y2="6" stroke="#CBD5E1" strokeWidth="1" />
          </g>
          
          <g transform="translate(1860, 250)">
            <line x1="-6" y1="0" x2="6" y2="0" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="0" y1="-6" x2="0" y2="6" stroke="#CBD5E1" strokeWidth="1" />
          </g>

          <g transform="translate(40, 600)">
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#CBD5E1" strokeWidth="1" />
          </g>

          <g transform="translate(1880, 650)">
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#CBD5E1" strokeWidth="1" />
          </g>

          {/* Diamond shapes */}
          <polygon 
            points="70,180 80,170 90,180 80,190" 
            stroke="#CBD5E1" 
            strokeWidth="1" 
            fill="none"
          />

          <polygon 
            points="1830,200 1840,190 1850,200 1840,210" 
            stroke="#CBD5E1" 
            strokeWidth="1" 
            fill="none"
          />

          {/* Small squares */}
          <rect x="25" y="470" width="8" height="8" stroke="#CBD5E1" strokeWidth="1" fill="none" />
          <rect x="1875" y="320" width="8" height="8" stroke="#CBD5E1" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default CircuitBackground;
