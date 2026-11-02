export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  shortDesc: string;
  businessBenefit: string;
  fullDesc: string;
  bulletPoints: string[];
  keyMetrics: { label: string; value: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'proteccion-informacion',
    slug: 'proteccion-informacion',
    badge: 'Protección de Datos',
    image: '/assets/images/sol_backup_vault.jpg',
    title: 'Protección de información',
    subtitle: 'Backup local, respaldo cloud y recuperación de datos.',
    shortDesc: 'Respaldo inmutable y arquitecturas híbridas para garantizar la integridad absoluta de sus datos.',
    businessBenefit: 'Garantiza que ningún ataque de ransomware ni fallo de hardware pueda borrar o alterar los datos históricos, financieros o contables de la organización.',
    fullDesc: 'Diseñamos estrategias de almacenamiento y copia de seguridad multinivel. Sus bases de datos, archivos financieros, sistemas ERP y documentos sensibles se replican en repositorios blindados contra ransomware con cifrado AES-256 tanto en tránsito como en reposo.',
    bulletPoints: [
      'Respaldo inmutable local con tecnología WORM (Write Once, Read Many).',
      'Replicación en nube geo-distribuida de alta disponibilidad.',
      'Políticas de retención automatizadas y cumplimiento normativo.',
      'Validación programada de integridad de copias sin interrupción de servicio.'
    ],
    keyMetrics: [
      { label: 'RPO (Recovery Point)', value: '< 15 min' },
      { label: 'Cifrado de datos', value: 'AES-256' },
      { label: 'Disponibilidad de réplicas', value: '99.99%' },
      { label: 'Protección anti-ransomware', value: 'Inmutable' }
    ],
    deliverables: [
      'Auditoría y cartografía de información crítica',
      'Configuración de agentes de backup híbridos (Local + Cloud)',
      'Repositorios con bloqueo de borrado e inmutabilidad',
      'Protocolos de recuperación inmediata y simulacro documentado'
    ],
    faqs: [
      {
        q: '¿Cómo nos protege el respaldo inmutable ante un ataque de ransomware?',
        a: 'El ransomware moderno busca infectar y borrar los respaldos antes de encriptar los servidores. Con tecnología inmutable, ni siquiera los administradores pueden modificar o borrar los datos durante el período de retención establecido.'
      },
      {
        q: '¿Qué impacto tiene el proceso de copia sobre la red diaria de la empresa?',
        a: 'Utilizamos tecnología de deduplicación en origen y compresión diferencial, transmitiendo únicamente los bloques modificados y priorizando el tráfico fuera de horas pico.'
      }
    ]
  },
  {
    id: 'ciberseguridad',
    slug: 'ciberseguridad',
    badge: 'Defensa Activa',
    image: '/assets/images/sol_cyber_soc.jpg',
    title: 'Ciberseguridad empresarial',
    subtitle: 'Antivirus de última generación, protección de dispositivos y prevención de amenazas.',
    shortDesc: 'Monitoreo proactivo de puestos de trabajo, servidores y correo corporativo frente a malware moderno.',
    businessBenefit: 'Neutraliza intrusiones e intentos de fraude digital antes de que afecten la red o provoquen fugas de información confidencial.',
    fullDesc: 'La ciberseguridad moderna trasciende el antivirus tradicional. Implementamos detección y respuesta en endpoints (EDR/XDR), blindaje perimetral y filtrado heurístico para neutralizar intrusiones, phishing y accesos no autorizados antes de que afecten la operación.',
    bulletPoints: [
      'Detección y contención automática basada en comportamiento y machine learning.',
      'Aislamiento inmediato de puestos de trabajo comprometidos sin detener la red.',
      'Filtrado y protección avanzada para correo corporativo y suites ofimáticas.',
      'Control de dispositivos USB, periféricos y aplicaciones no autorizadas.'
    ],
    keyMetrics: [
      { label: 'Tiempo de detección', value: '< 60 seg' },
      { label: 'Cobertura de endpoints', value: '100%' },
      { label: 'Bloqueo de amenazas', value: '99.8%' },
      { label: 'Monitoreo de red', value: '24/7' }
    ],
    deliverables: [
      'Despliegue unificado de agentes en estaciones y servidores',
      'Configuración de consolas de administración centralizadas',
      'Políticas de endurecimiento (Hardening) de sistemas operativos',
      'Reportes ejecutivos de exposición a amenazas e incidentes prevenidos'
    ],
    faqs: [
      {
        q: '¿Por qué un antivirus convencional ya no es suficiente?',
        a: 'Las amenazas contemporáneas utilizan ataques sin archivos (fileless), ingeniería social y scripts en memoria que evaden las firmas tradicionales. Se requiere detección por comportamiento en tiempo real.'
      },
      {
        q: '¿Funciona para colaboradores que trabajan en modalidad remota o híbrida?',
        a: 'Sí, la protección viaja con el dispositivo sin importar la red Wi-Fi o ubicación desde la que se conecte el colaborador.'
      }
    ]
  },
  {
    id: 'continuidad',
    slug: 'continuidad',
    badge: 'Resiliencia Operativa',
    image: '/assets/images/sol_continuity_hardware.jpg',
    title: 'Continuidad de negocio',
    subtitle: 'Recuperación ante incidentes y protección de sistemas críticos.',
    shortDesc: 'Planes probados y entornos espejo para que su operación no se detenga ante fallas o desastres.',
    businessBenefit: 'Asegura que los sistemas de facturación, almacén y atención a clientes se restablezcan en minutos ante cualquier contingencia física o digital.',
    fullDesc: 'Garantizamos que ante un fallo de hardware, corte de energía, error humano o ciberataque, su organización pueda reanudar operaciones críticas en minutos. Diseñamos planes de continuidad de negocio (BCP) y recuperación ante desastres (DRP) con infraestructura redundante.',
    bulletPoints: [
      'Mapeo de procesos críticos y definición de objetivos RTO / RPO.',
      'Entornos espejo listos para encendido automático (Failover).',
      'Procedimientos claros de actuación y contingencia para el equipo directivo.',
      'Simulacros periódicos para certificar tiempos de restablecimiento reales.'
    ],
    keyMetrics: [
      { label: 'RTO (Tiempo de recuperación)', value: '< 1 hora' },
      { label: 'Redundancia de sistemas', value: 'Multi-zona' },
      { label: 'Frecuencia de simulacros', value: 'Trimestral' },
      { label: 'Continuidad asegurada', value: '99.9%' }
    ],
    deliverables: [
      'Documento maestro BCP/DRP adaptado al sector de la empresa',
      'Matriz de dependencias tecnológicas e impacto financiero de caídas',
      'Infraestructura de contingencia preconfigurada',
      'Manual de crisis y árbol de escalamiento para líderes de área'
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre tener un respaldo y tener continuidad de negocio?',
        a: 'Un respaldo son los datos guardados; la continuidad es la capacidad de volver a procesar ventas, emitir facturas y operar en cuestión de minutos sin esperar días para reconstruir servidores.'
      },
      {
        q: '¿Cómo comprobamos que el plan de recuperación funciona antes de una crisis?',
        a: 'Efectuamos pruebas de arranque en entornos aislados tipo sandbox donde se verifica la puesta en marcha de aplicaciones sin tocar la operación productiva.'
      }
    ]
  },
  {
    id: 'gestion-seguridad',
    slug: 'gestion-seguridad',
    badge: 'Gobierno y Control',
    image: '/assets/images/sol_governance_board.jpg',
    title: 'Gestión de seguridad',
    subtitle: 'Credenciales, políticas y buenas prácticas empresariales.',
    shortDesc: 'Control de accesos con privilegios mínimos, bóveda de identidades y cultura de seguridad.',
    businessBenefit: 'Previene el 85% de los incidentes derivados de contraseñas expuestas y asegura la trazabilidad estricta de quién accede a qué información.',
    fullDesc: 'La mayoría de los incidentes comienzan por contraseñas débiles o falta de controles internos. Implementamos gestión de identidades y accesos privilegiados (IAM/PAM), doble factor de autenticación (MFA) obligatorio y directivas claras que alinean a sus colaboradores con estándares internacionales.',
    bulletPoints: [
      'Gestión centralizada de credenciales y autenticación multifactorial (MFA).',
      'Definición de políticas de acceso basadas en roles y principio de menor privilegio.',
      'Campañas de concienciación y simulacros de phishing para colaboradores.',
      'Auditorías de cumplimiento para normativas de protección de datos.'
    ],
    keyMetrics: [
      { label: 'Adopción de MFA', value: '100%' },
      { label: 'Reducción de riesgo humano', value: '-85%' },
      { label: 'Tiempo de revocación', value: 'Inmediato' },
      { label: 'Alineación de políticas', value: 'ISO 27001' }
    ],
    deliverables: [
      'Bóveda corporativa de credenciales seguras',
      'Manual de políticas de seguridad de la información corporativo',
      'Plataforma de capacitación continua para empleados',
      'Matriz de roles, privilegios y auditoría de accesos'
    ],
    faqs: [
      {
        q: '¿Cómo evitamos que la seguridad entorpezca el trabajo diario de los empleados?',
        a: 'Implementamos Single Sign-On (SSO) y acceso condicional inteligente: los usuarios acceden más rápido a sus herramientas autorizadas sin recordar decenas de contraseñas, bajo un entorno blindado.'
      },
      {
        q: '¿Qué ocurre cuando un colaborador se retira de la organización?',
        a: 'Con la gestión centralizada, la revocación de todos los accesos a datos, correos y sistemas se ejecuta en un solo clic, eliminando cuentas huérfanas.'
      }
    ]
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Evaluamos',
    description: 'Diagnóstico exhaustivo de vulnerabilidades, activos de información y niveles de exposición de la infraestructura.',
    details: 'Analizamos topología de red, sistemas críticos, repositorios de datos y prácticas de acceso existentes para identificar brechas de continuidad.'
  },
  {
    step: '02',
    title: 'Diseñamos',
    description: 'Estrategia personalizada de respaldo, defensa activa y tiempos objetivo de recuperación (RTO/RPO).',
    details: 'Arquitectura a la medida de la escala de la empresa, balanceando costo, simplicidad operativa y tolerancia cero a pérdidas de información.'
  },
  {
    step: '03',
    title: 'Protegemos',
    description: 'Despliegue de tecnología inmutable, capas de prevención de amenazas y configuración de políticas estrictas.',
    details: 'Implementación sin detener las operaciones cotidianas. Pruebas de funcionamiento y puesta a punto de los canales de defensa.'
  },
  {
    step: '04',
    title: 'Evolucionamos',
    description: 'Monitoreo continuo, simulacros periódicos de recuperación y adaptación ante nuevas amenazas digitales.',
    details: 'La seguridad no es un evento único. Acompañamos a su equipo directivo con auditorías regulares y reportes de resiliencia.'
  }
];

export const PILLARS_DATA = [
  {
    number: '01',
    title: 'Protección inteligente',
    subtitle: 'Defensa que anticipa el impacto antes de que ocurra.',
    description: 'Monitoreo y bloqueo automatizado en estaciones de trabajo y servidores, deteniendo ataques dirigidos y filtrado no deseado de datos.',
    highlight: 'Anticipación proactiva y contención automática'
  },
  {
    number: '02',
    title: 'Continuidad empresarial',
    subtitle: 'Capacidad de respuesta inmediata frente a cualquier contingencia.',
    description: 'Respaldos inmutables y planes de contingencia documentados para que ningún imprevisto detenga el flujo comercial ni la facturación.',
    highlight: 'RTO y RPO garantizados por contrato'
  },
  {
    number: '03',
    title: 'Seguridad escalable',
    subtitle: 'Arquitectura modular que crece con la estructura de tu empresa.',
    description: 'Protección adaptable que acompaña el crecimiento de sedes, volumen de datos y colaboradores sin complejidades técnicas innecesarias.',
    highlight: 'Control unificado sin sobrecostes'
  }
];

export interface SectorItem {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  threatScenario: string;
  solutionApproach: string;
}

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 'comercio',
    name: 'Comercio y distribución',
    description: 'Protección de puntos de venta, transacciones, inventarios y plataformas de facturación continua.',
    image: '/assets/images/sector_commerce.jpg',
    icon: 'Store',
    threatScenario: 'Ataques a TPV o interrupción de sincronización con almacén.',
    solutionApproach: 'Backup de bases de datos transaccionales cada 15 minutos y alta disponibilidad en terminales.'
  },
  {
    id: 'industria',
    name: 'Industria',
    description: 'Blindaje de líneas de producción, sistemas SCADA/OT conectados y propiedad intelectual.',
    image: '/assets/images/sector_industry.jpg',
    icon: 'Factory',
    threatScenario: 'Paradas no planificadas de maquinaria por intrusiones en la red corporativa.',
    solutionApproach: 'Segmentación de red entre planta y oficinas, con planes de contingencia sin conexión.'
  },
  {
    id: 'logistica',
    name: 'Logística',
    description: 'Operación continua para seguimiento de despachos, centros de distribución y flotas en tránsito.',
    image: '/assets/images/sector_logistics.jpg',
    icon: 'Truck',
    threatScenario: 'Caída de sistemas de trazabilidad y gestión de bodegas en picos de demanda.',
    solutionApproach: 'Entornos de contingencia en nube con activación inmediata de respaldo.'
  },
  {
    id: 'servicios',
    name: 'Servicios empresariales',
    description: 'Confidencialidad absoluta de expedientes de clientes, contratos y archivos contables.',
    image: '/assets/images/sol_governance_board.jpg',
    icon: 'Briefcase',
    threatScenario: 'Fuga de información confidencial o secuestro de servidores de archivos.',
    solutionApproach: 'Cifrado de extremo a extremo, control de identidades y auditoría de accesos.'
  },
  {
    id: 'infraestructura',
    name: 'Organizaciones con infraestructura digital crítica',
    description: 'Entornos tecnológicos que demandan alta disponibilidad de servidores, APIs y bases de datos.',
    image: '/assets/images/sector_datacenter.jpg',
    icon: 'Server',
    threatScenario: 'Ataques volumétricos, ransomware coordinado o fallas críticas en almacenamiento.',
    solutionApproach: 'Estrategia 3-2-1 de respaldo inmutable con redundancia geográfica certificada.'
  }
];

export const FAQS_DATA = [
  {
    id: 'faq-1',
    question: '¿Por qué mi empresa necesita una estrategia de continuidad?',
    answer: 'Una estrategia de continuidad asegura que, ante cualquier desastre (ciberataque, falla de hardware o corte de energía), la empresa pueda seguir operando sin pérdidas económicas graves ni daño a su reputación. Proteger la información es fundamental, pero saber cómo recuperarla a tiempo es lo que mantiene vivo el negocio.'
  },
  {
    id: 'faq-2',
    question: '¿Qué información debería respaldar?',
    answer: 'Toda información indispensable para la facturación, el cumplimiento legal y la operación diaria: bases de datos contables, sistemas ERP/CRM, archivos de clientes, contratos, servidores de correo y configuraciones de infraestructura. Clasificamos su información para respaldar lo crítico con mayor frecuencia.'
  },
  {
    id: 'faq-3',
    question: '¿Qué sucede si mis sistemas sufren un ataque?',
    answer: 'Si cuenta con nuestro esquema, los sistemas de defensa aíslan automáticamente la amenaza para evitar su propagación lateral. Simultáneamente, el protocolo de continuidad activa los respaldos inmutables para restaurar las aplicaciones afectadas en minutos, sin pagar rescates ni perder datos.'
  },
  {
    id: 'faq-4',
    question: '¿Puedo implementar soluciones según el tamaño de mi empresa?',
    answer: 'Totalmente. Diseñamos modelos adaptados tanto para medianas empresas en crecimiento como para corporaciones con múltiples sedes. No imponemos licencias sobredimensionadas: priorizamos la arquitectura que protege sus activos clave con la mejor relación costo-beneficio.'
  },
  {
    id: 'faq-5',
    question: '¿Qué diferencia existe entre respaldo y recuperación?',
    answer: 'El respaldo es la copia guardada de sus datos; la recuperación es el procedimiento técnico y coordinado para hacer que esos datos vuelvan a estar operativos en los sistemas de la empresa. Tener una copia no sirve de nada si se necesitan tres semanas para restablecerla; nosotros garantizamos tiempos RTO mínimos.'
  }
];
