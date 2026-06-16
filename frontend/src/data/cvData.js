// CV Data for Jhonatan Villalba
import { Server, Laptop } from 'lucide-react';

export const personalInfo = {
  name: "Jhonatan Villalba",
  title: "Ingeniero de Sistemas",
  summary: "Egresado de la carrera de Ingeniería de Sistemas, con fortalezas en dedicación, rápido aprendizaje y ser aplicado en actividades desarrolladas, buscando siempre mejorar mediante el aprendizaje y experiencias obtenidas.",
  phone: "(0986) 616939",
  email: "jhonivillalba20@gmail.com",
  location: "Ciudad del Este, Paraguay",
  birthDate: "30 de Marzo 2001",
  extras: ["Carné de conducir", "Vehículo propio", "Disponibilidad total"],
  languages: [
    { name: "Castellano", level: "Nativo" },
    { name: "Inglés", level: "Nivel alto (C1)" },
    { name: "Portugués", level: "Intermedio" }
  ],
  profilePhoto: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/956jcpvt_image.png",
  references: [
    {
      name: "Enzo Bavieris",
      position: "Site Manager Bitfarms Rio Cuarto",
      email: "barberis.enzo.21@gmail.com",
      phone: "+54 358 4184120"
    },
    {
      name: "Luis Centurion",
      position: "Site Manager General Hive Digital / NyO Tech",
      email: "luis.centurion@nyotech.com.py",
      phone: "+595 976155989"
    }
  ]
};

export const experiences = [
  {
    id: "electrogrupo",
    company: "Electrogrupo SACI",
    role: "Encargado IT",
    period: "Abril 2026 - Junio 2026",
    sector: "Gestión IT",
    color: "#E30613",
    colorClass: "electrogrupo",
    logo: "https://customer-assets.emergentagent.com/job_repo-builder-67/artifacts/gpu36gtq_image.png",
    logoBackground: "https://customer-assets.emergentagent.com/job_repo-builder-67/artifacts/gpu36gtq_image.png",
    companyDescription: "Empresa paraguaya especializada en instalaciones eléctricas e irrigación, con soluciones integrales para proyectos industriales, comerciales y agrícolas a nivel nacional.",
    roleDescription: "Responsable del área de Tecnologías de la Información, liderando la gestión integral de infraestructura, ERP, servidores, redes, ciberseguridad, desarrollo web y soporte técnico de la empresa.",
    description: [
      "Administración y gestión del ERP Dolphin",
      "Gestión del sistema MRP Datapar",
      "Administración de Asustor como gestor de datos en la nube",
      "cPanel para gestión de correos electrónicos empresariales y despliegue de páginas web bajo dominio propio",
      "Gestión y configuración de dispositivos de red (Mikrotik, TP-Link)",
      "Gestión de servidores locales y de servicios Datapar",
      "Gestión y configuración de routers TP-Link y Access Points Unifi",
      "Desarrollo de página web corporativa",
      "Instalación de infraestructura de red y soporte",
      "Monitoreo y configuración de cámaras mediante SmartPSS Admin (DVR, NVR, XVR)",
      "Soporte técnico de dispositivos e impresoras"
    ]
  },
  {
    id: "neotelecom",
    company: "Neotelecom",
    role: "Operador de Calidad de Red",
    period: "Julio 2025 - Abril 2026",
    sector: "NOC/Infraestructura",
    color: "#C020C0",
    colorClass: "neotelecom",
    logo: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/fagawr7d_image.png",
    logoBackground: "https://customer-assets.emergentagent.com/job_250c7eed-3e72-4297-89ff-be4736a34d7e/artifacts/7a1jj027_image.png",
    companyDescription: "ISP fundado en 2014 que ofrece conectividad de fibra óptica de alta velocidad con simetría real. Base en Ciudad del Este, impulsando la revolución tecnológica en Paraguay.",
    roleDescription: "Responsable de monitoreo y calidad de red en el NOC, gestionando infraestructura de fibra óptica, implementando sistemas de monitoreo y asegurando la disponibilidad del servicio.",
    description: [
      "Gestión y configuración de componentes en rack",
      "Montaje de rack",
      "Implementación e integración de servicios (Zabbix, Netbox, U2000)",
      "Monitoreo de Sistemas de interconexión (Zabbix, Unikit, Zoy, Int6)",
      "Gestión y creación de máquinas virtuales (Proxmox, VMware)",
      "Configuración y Provisionamiento de dispositivos de red (Mikrotik, Unifi, Huawei)",
      "Monitoreo de circuito cerrado (Hikvision)",
      "Segmentación de redes",
      "Integración y mapeo de dispositivos para monitoreo en Zabbix (servidores, switches, UPS, ONT, OLT)",
      "Protocolos de conexión SNMP e IPv6",
      "Configuración de dispositivos TVBOX para servicios de streaming",
      "Gestión y soporte de herramienta de atención al cliente mediante chatbot (UPCHAT)",
      "Administración remota de dispositivos (Telnet, SSH, VPN)",
      "Protocolo de pruebas de red utilizando DevTools",
      "Herramientas de Active Directory Zential"
    ]
  },
  {
    id: "hive",
    company: "Hive Digital Technologies / NyO Tech",
    role: "Operaciones de TI Nivel 2",
    period: "Marzo 2025 - Junio 2025",
    sector: "TI",
    color: "#D4A800",
    colorClass: "hive",
    logo: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/7x7ihsz4_Gemini_Generated_Image_z5ekgwz5ekgwz5ek.png",
    logoBackground: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/27bfplhd_HIVE%20Blockchain%20Technologies%20Symbol%20SVG.svg",
    companyDescription: "Pionero en infraestructura de activos digitales y centros de datos HPC. Opera centros de minería y computación de alto rendimiento en Canadá, Suecia y Paraguay, aprovechando energía hidroeléctrica.",
    roleDescription: "Gestión de operaciones TI en centro de datos de alta capacidad, configuración de servidores, monitoreo de sistemas y desarrollo de infraestructura para minería y HPC.",
    description: [
      "Gestión y configuración de componentes en rack",
      "Monitoreo de Sistemas de interconexión (Zabbix)",
      "Gestión de servidores (Pfsense, Proxmox)",
      "Configuración de Dispositivos de red (Cisco, Unifi)",
      "Desarrollo de circuito cerrado (NVR)",
      "Desarrollo de infraestructura de red interna",
      "Gestión remota de dispositivos (Telnet, SSH, VPN)",
      "Realización de proyectos"
    ]
  },
  {
    id: "bitfarms",
    company: "Bitfarms Ltd",
    role: "IT Field Technician Level 1",
    period: "Noviembre 2024 - Marzo 2025",
    sector: "TI",
    color: "#EA7600",
    colorClass: "bitfarms",
    logo: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/14yct14h_Bitfarms%20Logo%20SVG.svg",
    logoBackground: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/ugyqmiba_Bitfarms%20Symbol%20SVG.svg",
    companyDescription: "Empresa de minería de Bitcoin a escala industrial (ahora Keel Infrastructure). Opera granjas de servidores para validación blockchain con energía renovable en Canadá, EE.UU., Argentina y Paraguay.",
    roleDescription: "Técnico de campo responsable de infraestructura en centro de datos de minería, configuración de equipos y desarrollo de redes internas para operaciones de hashing.",
    description: [
      "Gestión y configuración de componentes en rack",
      "Monitoreo de Sistemas de interconexión (Zabbix)",
      "Gestión de servidores (Pfsense, Proxmox)",
      "Configuración de Dispositivos de red (Cisco, Unifi)",
      "Desarrollo de circuito cerrado (NVR)",
      "Desarrollo de infraestructura de red interna"
    ]
  },
  {
    id: "itaipu",
    company: "Itaipu Binacional",
    role: "Gestor de Sistemas de Comunicación y BD",
    period: "2023",
    sector: "Microinformática SITT.GG",
    color: "#FCB900",
    colorClass: "itaipu",
    logo: "https://customer-assets.emergentagent.com/job_250c7eed-3e72-4297-89ff-be4736a34d7e/artifacts/ki5m2fel_image.png",
    companyDescription: "Superintendencia de Informática de la hidroeléctrica más grande de la región. Gestiona infraestructura tecnológica, ciberseguridad y sistemas críticos para operaciones binacionales Paraguay-Brasil.",
    roleDescription: "Gestión de infraestructura de comunicaciones y bases de datos, incluyendo codificación de componentes, mapeo de interconexiones y administración del sistema Invision.",
    description: [
      "Gestión y codificación de componentes en rack",
      "Instalación y montaje de dispositivos de red",
      "Mapeo de interconexiones",
      "Gestión de base de datos en el sistema Invision",
      "Intranet"
    ]
  },
  {
    id: "freelance",
    company: "Desarrollador Independiente",
    role: "Desarrollador Full Stack",
    period: "2021 - Actualidad",
    sector: "Freelance",
    color: "#10B981",
    colorClass: "freelance",
    logo: null,
    companyDescription: "Servicios de desarrollo de software independiente para clientes diversos, incluyendo odontologías, servicios gubernamentales y empresas locales.",
    roleDescription: "Desarrollo integral de aplicaciones web, móviles y sistemas de automatización, desde diseño hasta despliegue en cloud, utilizando tecnologías modernas.",
    description: [
      "Desarrollo de sistemas, páginas web, landing pages, apps móviles",
      "Automatización mediante APIs con n8n",
      "Frameworks: React, Angular, Flutter",
      "Formatos y Protocolos: JSON, XML, APIs REST",
      "DevOps: Netlify, Vercel, AWS, Heroku, Cloudflare",
      "Lenguajes: Python, PHP, JavaScript (ES6+), Dart",
      "Bases de datos: MySQL, PostgreSQL, MongoDB, Firebase",
      "Desarrollo de tecnología de IA y automatización"
    ]
  }
];

export const education = [
  {
    id: "une",
    institution: "Universidad Nacional del Este - Facultad Politécnica",
    degree: "Ingeniería de Sistemas",
    period: "2019 - 2025",
    color: "#2E7D32",
    colorClass: "une",
    logo: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/khvkdfe2_image.png"
  },
  {
    id: "iso",
    institution: "Seatam Holding - Escuela de Normas ISO",
    degree: "Auditor Líder de ISO 9001:2015",
    period: "2024",
    color: "#1565C0",
    colorClass: "iso",
    logo: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/ybh1prnp_image.png"
  },
  {
    id: "santa-teresita-bach",
    institution: "Colegio Santa Teresita Del Niño Jesús",
    degree: "Bachiller en Ciencias Básicas",
    period: "2016 - 2018",
    color: "#1A237E",
    colorClass: "santa-teresita",
    logo: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/kms89ex6_image.png"
  },
  {
    id: "santa-teresita-bas",
    institution: "Colegio Santa Teresita Del Niño Jesús",
    degree: "Escolar Básica",
    period: "2004 - 2015",
    color: "#1A237E",
    colorClass: "santa-teresita",
    logo: "https://customer-assets.emergentagent.com/job_dynamic-resume-36/artifacts/kms89ex6_image.png"
  }
];

export const certifications = [
  { name: "Arduino Básico", date: "Septiembre 2019" },
  { name: "La ingeniería de software: el método, la técnica y lo humano", date: "Octubre 2021" },
  { name: "Ciberseguridad", date: "Octubre 2021" },
  { name: "Configuración Básica de Redes Según Normas", date: "Octubre 2021" },
  { name: "Herramienta KNIME Para Minería de Datos", date: "Octubre 2021" },
  { name: "Líder Auditor normas ISO 9001:2015", date: "Marzo 2024" }
];

export const skills = {
  ai: [
    "Entrenamiento de modelos locales",
    "Integración de IA en sistemas y páginas web",
    "Automatización con IA",
    "Integración de modelos por APIs (OpenAI, Claude, Gemini)",
    "Personalización de chatbots",
    "Procesamiento de lenguaje natural",
    "n8n con IA"
  ],
  networking: [
    "Configuración de dispositivos de red (Mikrotik, TP-Link, Cisco, Unifi, Huawei)",
    "Routers TP-Link",
    "Access Points Unifi",
    "Segmentación de redes",
    "Protocolos SNMP e IPv6",
    "Administración remota (Telnet, SSH, VPN)",
    "Instalación de infraestructura de red",
    "Montaje y gestión de componentes en rack"
  ],
  monitoring: [
    "Zabbix", "Netbox", "U2000", "Unikit", "Int6",
    "SmartPSS Admin (DVR, NVR, XVR)",
    "Circuito cerrado (Hikvision, NVR)"
  ],
  servers: [
    "Proxmox", "VMware", "Pfsense",
    "Asustor (almacenamiento en la nube)",
    "Servidores locales",
    "Gestión de máquinas virtuales",
    "Active Directory (Zential)"
  ],
  erp: [
    "Dolphin ERP",
    "Datapar MRP",
    "Gestión de servicios Datapar",
    "Administración empresarial",
    "Gestión de dominios corporativos"
  ],
  development: [
    "React", "Angular", "Flutter",
    "Python", "PHP", "JavaScript (ES6+)", "Dart",
    "JSON", "XML", "APIs REST",
    "Desarrollo de páginas web corporativas"
  ],
  databases: [
    "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Cassandra"
  ],
  devops: [
    "Netlify", "Vercel", "AWS", "Heroku", "Cloudflare",
    "cPanel (hosting y correos empresariales)",
    "CI/CD", "Git", "GitHub"
  ],
  tools: [
    "Visual Studio Code", "Visual Studio", "Google Colab",
    "Power BI", "Arduino", "n8n",
    "Soporte técnico de dispositivos",
    "Configuración e instalación de impresoras"
  ]
};

export const developmentFields = [
  {
    id: "technical-it",
    title: "Técnico TI",
    color: "#0055A4",
    colorClass: "technical-it",
    icon: Server,
    summary: "Especialista en Infraestructura IT, Redes y Sistemas de Monitoreo",
    description: "Con más de 2 años de experiencia en infraestructura tecnológica de clase empresarial, he desarrollado expertise en la gestión integral de centros de datos, configuración de redes de fibra óptica, virtualización de servidores y sistemas de monitoreo crítico.",
    tasks: [
      {
        category: "Infraestructura y Centros de Datos",
        items: [
          "Gestión y configuración de componentes en rack para centros de datos",
          "Montaje e instalación de infraestructura de red profesional",
          "Gestión de máquinas virtuales en Proxmox y VMware",
          "Administración de servidores (Pfsense, Proxmox, Datapar)",
          "Instalación de infraestructura de red interna completa"
        ]
      },
      {
        category: "Redes y Conectividad",
        items: [
          "Configuración de dispositivos de red profesionales (Cisco, Mikrotik, TP-Link, Unifi, Huawei)",
          "Implementación de segmentación de redes y protocolos SNMP e IPv6",
          "Administración remota de dispositivos (Telnet, SSH, VPN)",
          "Gestión de routers, switches, Access Points y componentes de interconexión",
          "Instalación de infraestructura de fibra óptica de alta velocidad"
        ]
      },
      {
        category: "Monitoreo y Sistemas Críticos",
        items: [
          "Implementación y gestión de sistemas de monitoreo (Zabbix, Netbox, U2000)",
          "Monitoreo de sistemas de interconexión e integración de dispositivos",
          "Gestión de circuito cerrado profesional (Hikvision, NVR, DVR, XVR)",
          "Configuración de dispositivos TVBOX para servicios de streaming",
          "Mapeo e integración de dispositivos para monitoreo (servidores, switches, UPS, ONT, OLT)"
        ]
      },
      {
        category: "Gestión Empresarial",
        items: [
          "Administración de sistemas ERP (Dolphin) y MRP (Datapar)",
          "Gestión de almacenamiento en la nube (Asustor)",
          "cPanel para gestión de correos empresariales y dominios",
          "Active Directory y administración de usuarios (Zential)",
          "Administración remota y soporte técnico integral"
        ]
      },
      {
        category: "Herramientas de Desarrollo",
        items: [
          "Zabbix, Netbox, U2000, Unikit, Zoy, Int6",
          "SmartPSS Admin para gestión de CCTV",
          "Hikvision, Proxmox, VMware, Pfsense",
          "DevTools para pruebas de red",
          "SSH, VPN, Telnet para administración remota"
        ]
      }
    ]
  },
  {
    id: "full-stack-dev",
    title: "Desarrollador Full Stack",
    color: "#10B981",
    colorClass: "full-stack-dev",
    icon: Laptop,
    summary: "Full Stack Developer especializando en Web y Aplicaciones Modernas",
    description: "Desde 2021, he desarrollado múltiples proyectos de software como freelancer independiente, incluyendo sistemas web complejos, landing pages profesionales, aplicaciones móviles y automatización empresarial con IA.",
    tasks: [
      {
        category: "Frontend & Interfaces",
        items: [
          "React 19 con hooks modernos y manejo de estado avanzado",
          "Angular para aplicaciones empresariales complejas",
          "Flutter para desarrollo multiplataforma móvil",
          "Diseño responsivo con Tailwind CSS, Bootstrap y SCSS",
          "Animaciones sofisticadas con Framer Motion",
          "Componentes accesibles con Shadcn UI y Radix UI"
        ]
      },
      {
        category: "Backend & Servidores",
        items: [
          "Python con FastAPI y frameworks asincronos",
          "Node.js con Express y servidores REST",
          "PHP para aplicaciones web tradicionales",
          "APIs REST profesionales con validación y manejo de errores",
          "Autenticación JWT y OAuth",
          "Gestión de sesiones y tokens seguros"
        ]
      },
      {
        category: "Bases de Datos",
        items: [
          "MongoDB para aplicaciones NoSQL escalables",
          "PostgreSQL y MySQL para datos estructurados",
          "Firebase para proyectos con backend realtime",
          "Cassandra para grandes volúmenes de datos",
          "Diseño de schemas optimizados y queries eficientes",
          "Replicación y backup de datos"
        ]
      },
      {
        category: "Cloud & DevOps",
        items: [
          "Despliegue en Vercel para aplicaciones React/Next.js",
          "Netlify para sitios estáticos y dinámicos",
          "AWS (EC2, S3, RDS, Lambda) para infraestructura escalable",
          "Heroku para aplicaciones backend",
          "Cloudflare para CDN y seguridad",
          "CI/CD pipelines, Git workflows y automatización"
        ]
      },
      {
        category: "Automatización & IA",
        items: [
          "n8n para automatización de workflows empresariales",
          "Integración de IA (OpenAI, Claude, Gemini) en aplicaciones",
          "Entrenamiento de modelos locales para casos específicos",
          "Chatbots personalizados y asistentes virtuales",
          "Procesamiento de lenguaje natural",
          "APIs de IA integradas en proyectos web"
        ]
      },
      {
        category: "Herramientas & Lenguajes",
        items: [
          "Lenguajes: JavaScript (ES6+), Python, PHP, Dart, C++",
          "Formatos: JSON, XML, YAML",
          "Control de versiones: Git, GitHub, GitLab",
          "IDEs: Visual Studio Code, Visual Studio, Google Colab",
          "Testing: Jest, Pytest, Cypress",
          "Documentación y análisis con Power BI"
        ]
      }
    ]
  }
];

export const projects = [
  {
    id: "tekoha-systems",
    title: "Tekoha Systems",
    subtitle: "Plataforma de Software Independiente",
    description: "Empresa de desarrollo de software especializada en soluciones web y automatización empresarial.",
    url: "https://tekoha-systems.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Vercel", "n8n"],
    color: "#6366F1",
    highlights: ["Sitio corporativo profesional", "Showcase de servicios", "Portfolio de clientes"]
  },
  {
    id: "nabi-landing",
    title: "NABI MEN — Landing Page",
    subtitle: "Streetwear by Encargo",
    description: "Landing page profesional para marca de ropa personalizada con diseño moderno y conversión optimizada.",
    url: "https://nabishop-landing.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    color: "#F59E0B",
    highlights: ["Diseño responsive", "Animaciones suaves", "Optimizado para conversión"]
  },
  {
    id: "nabi-store",
    title: "NABI MEN — Tienda Online",
    subtitle: "Ecommerce de Streetwear",
    description: "Plataforma ecommerce completa con carrito de compras, pasarela de pago y gestión de inventario.",
    url: "https://nabimen.store/",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    color: "#EC4899",
    highlights: ["Sistema de pagos", "Gestión de inventario", "Panel de administración"]
  },
  {
    id: "electrogrupo-web",
    title: "Electrogrupo SACI",
    subtitle: "Sitio Corporativo",
    description: "Página web profesional de la empresa Electrogrupo SACI con información de servicios, productos e información de contacto.",
    url: "https://www.electrogrupo.com.py/",
    technologies: ["HTML", "CSS", "JavaScript", "cPanel", "Hosting"],
    color: "#EF4444",
    highlights: ["Diseño corporativo", "SEO optimizado", "Panel de administración"]
  }
];

export const backgroundImages = {
  orange: "https://static.prod-images.emergentagent.com/jobs/250c7eed-3e72-4297-89ff-be4736a34d7e/images/b94934b957dae090274ec1a9a95245ad87b693734164ad587a89a92a5e1ac593.png",
  blue: "https://static.prod-images.emergentagent.com/jobs/250c7eed-3e72-4297-89ff-be4736a34d7e/images/0bfe7831737a6483e6b50d4536d8ccccc4ed7c8c6b73102e0bd9aac2bf0de083.png"
};
