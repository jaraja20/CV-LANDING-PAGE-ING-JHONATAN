import { Briefcase, GraduationCap, Code, Server, Database, Network, Shield } from 'lucide-react';

const FloatingIcons = ({ accentColor }) => {
  const icons = [
    { Icon: Briefcase, className: "floating-icon", style: { top: '10%', left: '2%' } },
    { Icon: GraduationCap, className: "floating-icon-delayed", style: { top: '25%', left: '4%' } },
    { Icon: Code, className: "floating-icon-slow", style: { top: '45%', left: '1%' } },
    { Icon: Server, className: "floating-icon", style: { top: '65%', left: '3%' } },
    { Icon: Database, className: "floating-icon-delayed", style: { top: '85%', left: '2%' } },
    { Icon: Briefcase, className: "floating-icon-delayed", style: { top: '15%', right: '2%' } },
    { Icon: Network, className: "floating-icon-slow", style: { top: '35%', right: '4%' } },
    { Icon: Code, className: "floating-icon", style: { top: '55%', right: '1%' } },
    { Icon: Shield, className: "floating-icon-delayed", style: { top: '75%', right: '3%' } },
    { Icon: GraduationCap, className: "floating-icon-slow", style: { top: '90%', right: '2%' } },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.className}`}
          style={item.style}
        >
          <item.Icon 
            className="w-6 h-6 opacity-[0.08]" 
            strokeWidth={1.5}
            style={{ color: accentColor || '#9CA3AF' }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
