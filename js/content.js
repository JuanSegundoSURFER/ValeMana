/* ============================================================
   VALEMANA · VALERIA MARTÍN — CONTENIDO EDITABLE
   ------------------------------------------------------------
   Todos los textos, servicios, necesidades y proyectos se editan
   en este archivo. Los listados de abajo se renderizan solos
   en la página: agregar o sacar un ítem actualiza el sitio.
   ============================================================ */

window.SITE_CONTENT = {

  /* ---------- Mensajes de WhatsApp (respuestas contextuales) ----------
     Cada botón usa una clave: data-wa="clave". */
  wa: {
    general:
      "Hola Valeria, vi tu página y quisiera hacer una consulta sobre mi casa.",
    consultaOnline:
      "Hola Valeria, vi el servicio de consulta online y quisiera hacer una consulta puntual sobre mi casa.",
    remodelacion:
      "Hola Valeria, estoy pensando en remodelar y quería empezar con una consulta profesional.",
    interiores:
      "Hola Valeria, me interesa el servicio de diseño de interiores y quería comentarte un ambiente.",
    bienestar:
      "Hola Valeria, me interesa el enfoque de espacios y bienestar para mi casa.",
    comprarCasa:
      "Hola Valeria, estoy por comprar una casa y quisiera una mirada profesional antes de decidir.",
  },

  /* ---------- Franja móvil debajo del hero (un solo marquee) ---------- */
  marquee: [
    "Humedad", "Filtraciones", "Grietas", "Ampliaciones",
    "Remodelaciones", "Distribución", "Cocinas", "Baños",
    "Diseño de interiores", "Bienestar", "Antes de comprar",
  ],

  /* ---------- QUIERO MEJORAR MI CASA — selector de necesidades ---------- */
  needsSection: {
    title: "¿Qué necesita tu casa?",
    lead: "Elegí tu caso y armamos la consulta. Sin tecnicismos: arrancás por lo que te pasa.",
  },

  needs: [
    { id: "humedad", title: "Tengo humedad", desc: "Manchas u olor en paredes que se descascaran." },
    { id: "grietas", title: "Tengo grietas o fisuras", desc: "Rajas en paredes, cielorrasos o el frente." },
    { id: "filtraciones", title: "Tengo filtraciones", desc: "El agua entra por el techo o las paredes." },
    { id: "techo", title: "Tengo problemas en el techo", desc: "Goteras, tejas o cubierta en mal estado." },
    { id: "instalaciones", title: "Tengo problemas con las instalaciones", desc: "Cañerías o electricidad que no funcionan." },
    { id: "ampliar", title: "Quiero ampliar", desc: "Sumar metros: un ambiente, un piso o un exterior." },
    { id: "remodelar", title: "Quiero remodelar", desc: "Renovar un ambiente, una zona o el frente." },
    { id: "distribucion", title: "Quiero cambiar la distribución", desc: "Abrir, unir o redistribuir ambientes." },
    { id: "modernizar", title: "Quiero modernizar mi casa", desc: "Actualizar terminaciones, luz y materiales." },
    { id: "ambiente", title: "Quiero mejorar un ambiente", desc: "Cocina, baño, living o dormitorio." },
    {
      id: "nose",
      title: "No sé qué tiene mi casa",
      desc: "Algo no anda pero no sabés qué es: lo descubrimos juntos.",
      wide: true,
    },
  ],

  /* ---------- Formulario de consulta (a WhatsApp) ---------- */
  form: {
    eyebrow: "Tu consulta",
    title: "Completá tu consulta",
    intro: "Armamos el mensaje por WhatsApp para tu caso. Elegí los archivos que quieras compartir y completá el resto; en WhatsApp los adjuntás en el chat.",
    topicLabel: "Tu tema",
    defaultTopic: "Consulta general",
    customToggle: "O escribir otro tema",
    customPlaceholder: "¿Qué te pasa?",
    filesLabel: "Adjuntá fotos, videos, planos o medidas",
    filesBtn: "Elegir archivos",
    filesHint: "Se listan acá y los pasás cuando se abre WhatsApp.",
    filesEmpty: "No elegiste archivos todavía.",
    filesCount: "archivo(s)",
    msgLabel: "Contanos en unas líneas qué te pasa",
    msgPlaceholder: "Ej.: el techo del dormitorio se humedece cuando llueve…",
    nameLabel: "Tu nombre",
    namePlaceholder: "Cómo podemos llamarte",
    submit: "Enviar por WhatsApp",
    note: "Al abrir WhatsApp, adjuntá ahí los archivos que elegiste.",
    feedbackNoNumber: "Todavía no hay número de WhatsApp configurado. Editalo en js/config.js.",
  },

  /* ---------- Índice de los 6 servicios ---------- */
  servicesIndex: {
    eyebrow: "Servicios",
    title: "Seis formas de trabajar tu casa",
  },

  services: [
    { id: "mejorar-casa", num: "01", title: "Quiero mejorar mi casa", desc: "El punto de partida: contanos qué necesitás.", anchor: "#mejorar-casa" },
    { id: "asesoramiento-online", num: "02", title: "Consulta online", desc: "Una mirada profesional a distancia, sin moverte.", anchor: "#asesoramiento-online" },
    { id: "remodelaciones", num: "03", title: "Asesoramiento para remodelaciones", desc: "Cambiar algo, sin saber por dónde arrancar.", anchor: "#remodelaciones" },
    { id: "interiores", num: "04", title: "Diseño de interiores", desc: "Cocinas, baños, luz, materiales y renders.", anchor: "#interiores" },
    { id: "bienestar", num: "05", title: "Espacios y bienestar", desc: "Espacios que se sienten bien.", anchor: "#bienestar" },
    { id: "comprar-casa", num: "06", title: "Asesoramiento antes de comprar", desc: "Una decisión informada antes de comprar.", anchor: "#comprar-casa" },
  ],

  /* ---------- Asesoramiento online ---------- */
  online: {
    eyebrow: "Consulta online",
    title: "Una mirada profesional a tu casa, sin moverte de ahí",
    lead: "Contanos qué pasa, compartís fotos o videos, y lo vemos juntos en una consulta online.",
    steps: [
      { n: "01", t: "Contar qué pasa", d: "Un mensaje con tu caso alcanza." },
      { n: "02", t: "Enviar fotos o videos", d: "Con el celular alcanza." },
      { n: "03", t: "Consulta online", d: "Conversamos en una videollamada." },
      { n: "04", t: "Orientación profesional", d: "Sabés qué hacer y con qué prioridad." },
      { n: "05", t: "Informe si hace falta", d: "Un documento claro con lo analizado." },
    ],
    topics: [
      "Humedades", "Filtraciones", "Grietas y fisuras", "Patologías constructivas",
      "Problemas de distribución", "Mantenimiento", "Ampliaciones", "Remodelaciones",
    ],
    informe: {
      field: "Problema observado",
      motivo: "Posibles causas",
      verificar: "Qué habría que verificar",
      recomendacion: "Recomendación",
      prioridad: "Prioridad",
      proximo: "Próximo paso",
      note: "Ejemplo del informe que puede acompañar una consulta.",
    },
    cta: "Quiero hacer una consulta",
  },

  /* ---------- Asesoramiento para remodelaciones ---------- */
  remodel: {
    eyebrow: "Para remodelaciones",
    title: "¿Querés cambiar, pero no sabés por dónde empezar?",
    lead: "Antes de un proyecto grande, una primera consulta: escuchamos tu idea y te decimos qué conviene, en qué orden y cuánto implica.",
    examples: [
      "Quiero abrir la cocina al living.",
      "Quiero ampliar.",
      "Quiero reformar el baño.",
      "Quiero transformar el patio.",
      "Quiero modernizar mi casa.",
      "Quiero saber si puedo hacer una ampliación.",
      "Quiero saber qué conviene hacer primero.",
    ],
    compare: [
      {
        n: "01",
        name: "Asesoramiento inicial",
        desc: "Para decidir tranquilo antes de invertir.",
        items: ["Escuchamos tu idea", "Te decimos si es viable", "Qué conviene hacer primero"],
      },
      {
        n: "02",
        name: "Proyecto completo",
        desc: "Para llevar tu idea adelante con un proyecto.",
        items: ["Proyecto y planos", "Trámites y permisos", "Seguimiento de obra"],
      },
    ],
    cta: "Empezar por una consulta",
  },

  /* ---------- Diseño de interiores ---------- */
  interiors: {
    eyebrow: "Diseño de interiores",
    title: "Tu casa, rediseñada con mirada arquitectónica",
    lead: "Reformar con un diseño que responda a cómo vivís.",
    chips: [
      "Redistribución de ambientes", "Cocinas", "Baños", "Living", "Dormitorios",
      "Materiales", "Colores", "Iluminación", "Mobiliario", "Renders y visualización",
    ],
    cta: "Quiero rediseñar un ambiente",
  },

  /* ---------- Espacios y bienestar ---------- */
  wellness: {
    eyebrow: "Espacios y bienestar",
    title: "Espacios que se sienten bien",
    lead: "No es solo cómo se ve: es cómo se habita. Luz, orientación y circulación cambian cómo se vive un espacio.",
    concepts: [
      { t: "Distribución", d: "Ambientes que fluyen con tu día." },
      { t: "Luz natural", d: "El recurso que más transforma." },
      { t: "Orientación", d: "Aprovechar el sol de la casa." },
      { t: "Circulación", d: "Pasos con sentido." },
      { t: "Interior y exterior", d: "La relación con el patio." },
      { t: "Colores", d: "Paletas que acompañan." },
      { t: "Sensación de amplitud", d: "En lo visual y en el uso." },
      { t: "Feng Shui", d: "Como complemento, cuando aporta." },
    ],
    fengshui:
      "Cuando aporta, sumamos criterios de Feng Shui como complemento, sin perder el rigor arquitectónico.",
    cta: "Quiero un espacio que se sienta bien",
  },

  /* ---------- Asesoramiento antes de comprar ---------- */
  prePurchase: {
    eyebrow: "Antes de comprar",
    title: "Antes de comprar, preguntale a un arquitecto",
    lead: "Una mirada profesional a la propiedad te muestra lo que no se ve: humedades, grietas, instalaciones y el potencial real para ampliar o transformar.",
    checks: [
      "Estado general de la propiedad",
      "Humedades y filtraciones",
      "Grietas y fisuras visibles",
      "Estado de la cubierta",
      "Instalaciones",
      "Posibilidad de ampliar",
      "Posibilidad de remodelar",
      "Problemas que habría que presupuestar",
      "Potencial de transformación",
    ],
    online: "Online o presencial, según el caso.",
    cta: "Pedir una revisión de la propiedad",
  },

  /* ---------- Proyectos (portfolio) ----------
     Datos provisorios: reemplazar con proyectos reales. */
  projects: {
    eyebrow: "Proyectos",
    title: "Obras y espacios con intención",
  },

  projectPlaceholders: [
    {
      id: "p01",
      img: "hero",
      name: "Proyecto 01",
      type: "[TIPO — FACHADA / RESIDENCIAL]",
      year: "[AÑO]",
      desc: "[Descripción breve del proyecto — reemplazá con texto real.]",
      wide: true,
    },
    {
      id: "p02",
      img: "interiorLiving",
      name: "Proyecto 02",
      type: "[TIPO — INTERIOR / LIVING]",
      year: "[AÑO]",
      desc: "[Descripción breve del proyecto — reemplazá con texto real.]",
    },
    {
      id: "p03",
      img: "cocina",
      name: "Proyecto 03",
      type: "[TIPO — REMODELACIÓN / COCINA]",
      year: "[AÑO]",
      desc: "[Descripción breve del proyecto — reemplazá con texto real.]",
    },
    {
      id: "p04",
      img: "ampliacion",
      name: "Proyecto 04",
      type: "[TIPO — AMPLIACIÓN]",
      year: "[AÑO]",
      desc: "[Descripción breve del proyecto — reemplazá con texto real.]",
      wide: true,
    },
    {
      id: "p05",
      img: "bano",
      name: "Proyecto 05",
      type: "[TIPO — BAÑO / REDISEÑO]",
      year: "[AÑO]",
      desc: "[Descripción breve del proyecto — reemplazá con texto real.]",
    },
    {
      id: "p06",
      img: "patio",
      name: "Proyecto 06",
      type: "[TIPO — PATIO / EXTERIOR]",
      year: "[AÑO]",
      desc: "[Descripción breve del proyecto — reemplazá con texto real.]",
    },
  ],

  /* ---------- Sobre la arquitecta ---------- */
  about: {
    eyebrow: "Sobre Valeria",
    title: "Arquitectura con atención a las personas",
    para: "Te explica claro, sin tecnicismos, y te acompaña en cada paso.",
    how: [
      { n: "01", t: "Te escucho", d: "Qué necesitás y cómo vivís." },
      { n: "02", t: "Analizo", d: "Voy a la casa y la entiendo." },
      { n: "03", t: "Te propongo", d: "Opciones con costos y tiempos." },
      { n: "04", t: "Te acompaño", d: "De la idea a la obra." },
    ],
  },

  /* ---------- Instagram ---------- */
  instagram: {
    eyebrow: "Instagram",
    title: "Conocé más proyectos e ideas",
    lead: "Trabajos en curso e ideas en @arqvaleriamartin.",
    cta: "Seguir en Instagram",
  },

  /* ---------- Contacto final ---------- */
  finalCta: {
    title: "Idea, consulta o problema: hablemos de tu casa",
    lead: "Contanos qué te pasa y te respondemos a la brevedad.",
    primary: "Hablar por WhatsApp",
    secondary: "Ver en Instagram",
  },

  /* ---------- Pie de página ---------- */
  footer: {
    navTitle: "Navegación",
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Quiero mejorar mi casa", href: "#mejorar-casa" },
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Sobre Valeria", href: "#sobre-mi" },
      { label: "Contacto", href: "#contacto" },
    ],
    contactTitle: "Contacto",
  },
};