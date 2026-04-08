import { Briefcase, GraduationCap, Code, Server, Database, Network, Shield } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Briefcase, className: "floating-icon", style: { top: '15%', left: '3%' } },
    { Icon: GraduationCap, className: "floating-icon-delayed", style: { top: '35%', left: '5%' } },
    { Icon: Code, className: "floating-icon-slow", style: { top: '55%', left: '2%' } },
    { Icon: Server, className: "floating-icon", style: { top: '75%', left: '4%' } },
    { Icon: Briefcase, className: "floating-icon-delayed", style: { top: '20%', right: '3%' } },
    { Icon: Database, className: "floating-icon-slow", style: { top: '40%', right: '5%' } },
    { Icon: Network, className: "floating-icon", style: { top: '60%', right: '2%' } },
    { Icon: Shield, className: "floating-icon-delayed", style: { top: '80%', right: '4%' } },
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
            className="w-8 h-8 text-white opacity-[0.03]" 
            strokeWidth={1}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
