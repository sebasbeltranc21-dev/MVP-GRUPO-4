/* ==========================================================
   MVP Grupo 4 — Datos de prueba (mock data)
   ========================================================== */

const ME = {
  id: "u0",
  name: "Valentina Ríos",
  headline: "Estudiante de Ingeniería de Sistemas · Buscando pasantía en Desarrollo Web",
  location: "Bogotá, Colombia",
  email: "valentina.rios@mail.com",
  phone: "+57 310 555 0192",
  color: ["#2563FF", "#7C5CFF"],
  bio: "Apasionada por crear interfaces que la gente disfrute usar. Aprendo rápido, trabajo bien en equipo y me encanta resolver problemas reales con código. Busco mi primera pasantía para crecer en un entorno ágil.",
  skills: ["JavaScript", "HTML/CSS", "React", "Figma", "Git", "SQL", "Trabajo en equipo", "Comunicación"],
  badges: [
    { icon: "🏅", name: "CV Optimizado", desc: "Puntaje IA superior a 80" },
    { icon: "🎓", name: "Academia Completa", desc: "Terminó 5 guías" },
    { icon: "🔥", name: "Racha de 7 días", desc: "Activa una semana seguida" },
    { icon: "🤝", name: "Networker", desc: "+50 conexiones" },
  ],
  portfolio: [
    { title: "EcoRuta", desc: "App web para planificar rutas en bicicleta con huella de carbono.", tags: ["React", "Mapbox"], color: ["#2DD4A7", "#2563FF"] },
    { title: "Biblioteca UX", desc: "Rediseño del sistema de préstamos de la biblioteca universitaria.", tags: ["Figma", "UX Research"], color: ["#7C5CFF", "#FF6FB5"] },
    { title: "Bot de Horarios", desc: "Bot de Telegram que arma horarios sin choques de clases.", tags: ["Node.js", "API"], color: ["#FFB547", "#FF6B6B"] },
  ],
  cv: {
    score: 86,
    sections: [
      { title: "Educación", items: ["Ingeniería de Sistemas — Universidad Nacional (7.º semestre)", "Curso Frontend Developer — Platzi (2025)"] },
      { title: "Proyectos", items: ["EcoRuta: +300 usuarios activos en el campus", "Bot de Horarios: usado por 4 facultades"] },
      { title: "Voluntariado", items: ["Mentora en 'Chicas que Programan' (2024–hoy)"] },
      { title: "Idiomas", items: ["Español nativo", "Inglés B2"] },
    ],
  },
  stats: { connections: 128, views: 342, applications: 6 },
};

const PEOPLE = [
  { id: "u1", name: "Andrés Molina", headline: "Recién graduado en Diseño Gráfico", color: ["#FF6FB5", "#7C5CFF"], mutual: 12, connected: true },
  { id: "u2", name: "Camila Torres", headline: "Talent Acquisition · NovaTech", color: ["#2DD4A7", "#2563FF"], mutual: 8, connected: true, recruiter: true },
  { id: "u3", name: "Diego Herrera", headline: "Autodidacta · Data Analyst Jr.", color: ["#FFB547", "#FF6B6B"], mutual: 5, connected: false },
  { id: "u4", name: "Laura Gómez", headline: "Estudiante de Marketing Digital", color: ["#7C5CFF", "#2563FF"], mutual: 3, connected: false },
  { id: "u5", name: "Mateo Castillo", headline: "Mentor de carrera · Ex Google", color: ["#2563FF", "#2DD4A7"], mutual: 21, connected: true },
  { id: "u6", name: "Sofía Ramírez", headline: "HR Business Partner · Verde Finanzas", color: ["#FF6B6B", "#FFB547"], mutual: 6, connected: false, recruiter: true },
  { id: "u7", name: "Julián Pardo", headline: "Estudiante de Ing. Industrial", color: ["#2DD4A7", "#7C5CFF"], mutual: 9, connected: false },
  { id: "u8", name: "Isabella Cruz", headline: "Bootcamp UX/UI · Buscando pasantía", color: ["#FF6FB5", "#FFB547"], mutual: 2, connected: false },
];

const COMPANIES = [
  {
    id: "c1", name: "NovaTech Solutions", sector: "Tecnología / SaaS", size: "201-500 empleados", location: "Bogotá · Remoto híbrido",
    color: ["#2563FF", "#7C5CFF"], followers: 12400, following: true,
    about: "Construimos software en la nube que ayuda a más de 3.000 pymes en Latinoamérica a digitalizar su operación. Creemos que el talento no depende de un título.",
    culture: ["🌱 Aprendizaje continuo: 4 h semanales pagas para formación", "🏡 Modelo híbrido flexible", "🧑‍🤝‍🧑 Mentor asignado desde el día 1", "🎯 OKRs claros y feedback cada 2 semanas"],
    website: "novatech.co",
  },
  {
    id: "c2", name: "Verde Finanzas", sector: "Fintech", size: "51-200 empleados", location: "Medellín · Presencial",
    color: ["#2DD4A7", "#0EA5E9"], followers: 5800, following: false,
    about: "Fintech de impacto que ofrece microcréditos verdes a emprendedores rurales. Buscamos mentes curiosas que quieran cambiar el sistema financiero.",
    culture: ["💚 Propósito: cada crédito financia un proyecto sostenible", "📊 Cultura data-driven", "☕ Viernes de innovación", "🎓 Auxilio educativo"],
    website: "verdefinanzas.com",
  },
  {
    id: "c3", name: "Pixel & Co. Studio", sector: "Diseño / Agencia Creativa", size: "11-50 empleados", location: "Remoto 100%",
    color: ["#FF6FB5", "#7C5CFF"], followers: 3200, following: true,
    about: "Estudio creativo que diseña marcas y productos digitales para startups de todo el mundo. Valoramos el portafolio más que el diploma.",
    culture: ["🎨 Libertad creativa", "🌎 Equipo distribuido en 6 países", "🕒 Horario asincrónico", "📚 Biblioteca de recursos premium"],
    website: "pixelandco.studio",
  },
  {
    id: "c4", name: "LogiAndes", sector: "Logística / E-commerce", size: "500+ empleados", location: "Lima · Bogotá · Quito",
    color: ["#FFB547", "#FF6B6B"], followers: 21000, following: false,
    about: "Líderes en logística de última milla para e-commerce en la región andina. Movemos más de 1 millón de paquetes al mes.",
    culture: ["🚀 Crecimiento acelerado", "🧠 Programa de jóvenes talentos", "🏆 Bonos por desempeño", "🤸 Bienestar y deporte"],
    website: "logiandes.com",
  },
  {
    id: "c5", name: "SaludConecta", sector: "HealthTech", size: "51-200 empleados", location: "Ciudad de México · Híbrido",
    color: ["#0EA5E9", "#2DD4A7"], followers: 7600, following: false,
    about: "Plataforma de telemedicina que conecta pacientes con especialistas en minutos. Nuestra misión: salud accesible para todos.",
    culture: ["❤️ Impacto social directo", "🧪 Experimentación sin miedo al error", "🏖️ Días libres ilimitados", "🧘 Apoyo en salud mental"],
    website: "saludconecta.mx",
  },
];

const JOBS = [
  {
    id: "j1", companyId: "c1", title: "Pasante de Desarrollo Frontend", modality: "Híbrido", duration: "6 meses", stipend: "$1.800.000 COP/mes", posted: "Hace 2 días", applicants: 34,
    profile: "Estudiante de últimos semestres o autodidacta con proyectos propios en React.",
    requirements: ["Conocimientos de HTML, CSS y JavaScript", "Bases de React o Vue", "Manejo básico de Git", "Disponibilidad de 30 h/semana"],
    skills: ["React", "JavaScript", "CSS", "Git", "Responsive Design", "APIs REST"],
    contact: { name: "Camila Torres Restrepo", role: "Talent Acquisition Lead", phone: "+57 601 742 3310", email: "camila.torres@novatech.co", personId: "u2" },
    description: "Únete al squad de Producto para construir componentes de nuestra plataforma, colaborar con diseño y aprender buenas prácticas de testing, accesibilidad y rendimiento web. Buscamos a alguien con ganas de aprender, que haga preguntas y trabaje en equipo con metodologías ágiles (Scrum).",
  },
  {
    id: "j2", companyId: "c2", title: "Practicante de Análisis de Datos", modality: "Presencial", duration: "6 meses", stipend: "$1.600.000 COP/mes", posted: "Hace 1 día", applicants: 51,
    profile: "Estudiante de Estadística, Economía, Ingeniería o autodidacta con certificados en análisis de datos.",
    requirements: ["Excel avanzado", "SQL básico", "Interés en finanzas sostenibles", "Pensamiento analítico"],
    skills: ["SQL", "Excel", "Python", "Power BI", "Estadística", "Comunicación"],
    contact: { name: "Sofía Ramírez Echeverri", role: "HR Business Partner", phone: "+57 604 318 2290", email: "sofia.ramirez@verdefinanzas.com", personId: "u6" },
    description: "Apoyarás al equipo de Riesgo en la limpieza y visualización de datos de cartera, la construcción de dashboards en Power BI y la generación de reportes con Python y SQL para la toma de decisiones.",
  },
  {
    id: "j3", companyId: "c3", title: "Pasantía en Diseño UX/UI", modality: "Remoto", duration: "4 meses", stipend: "USD 500/mes", posted: "Hace 5 días", applicants: 87,
    profile: "Sin requisito de título. Valoramos un portafolio con al menos 2 casos de estudio.",
    requirements: ["Portafolio en Behance, Dribbble o web propia", "Dominio de Figma", "Inglés intermedio para leer briefs", "Sensibilidad visual"],
    skills: ["Figma", "UX Research", "Prototipado", "Design Systems", "Inglés", "Wireframes"],
    contact: { name: "Mariana Ortega Vélez", role: "Design Lead & Co-founder", phone: "+57 315 880 4471", email: "mariana@pixelandco.studio", personId: null },
    description: "Trabajarás junto a diseñadores senior en proyectos reales para clientes internacionales: investigación con usuarios, wireframes, prototipos de alta fidelidad y mantenimiento de design systems.",
  },
  {
    id: "j4", companyId: "c4", title: "Practicante de Marketing Digital", modality: "Híbrido", duration: "6 meses", stipend: "S/ 1.300/mes", posted: "Hace 3 días", applicants: 63,
    profile: "Estudiantes de Marketing, Comunicación, Publicidad o afines. Creadores de contenido bienvenidos.",
    requirements: ["Manejo de redes sociales", "Redacción creativa", "Nociones de Meta Ads / Google Ads", "Proactividad"],
    skills: ["Redes Sociales", "Copywriting", "Google Analytics", "Meta Ads", "Canva", "SEO"],
    contact: { name: "Ricardo Salazar Núñez", role: "Gerente de Marketing", phone: "+51 1 640 9921", email: "rsalazar@logiandes.com", personId: null },
    description: "Apoyarás la planeación de campañas, la creación de contenido para redes y el análisis de métricas de adquisición en Google Analytics, con presupuesto real para experimentar.",
  },
  {
    id: "j5", companyId: "c5", title: "Pasante de Soporte y Customer Success", modality: "Híbrido", duration: "3 meses", stipend: "MXN 8.000/mes", posted: "Hoy", applicants: 12,
    profile: "Ideal para recién graduados o personas sin estudios formales con excelente actitud de servicio.",
    requirements: ["Excelente comunicación escrita y oral", "Empatía", "Manejo de herramientas ofimáticas", "Deseable: experiencia atendiendo público"],
    skills: ["Comunicación", "Atención al cliente", "Resolución de problemas", "Zendesk", "Empatía", "Trabajo en equipo"],
    contact: { name: "Fernanda López Aguilar", role: "Customer Success Manager", phone: "+52 55 4120 7788", email: "fernanda.lopez@saludconecta.mx", personId: null },
    description: "Serás la voz de SaludConecta: resolverás dudas de pacientes y médicos, documentarás casos frecuentes y propondrás mejoras al producto a partir del feedback de usuarios.",
  },
  {
    id: "j6", companyId: "c1", title: "Pasante de QA / Testing", modality: "Remoto", duration: "6 meses", stipend: "$1.700.000 COP/mes", posted: "Hace 1 semana", applicants: 22,
    profile: "Personas detallistas con lógica de programación. No se requiere experiencia previa.",
    requirements: ["Lógica de programación", "Atención al detalle", "Conocimientos básicos de JavaScript", "Ganas de aprender automatización"],
    skills: ["Testing", "JavaScript", "Cypress", "Jira", "Git", "Documentación"],
    contact: { name: "Camila Torres Restrepo", role: "Talent Acquisition Lead", phone: "+57 601 742 3310", email: "camila.torres@novatech.co", personId: "u2" },
    description: "Aprenderás a diseñar casos de prueba, reportar bugs en Jira y automatizar pruebas end-to-end con Cypress junto a nuestro equipo de calidad.",
  },
];

const POSTS = [
  {
    id: "p1", author: { type: "company", id: "c1" }, time: "Hace 45 min",
    text: "🚀 ¡Abrimos 2 nuevas pasantías! Buscamos talento en Frontend y QA. No importa si eres estudiante o autodidacta: muéstranos lo que has construido. Postúlate en la sección de Vacantes 👇",
    tag: "Vacante", likes: 214, comments: 38, shares: 22, liked: false,
    commentsList: [{ who: "u3", text: "¿Aceptan perfiles sin título universitario? 🙌" }, { who: "u2", text: "¡Claro que sí Diego! Lo importante es tu portafolio." }],
  },
  {
    id: "p2", author: { type: "person", id: "u1" }, time: "Hace 2 h",
    text: "🎉 ¡Lo logré! Después de 23 postulaciones conseguí mi primera pasantía como diseñador en Pixel & Co. Mi consejo: el evaluador IA de esta plataforma me ayudó a subir mi CV de 54 a 89 puntos. ¡No se rindan!",
    tag: "Logro", likes: 532, comments: 91, shares: 14, liked: true,
    commentsList: [{ who: "u5", text: "¡Enorme Andrés! La constancia siempre paga. 👏" }],
  },
  {
    id: "p3", author: { type: "person", id: "u5" }, time: "Hace 5 h",
    text: "💡 Consejo del día: en la entrevista, cuando te pregunten por tu experiencia y no tengas, habla de PROYECTOS. Usa el método STAR (Situación, Tarea, Acción, Resultado). Un proyecto personal bien contado vale más que un cargo sin logros.",
    tag: "Consejo", likes: 1204, comments: 156, shares: 310, liked: false,
    commentsList: [],
  },
  {
    id: "p4", author: { type: "company", id: "c2" }, time: "Ayer",
    text: "📊 Este viernes realizamos un taller gratuito online: 'Excel y SQL para tu primera práctica en datos'. Cupos limitados. ¡Comenta 'QUIERO' y te enviamos el enlace por Inbox!",
    tag: "Evento", likes: 389, comments: 204, shares: 41, liked: false,
    commentsList: [{ who: "u7", text: "QUIERO 🙋‍♂️" }, { who: "u4", text: "QUIERO, ¡gracias!" }],
  },
  {
    id: "p5", author: { type: "person", id: "u3" }, time: "Hace 2 días",
    text: "Soy autodidacta y hoy terminé mi proyecto #10 de análisis de datos: un dashboard sobre la calidad del aire en Latinoamérica. Sin títulos, solo ganas y mucho YouTube 😅. ¡Feedback bienvenido!",
    tag: "Proyecto", likes: 276, comments: 47, shares: 9, liked: false,
    commentsList: [],
  },
];

const ACADEMY = {
  categories: ["Todos", "CV", "Entrevistas", "Sin experiencia", "Marca personal"],
  guides: [
    {
      id: "g1", cat: "CV", icon: "📄", title: "Anatomía de un CV de alto impacto", time: "8 min", level: "Básico", color: ["#2563FF", "#7C5CFF"],
      summary: "Estructura, orden y extensión ideal para que un reclutador lo lea en 7 segundos.",
      steps: [
        "Encabezado limpio: nombre, rol objetivo, ciudad, correo, teléfono y enlace a LinkedIn/portafolio. Nada de foto obligatoria ni datos como estado civil.",
        "Perfil profesional de 3 líneas: quién eres, qué sabes hacer y qué buscas. Adáptalo a cada vacante.",
        "Prioriza lo más relevante: si no tienes experiencia, pon PROYECTOS antes que educación.",
        "Usa viñetas que empiecen con verbos de acción: 'Desarrollé', 'Lideré', 'Optimicé'.",
        "Una sola página. Fuente legible (10–12 pt), márgenes amplios y exporta en PDF.",
      ],
    },
    {
      id: "g2", cat: "Sin experiencia", icon: "🌱", title: "Cómo destacar sin experiencia laboral", time: "10 min", level: "Básico", color: ["#2DD4A7", "#2563FF"],
      summary: "Convierte proyectos, voluntariados y cursos en evidencia real de tus habilidades.",
      steps: [
        "Haz inventario: proyectos académicos, personales, voluntariados, emprendimientos, freelance, cursos.",
        "Cuantifica todo: '+300 usuarios', 'redujo el tiempo un 40%', 'equipo de 5 personas'.",
        "Crea un portafolio simple (GitHub, Behance, Notion o una web gratuita).",
        "Las habilidades blandas cuentan: dales contexto con ejemplos concretos.",
        "Consigue una recomendación de un profesor, mentor o líder de voluntariado.",
      ],
    },
    {
      id: "g3", cat: "CV", icon: "🤖", title: "Supera los filtros ATS", time: "6 min", level: "Intermedio", color: ["#7C5CFF", "#FF6FB5"],
      summary: "Los sistemas automáticos descartan el 75% de los CV. Aprende a pasar el filtro.",
      steps: [
        "Copia las palabras clave exactas de la vacante (si dice 'React', no escribas solo 'frameworks').",
        "Evita tablas, columnas complejas, iconos e imágenes con texto.",
        "Usa títulos de sección estándar: Experiencia, Educación, Habilidades, Proyectos.",
        "Guarda en PDF con texto seleccionable (no escaneado).",
        "Pasa tu CV por el Evaluador IA antes de cada postulación.",
      ],
    },
    {
      id: "g4", cat: "Entrevistas", icon: "🎤", title: "El método STAR para entrevistas", time: "7 min", level: "Intermedio", color: ["#FFB547", "#FF6B6B"],
      summary: "Responde preguntas de comportamiento con historias estructuradas y memorables.",
      steps: [
        "S — Situación: describe el contexto brevemente.",
        "T — Tarea: cuál era tu responsabilidad o el reto.",
        "A — Acción: qué hiciste TÚ (no el equipo), paso a paso.",
        "R — Resultado: el impacto, idealmente con números, y qué aprendiste.",
        "Prepara 5 historias STAR que cubran: liderazgo, conflicto, fracaso, trabajo en equipo e iniciativa.",
      ],
    },
    {
      id: "g5", cat: "Entrevistas", icon: "❓", title: "Las 10 preguntas más comunes (y cómo responderlas)", time: "12 min", level: "Básico", color: ["#0EA5E9", "#2DD4A7"],
      summary: "Desde 'Háblame de ti' hasta '¿Cuál es tu mayor debilidad?'.",
      steps: [
        "'Háblame de ti': presente → pasado → futuro, en 90 segundos.",
        "'¿Por qué esta empresa?': menciona algo específico (producto, valores, noticia reciente).",
        "'¿Tu mayor debilidad?': una real, no crítica para el puesto, y qué haces para mejorarla.",
        "'¿Dónde te ves en 5 años?': muestra ambición alineada con el crecimiento en la empresa.",
        "Siempre ten 2–3 preguntas para el entrevistador: '¿Cómo se ve el éxito en este rol a los 3 meses?'.",
      ],
    },
    {
      id: "g6", cat: "Marca personal", icon: "✨", title: "Construye tu marca personal online", time: "9 min", level: "Avanzado", color: ["#FF6FB5", "#7C5CFF"],
      summary: "Haz que los reclutadores te encuentren a ti, y no al revés.",
      steps: [
        "Foto profesional con buena luz y fondo neutro; titular claro con el rol que buscas.",
        "Publica 1 vez por semana: aprendizajes, proyectos, reflexiones.",
        "Comenta con valor en publicaciones de empresas que te interesan.",
        "Conecta con reclutadores con un mensaje personalizado (no el genérico).",
        "Comparte tu proceso, no solo resultados: la autenticidad genera confianza.",
      ],
    },
  ],
  templates: [
    { id: "harvard", name: "CV Harvard Clásico", desc: "Sobrio, ideal para finanzas y consultoría.", format: "DOC", color: "#2563FF" },
    { id: "tech", name: "CV Moderno Tech", desc: "Optimizado ATS para perfiles de tecnología.", format: "DOC", color: "#7C5CFF" },
    { id: "noexp", name: "CV Sin Experiencia", desc: "Prioriza proyectos y habilidades.", format: "DOC", color: "#2DD4A7" },
    { id: "carta", name: "Carta de Presentación", desc: "Estructura en 4 párrafos que convence.", format: "DOC", color: "#FFB547" },
  ],
  tips: [
    "Personaliza tu CV para cada vacante: 10 minutos de ajuste pueden duplicar tus respuestas.",
    "Envía tus postulaciones entre martes y jueves por la mañana: tienen mayor tasa de apertura.",
    "Después de una entrevista, envía un mensaje de agradecimiento en menos de 24 horas.",
    "Un portafolio con 3 proyectos bien documentados vale más que 10 a medias.",
    "Reemplaza 'Responsable de...' por verbos de logro: 'Aumenté', 'Diseñé', 'Automaticé'.",
    "Investiga a la empresa en sus redes antes de la entrevista y menciónalo.",
  ],
  quiz: [
    { q: "¿Qué sección debería ir primero si no tienes experiencia laboral?", options: ["Hobbies", "Proyectos y habilidades", "Referencias personales"], answer: 1 },
    { q: "¿Cuál es la extensión ideal de un CV para una pasantía?", options: ["1 página", "3 páginas", "Lo que haga falta"], answer: 0 },
    { q: "¿Qué ayuda más a superar un filtro ATS?", options: ["Usar muchos colores", "Incluir palabras clave de la vacante", "Poner foto grande"], answer: 1 },
  ],
};

const CONVERSATIONS = [
  {
    id: "m1", with: { type: "person", id: "u2" }, unread: 2,
    messages: [
      { from: "them", text: "¡Hola Valentina! 👋 Soy Camila, de Talent Acquisition en NovaTech.", time: "10:02" },
      { from: "them", text: "Vimos tu perfil y tu proyecto EcoRuta nos encantó. ¿Te interesaría la pasantía de Frontend?", time: "10:03" },
      { from: "me", text: "¡Hola Camila! Muchas gracias, ¡me encantaría! ¿Cuál sería el siguiente paso?", time: "10:15" },
      { from: "them", text: "Perfecto. Te propongo una llamada de 20 min el martes a las 3 p.m. ¿Te queda bien?", time: "10:20" },
      { from: "them", text: "Te enviaré el enlace de Google Meet por aquí mismo 😊", time: "10:21" },
    ],
  },
  {
    id: "m2", with: { type: "person", id: "u5" }, unread: 0,
    messages: [
      { from: "me", text: "Mateo, ¿me podrías dar feedback de mi CV? Lo subí al evaluador y saqué 86.", time: "Ayer" },
      { from: "them", text: "¡Claro! 86 está muy bien. Solo cuantifica más los logros de tu voluntariado.", time: "Ayer" },
      { from: "them", text: "Y agrega el enlace a tu GitHub en el encabezado. 💪", time: "Ayer" },
    ],
  },
  {
    id: "m3", with: { type: "company", id: "c3" }, unread: 1,
    messages: [
      { from: "them", text: "Hola Valentina, gracias por seguir a Pixel & Co. 🎨 Abrimos convocatoria UX/UI, ¡échale un vistazo!", time: "Lun" },
    ],
  },
  {
    id: "m4", with: { type: "person", id: "u1" }, unread: 0,
    messages: [
      { from: "them", text: "¡Vale! ¿Vas a ir al meetup de diseño del sábado?", time: "Dom" },
      { from: "me", text: "¡Sí! Nos vemos allá 🙌", time: "Dom" },
    ],
  },
];

const AUTO_REPLIES = [
  "¡Gracias por tu mensaje! Lo reviso y te respondo en breve. 😊",
  "¡Excelente! Me parece una gran idea.",
  "Perfecto, lo tengo en cuenta. ¿Tienes disponibilidad esta semana?",
  "¡Genial! Comparte tu portafolio cuando puedas, por favor.",
  "Entendido 👍 Te confirmo los detalles por aquí mismo.",
];

/* Diccionario de habilidades para el evaluador IA */
const SKILL_LEXICON = [
  "javascript", "typescript", "react", "vue", "angular", "html", "css", "node", "node.js", "python", "java", "sql", "git", "github",
  "api", "apis rest", "rest", "responsive", "figma", "ux", "ui", "ux research", "prototipado", "wireframes", "design systems",
  "excel", "power bi", "tableau", "estadística", "machine learning", "testing", "cypress", "jira", "scrum", "agile", "ágil",
  "comunicación", "trabajo en equipo", "liderazgo", "inglés", "marketing", "seo", "google analytics", "meta ads", "copywriting",
  "redes sociales", "canva", "atención al cliente", "zendesk", "empatía", "resolución de problemas", "documentación", "docker",
  "aws", "linux", "accesibilidad", "photoshop", "illustrator", "adobe", "kotlin", "swift", "flutter", "c#", "php", "mongodb",
];
