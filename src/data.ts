import { Project, JournalPost, Client } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fraude-ml',
    title: 'DETECCIÓN DE FRAUDE ML',
    category: 'REDES NEURONALES',
    image: '/src/assets/images/photo-1551288049-bebda4e38f71.avif',
    year: '2025',
    tagline: 'Pipeline de machine learning en tiempo real para detectar transacciones fraudulentas.',
    description: 'Pipeline de machine learning en tiempo real para detectar transacciones fraudulentas con redes neuronales profundas, precisión del 99.2% y latencia menor a 50ms.',
    role: 'Lead ML Engineer',
    challenge: 'Detectar fraudes en tiempo real con alta precisión sin falsos positivos que afecten a usuarios legítimos.',
    solution: 'Red neuronal profunda custom con arquitectura transformer para secuencias de transacciones, entrenada con datos históricos anonimizados.',
    results: [
      'Precisión del 99.2% en detección de fraudes',
      'Latencia menor a 50ms por transacción',
      'Reducción del 80% de falsos positivos'
    ]
  },
  {
    id: 'vision-industrial',
    title: 'INSPECCIÓN VISUAL',
    category: 'COMPUTER VISION',
    image: '/src/assets/images/photo-1558494949-ef010cbdcc31.avif',
    year: '2025',
    tagline: 'Sistema de visión computacional con CNNs para control de calidad industrial.',
    description: 'Sistema de visión computacional con CNNs para control de calidad industrial, detectando defectos en productos con una exactitud del 97% en tiempo real.',
    role: 'Computer Vision Engineer',
    challenge: 'Detectar defectos minúsculos en líneas de producción industrial a alta velocidad.',
    solution: 'Red convolucional profunda optimizada para inferencia en edge devices, con aumento de datos sintéticos.',
    results: [
      'Exactitud del 97% en detección de defectos',
      'Procesamiento en tiempo real a 60fps',
      'Implementación en dispositivos edge'
    ]
  },
  {
    id: 'audio-inteligente',
    title: 'PROCESAMIENTO DE AUDIO',
    category: 'IA PARA AUDIO',
    image: '/src/assets/images/photo-1559526324-4b87b5e36e44.avif',
    year: '2025',
    tagline: 'Red neuronal profunda para análisis y transcripción automática de audio.',
    description: 'Red neuronal profunda para análisis de audio, detección de eventos sonoros y transcripción automática con redes convolucionales para señales de audio.',
    role: 'Audio AI Specialist',
    challenge: 'Procesar audio en tiempo real con alta fidelidad en entornos con ruido variable.',
    solution: 'Arquitectura CNN + LSTM para características temporales, con preprocesamiento avanzado de señales.',
    results: [
      'Precisión del 95% en transcripción',
      'Detección de 50+ eventos sonoros distintos',
      'Latencia de procesamiento <100ms'
    ]
  },
  {
    id: 'deep-learning-diagnostico',
    title: 'DIAGNÓSTICO ASISTIDO',
    category: 'DEEP LEARNING',
    image: '/src/assets/images/photo-1518770660439-4636190af475.avif',
    year: '2025',
    tagline: 'Redes neuronales profundas para análisis de imágenes médicas.',
    description: 'Redes neuronales profundas para análisis de imágenes médicas, segmentación semántica y clasificación automatizada de patologías con precisión diagnóstica del 94%.',
    role: 'Deep Learning Researcher',
    challenge: 'Lograr precisión diagnóstica clínicamente relevante en imágenes médicas con datos limitados.',
    solution: 'U-Net modificada con atención espacial y transfer learning en modelos pre-entrenados en Imagenet.',
    results: [
      'Precisión diagnóstica del 94%',
      'Segmentación semántica en 3 segundos',
      'Validación clínica con radiólogos'
    ]
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'ai-transforming',
    title: 'Cómo la IA está Transformando el Diseño en 2025',
    category: 'IA Y DISEÑO',
    date: 'Mayo 20, 2025',
    readTime: '4 min de lectura',
    image: '/src/assets/images/proj_timeless_m_1780935032224.png',
    summary: 'Una investigación profunda sobre la sinergia creativa entre arquitecturas neuronales y el diseño físico artesanal.',
    content: [
      'El debate sobre la inteligencia artificial en las industrias creativas está pasando de la aprensión a la sinergia dinámica. Estamos viendo redes artificiales que operan no como escritores autogenerados, sino como capas computacionales listas para ser moldeadas.',
      'En Nexxts, integramos conjuntos de datos generativos desde las primeras etapas de nuestros moodboards. Tratamos los modelos de machine learning como generadores de reflexión de alta velocidad, permitiéndonos probar límites de color, pesos tipográficos y sombras físicas antes de iluminar una escena real.',
      'Sin embargo, el pulido premium sigue siendo un rasgo humano. Está en el espaciado exacto de píxeles, las combinaciones tipográficas intencionales y la moderación emocional que un algoritmo matemático puro no puede encontrar. El futuro pertenece a aquellos que editan con precisión absoluta.'
    ]
  },
  {
    id: 'right-palette',
    title: 'Cómo Elegir la Paleta Correcta para tu Marca',
    category: 'DISEÑO VISUAL',
    date: 'Abril 14, 2025',
    readTime: '6 min de lectura',
    image: '/src/assets/images/proj_beyond_time_1780934988574.png',
    summary: 'Descubre la acústica del color. Por qué tu paleta de marca necesita frecuencias emocionales específicas, no solo armonías.',
    content: [
      'El color no es secundario: es la primera onda acústica que golpea el sistema nervioso humano antes de que procesen una sola palabra. La mayoría de las marcas seleccionan armonías azules/violetas estandarizadas que se mezclan instantáneamente en el lodo digital moderno.',
      'Para construir una presencia visual premium, debes abrazar el contraste y la moderación. Usa blancos suaves profundos y pizarras de carbón oscuro para establecer un entorno de alto contraste y lujo. Cuando introduzcas un color de acento—como nuestro naranja vibrante—asegúrate de que sirva un propósito estructural puro.',
      'Nunca permitas más de tres claves de color dominantes en tu sistema visual. Un lienzo base, un controlador de diseño de alto contraste y un indicador de alta frecuencia. Esto crea ritmo y garantiza un enfoque receptivo.'
    ]
  },
  {
    id: 'trends-dominate',
    title: '10 Tendencias de Diseño Web que Dominarán Este Año',
    category: 'TENDENCIAS',
    date: 'Marzo 02, 2025',
    readTime: '5 min de lectura',
    image: '/src/assets/images/proj_brand7_1780935001097.png',
    summary: 'Una visión definitiva del renacimiento visual: bordes redondeados, paneles de control flotantes y layouts responsivos con marco.',
    content: [
      'Estamos presenciando un gran cambio de diseño: el fin de los portales planos genéricos sin límites y el regreso de los marcos arquitectónicos físicos. Las páginas web se sienten más como equipos de visualización táctiles.',
      'Los movimientos visuales clave de este año incluyen contenedores de bisel físicos completamente redondeados que encierran la página activa, manteniéndola separada de los límites exteriores oscuros. Los controladores de navegación flotantes y las píldoras de comando inferior están reemplazando las barras superiores tradicionales.',
      'Además, los emparejamientos de píxeles técnicos están uniendo consolas digitales retro-futuristas con lujo moderno absoluto. Los productos web minimalistas y de alto rendimiento están eliminando el relleno de diseño para enfatizar el equilibrio tipográfico puro.'
    ]
  }
];

export const CLIENTS: Client[] = [
  { id: 'c1', name: 'Wave Studios', industry: 'Acoustic Labs', logoType: 'wave' },
  { id: 'c2', name: 'Meridian', industry: 'Creative Biotech', logoType: 'meridian' },
  { id: 'c3', name: 'Arch.io', industry: 'Spatial Construction', logoType: 'arc' },
  { id: 'c4', name: 'Oakley Space', industry: 'Premium Gear', logoType: 'oakley' },
  { id: 'c5', name: 'Delta Precision', industry: 'Technical Wear', logoType: 'delta' }
];

export const SERVICES = [
  {
    id: 'web',
    num: '01',
    title: 'Aplicaciones Web Modernas',
    desc: 'Creamos sitios web y aplicaciones web profesionales, rápidas y optimizadas que impulsan tu negocio en el entorno digital.',
    features: ['Sitios corporativos y landing pages', 'Tiendas online (E-commerce)', 'Plataformas SaaS', 'APIs y microservicios', 'Optimización SEO y rendimiento'],
    image: '/src/assets/images/photo-1519389950473-47ba0277781c.avif'
  },
  {
    id: 'ia',
    num: '02',
    tag: 'Inteligencia Artificial',
    title: 'Integraciones IA',
    desc: 'Integramos inteligencia artificial en tus procesos empresariales para automatizar tareas, analizar datos y tomar mejores decisiones.',
    features: ['Chatbots y asistentes virtuales', 'Integración de APIs IA (OpenAI, Claude)', 'Automatización de procesos', 'Análisis inteligente de datos', 'Visión por computadora'],
    image: '/src/assets/images/photo-1531403009284-440f080d1e12.avif'
  },
  {
    id: 'ml',
    num: '03',
    tag: 'Machine Learning',
    title: 'Modelos Predictivos',
    desc: 'Desarrollamos modelos de machine learning personalizados que transforman tus datos en ventajas competitivas.',
    features: ['Modelos predictivos y clasificación', 'Sistemas de recomendación', 'Detección de anomalías', 'Segmentación de clientes', 'Procesamiento de lenguaje natural'],
    image: '/src/assets/images/photo-1555066931-4365d14bab8c.avif'
  },
  {
    id: 'llm',
    num: '04',
    tag: 'LLMs & Fine-tuning',
    title: 'Modelos de Lenguaje',
    desc: 'Personalizamos modelos de lenguaje avanzados (GPT, Claude, Llama) para crear soluciones adaptadas a tu negocio.',
    features: ['Fine-tuning de modelos', 'Chatbots con IA generativa', 'Sistemas RAG', 'Generación de contenido', 'Agentes autónomos'],
    image: '/src/assets/images/photo-1620712943543-bcc4688e7485.avif'
  }
];