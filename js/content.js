/* ============================================================
   VALEMANA · VAM ARQUITECTURA — CONTENIDO EDITABLE
   ------------------------------------------------------------
   Todos los textos se editan en este archivo. Los listados se
   renderizan solos en la página (js/app.js).
   Los textos indicados en el documento se usan literales.
   ============================================================ */

window.SITE_CONTENT = {

  /* ---------- 1. HERO / PRIMERA PANTALLA ---------- */
  hero: {
    eyebrow: "Asesoramiento y proyectos de arquitectura online, con atención personalizada",
    title: "Tu casa, sana, cómoda y bien pensada",
    titleTop: "Tu casa, sana,",
    titleMid: "cómoda y bien",
    titleEnd: "pensada",
    line1: "Decisiones claras para mejorar, reformar o transformar tu casa.",
    line2: "La comodidad de hacerlo online, pero sin perder el trato humano del arquitecto.",
    line3: "Elegí tu situación y te digo cómo podemos trabajarla.",
    how: {
      title: "¿Cómo funciona?",
      steps: [
        { n: "1", lead: "Contanos qué necesitás", text: "Elegís tu situación y nos escribís por WhatsApp." },
        { n: "2", lead: "Compartís la información", text: "Fotos, videos, planos, medidas y todo lo que tengas disponible." },
        { n: "3", lead: "Analizamos tu caso", text: "Un arquitecto revisa la información y define cómo podemos ayudarte." },
        { n: "4", lead: "Recibís tu propuesta", text: "Te indicamos el servicio, alcance, honorarios y próximos pasos." },
      ],
      note: "Todo online. Atención personalizada. Sin bots.",
    },
  },

  /* Bloque de confianza del hero */
  trust: {
    title: "Del otro lado hay una persona.",
    text: "Tus consultas son atendidas personalmente por profesionales que escuchan tu caso y te orientan.",
    reply: "Te responderemos dentro de las 48 hrs hábiles.",
    time: "Tiempo de respuesta: hasta 48 hs hábiles",
  },

  /* ---------- Respuesta a las consultas (se repite junto a los CTA) ---------- */
  response: {
    title: "¿Qué pasa cuando me escribís?",
    text: "Te respondemos personalmente por WhatsApp y te enviamos toda la información para contratar: precio, formas de pago, qué incluye y disponibilidad de agenda.",
    time: "Tiempo de respuesta: hasta 48 hs hábiles",
  },

  /* ---------- Mensajes de WhatsApp ---------- */
  wa: {
    general: "Hola Valeria, vi tu página y quisiera hacer una consulta sobre mi casa.",
    remodelaciones: "Hola Valeria, quiero remodelar mi casa y quisiera asesoramiento para empezar.",
    ambiente: "Hola Valeria, quiero mejorar un ambiente y quisiera una propuesta de diseño de interiores.",
    problema: "Hola Valeria, mi casa tiene un problema y necesito ayuda para diagnosticarlo.",
    comprar: "Hola Valeria, estoy por comprar una casa y quisiera una revisión profesional de la propiedad.",
    confort: "Hola Valeria, quiero mejorar el confort de mi casa y quisiera asesoramiento.",
    consulta: "Hola Valeria, no sé qué necesita mi casa pero quiero mejorarla. Quisiera una consulta online.",
    profesionales: "Hola Valeria, soy arquitecto/a y quiero consultar por los servicios para profesionales.",
  },

  /* ---------- Franja de categorías (navegación secundaria) ---------- */
  marquee: [
    "Humedad", "Filtraciones", "Grietas", "Ampliaciones", "Remodelaciones",
    "Distribución", "Cocinas", "Baños", "Diseño de interiores",
  ],

  /* ---------- FRANJA DE SERVICIOS (debajo del marquee) ---------- */
  services: [
    { id: "mejorar-casa", num: "01", title: "Mi casa tiene un problema", anchor: "#mejorar-casa" },
    { id: "no-se", num: "02", title: "No sé qué necesito", anchor: "#consulta-online" },
    { id: "remodelaciones", num: "03", title: "Asesoramiento para remodelaciones", anchor: "#remodelaciones" },
    { id: "interiores", num: "04", title: "Diseño de interiores", anchor: "#diseno-interiores" },
    { id: "bienestar", num: "05", title: "Espacios y bienestar", anchor: "#espacios-bienestar" },
    { id: "comprar-casa", num: "06", title: "Asesoramiento antes de comprar", anchor: "#antes-de-comprar" },
  ],

  /* ---------- MI CASA TIENE UN PROBLEMA — selector de necesidades ---------- */
  needsSection: {
    eyebrow: "Mi casa tiene un problema",
    title: "¿Qué necesita tu casa?",
    lead: "Elegí tu caso y armamos la consulta. Sin tecnicismos: arrancás por lo que te pasa.",
  },

  needs: [
    { id: "humedad", title: "Tengo humedad", desc: "Manchas u olor en paredes que se descascaran." },
    { id: "grietas", title: "Tengo grietas o fisuras", desc: "Rajas en paredes, cielorrasos o el frente." },
    { id: "filtraciones", title: "Tengo filtraciones", desc: "El agua entra por el techo o las paredes." },
    { id: "techo", title: "Tengo problemas en el techo", desc: "Goteras, tejas o cubierta en mal estado." },
    { id: "instalaciones", title: "Tengo problemas con las instalaciones", desc: "Cañerías o electricidad que no funcionan." },
    { id: "aberturas", title: "Tengo problemas en aberturas y cerramientos" },
    { id: "pisos", title: "Tengo problemas en pisos, paredes y revestimientos" },
    { id: "confort", title: "Tengo problemas de confort en la vivienda" },
  ],

  /* ---------- Galería de 7 imágenes de la sección ---------- */
  galeria: ["galeria-1", "galeria-2", "galeria-3", "galeria-4"],

  /* ---------- 5. ¿QUÉ NECESITA TU CASA? ---------- */
  queNecesita: {
    eyebrow: "Elegí por dónde empezar",
    title: "¿Qué necesita tu casa?",
    lead: "Las seis situaciones principales, con las soluciones que las resuelven.",
    items: [
      {
        num: "01",
        situation: "Quiero remodelar mi casa",
        solution: "Remodelar, cambios, ampliaciones, redistribución, reformas integrales o parciales.",
        href: "remodelar.html",
        img: "remodelar",
        topics: ["Quiero abrir la cocina al living", "Quiero ampliar", "Quiero reformar el baño", "Quiero modernizar mi casa"],
      },
      {
        num: "02",
        situation: "Quiero mejorar un ambiente",
        solution: "Cocina, baño, dormitorio, living, patio, etc.",
        href: "ambiente.html",
        img: "ambiente",
        topics: ["Redistribución de ambientes", "Cocinas", "Baños", "Living", "Dormitorios"],
      },
      {
        num: "03",
        situation: "Mi casa tiene un problema",
        solution: "Humedad, filtraciones, grietas, techo, instalaciones, deterioros, etc.",
        href: "problema.html",
        img: "problema",
        topics: ["Humedad", "Filtraciones", "Grietas y fisuras", "Techo", "Instalaciones", "No sé qué tiene mi casa"],
      },
      {
        num: "04",
        situation: "Estoy por comprar una casa",
        solution: "Quiero saber si conviene, qué se puede modificar y qué inversión puede requerir.",
        href: "comprar.html",
        img: "comprar-carta",
        topics: ["Estado general de la propiedad", "Humedades y filtraciones", "Instalaciones", "Potencial de transformación"],
      },
      {
        num: "05",
        situation: "Quiero mejorar el confort de mi casa",
        solution: "Luz, ventilación, temperatura, orientación, eficiencia, bienestar.",
        href: "confort.html",
        img: "confort",
        topics: ["Distribución", "Luz natural", "Orientación", "Colores", "Feng Shui", "Etiquetado de viviendas"],
      },
      {
        num: "06",
        situation: "No sé qué necesito, pero quiero mejorar mi casa",
        solution: "No sé qué necesita mi casa y quiero una mirada profesional.",
        href: "consulta.html",
        img: "nose",
        topics: ["No sé qué necesita mi casa", "Quiero orientación profesional"],
      },
    ],
  },

  /* ---------- 7. NO SÉ QUÉ NECESITO (consulta online) ---------- */
  consultaOnline: {
    eyebrow: "No sé qué necesito, pero quiero mejorar mi casa",
    title: "Una mirada profesional a tu casa, sin moverte de ahí",
    intro: "Contame qué pasa, compartís fotos o videos, y lo vemos juntos en una consulta online.",
    steps: [
      { n: "01", t: "Contar qué pasa", d: "Un relato sobre tu situación" },
      { n: "02", t: "Enviar fotos o videos", d: "Con la información necesaria" },
      { n: "03", t: "Consulta online", d: "Conversamos sobre el caso" },
      { n: "04", t: "Orientación profesional", d: "Señales para tomar una mejor decisión" },
      { n: "05", t: "Informe si hace falta", d: "Un documento claro con la orientación" },
    ],
    topicsLabel: "¿Sobre qué podemos hablar?",
    topics: [
      "Humedades", "Filtraciones", "Grietas y fisuras", "Quiero cambiar la distribución",
      "Mantenimiento", "Quiero ampliar", "Remodelaciones", "Quiero mejorar un ambiente",
      "No sé qué tiene mi casa",
    ],
    photos: ["consulta-1", "consulta-2", "consulta-3", "consulta-4"],
    whatTitle: "¿Esto es para mí? → ¿Qué voy a recibir?",
    whatIntro: "Me contás, analizamos, te oriento...",
    informe: {
      field: "Problema observado",
      motivo: "Posibles causas",
      verificar: "Qué habría que verificar",
      recomendacion: "Recomendación",
      prioridad: "Prioridad",
      proximo: "Próximo paso",
      note: "Ejemplo del informe que puede acompañar una consulta.",
    },
  },

  /* ---------- 8 y 9. REMODELACIONES ---------- */
  remodelaciones: {
    eyebrow: "Quiero remodelar mi casa",
    title: "¿Querés cambiar, pero no sabés por dónde empezar?",
    lead: "Te acompaño a transformar tus ideas en un proyecto real, con soluciones a medida y una mirada integral del espacio.",
    consultasTitle: "Consultas habituales",
    consultas: [
      "Quiero abrir la cocina al living",
      "Quiero ampliar",
      "Quiero reformar el baño",
      "Quiero transformar el patio",
      "Quiero modernizar mi casa",
      "Quiero saber si puedo hacer una ampliación",
      "Quiero saber qué conviene hacer primero",
    ],
    whatTitle: "¿Esto es para mí? → ¿Qué voy a recibir?",
    cards: [
      {
        name: "Asesoramiento inicial online",
        items: [
          "Revisión de fotos, videos, planos y medidas proporcionadas.",
          "Análisis de la distribución actual.",
          "Identificación de posibilidades y limitaciones.",
          "Recomendaciones sobre distribución, usos y prioridades.",
          "Primera orientación sobre materiales, estilos o soluciones.",
          "Propuesta inicial esquemática para ayudarte a definir qué conviene hacer y por dónde empezar.",
        ],
      },
      {
        name: "Proyecto completo",
        items: [
          "Relevamiento a distancia mediante fotos, videos, planos y medidas proporcionadas por el cliente.",
          "Desarrollo de la propuesta de distribución y organización espacial.",
          "Plantas, cortes y vistas del proyecto.",
          "Modelado 3D y renders para visualizar cómo quedará el espacio.",
          "Definición de materiales, terminaciones y criterios de diseño.",
          "Documentación gráfica necesaria para comprender y llevar adelante la propuesta.",
          "Ajustes y revisión de la propuesta según lo acordado.",
        ],
      },
    ],
    cta: "Empezar por una consulta",
    note: "El proyecto se desarrolla a distancia a partir de la información proporcionada por el cliente. No incluye relevamiento presencial ni dirección de obra. Cuando la intervención requiere trámites, firma profesional, relevamiento presencial o dirección de obra, se evalúa en cada caso la modalidad de trabajo correspondiente.",
  },

  /* ---------- 10. INSPIRACIÓN — TRANSFORMACIONES REALES ---------- */
  inspiracion: {
    eyebrow: "Inspiración",
    title: "INSPIRACIÓN — TRANSFORMACIONES REALES",
    sub: "De cómo está a cómo podría estar",
    text: "Una buena decisión de diseño puede transformar por completo un espacio.",
    cases: [
      {
        name: "Fachada",
        tag: "Remodelación + propuesta de materiales",
        imgA: "fachada-antes", imgB: "fachada-despues",
        labelA: "Antes", labelB: "Después",
      },
      {
        name: "Balcón",
        tag: "Remodelación + propuesta de materiales",
        imgA: "balcon-antes", imgB: "balcon-despues",
        labelA: "Antes", labelB: "Después",
      },
      {
        name: "Cocina",
        tag: "Propuesta diseño de cocina + Concreción real del cliente",
        imgA: "cocina-render", imgB: "cocina-real",
        labelA: "Render", labelB: "Real",
      },
      {
        name: "Baño",
        tag: "Propuesta diseño",
        imgA: "bano-antes", imgB: "bano-despues",
        labelA: "Antes", labelB: "Después",
      },
      {
        name: "Garage en casa",
        tag: "Optimización de espacio + Concreción de lugar de trabajo. diseño espacial y mobiliario",
        imgA: "garage-antes", imgB: "garage-despues",
        labelA: "Antes", labelB: "Después",
      },
      {
        name: "Remodelación de cocina",
        tag: "Cocina propuesta de diseño de cocina",
        imgA: "cocina-antes", imgB: "cocina-despues",
        labelA: "Antes", labelB: "Después",
      },
    ],
  },

  /* ---------- 11 y 12. DISEÑO DE INTERIORES (bloque oscuro) ---------- */
  disenoInteriores: {
    eyebrow: "Quiero mejorar un ambiente",
    title: "Tu casa, rediseñada con mirada arquitectónica",
    lead: "Reformar con un diseño que responda a cómo vivís.",
    photos: ["interiores"],
    topicsLabel: "De qué podemos hablar",
    topics: [
      "Redistribución de ambientes", "Cocinas", "Baños", "Living", "Dormitorios",
      "Materiales", "Colores", "Iluminación", "Mobiliario", "Renders y visualización",
    ],
    cta: "Quiero rediseñar un ambiente",
  },

  /* ---------- 13. ESPACIOS QUE SE SIENTEN BIEN ---------- */
  bienestar: {
    eyebrow: "Quiero mejorar el confort de mi casa",
    title: "Espacios que se sienten bien",
    lead: "No es solo cómo se ve: es cómo se habita. Luz, orientación y circulación cambian cómo se vive un espacio.",
    concepts: [
      { t: "Distribución", d: "Ambientes que fluyen con tu día. Interacción y armonía funcional", img: "distribucion" },
      { t: "Luz natural", d: "El recurso que más transforma.", img: "luz-natural" },
      { t: "Orientación", d: "Aprovechar el sol en la casa. Confort natural en cada estación", img: "orientacion" },
      { t: "Etiquetado de viviendas", d: "Permite evaluar las prestaciones energéticas de una vivienda", img: "etiquetado" },
      { t: "Interior – Exterior", d: "La relación con el patio, galería, balcón, jardín.", img: "interior-exterior" },
      { t: "Colores", d: "Paletas que acompañan", img: "colores" },
      { t: "Sensación de amplitud", d: "Espacios que respiran, maximizan los volúmenes", img: "amplitud" },
      { t: "Feng Shui", d: "Armonía y equilibrio.", img: "feng-shui" },
    ],
    quote: "No es solo como se ve: es como se vive.",
    cta: "Quiero un espacio que se sienta bien",
  },

  /* ---------- 14. ANTES DE COMPRAR ---------- */
  comprar: {
    eyebrow: "Estoy por comprar una casa",
    title: "Antes de comprar, preguntale a un arquitecto",
    lead: "Una mirada profesional a la propiedad te muestra lo que no se ve: humedades, grietas, instalaciones y el potencial real para ampliar o transformar.",
    img: "comprar",
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
      "Analizar terreno antes de comprar",
    ],
    cta: "Pedir una revisión de la propiedad",
  },

  /* ---------- 15. PROYECTOS ---------- */
  projects: {
    eyebrow: "Proyectos",
    title: "Obras y espacios con intención",
    lead: "Documentación, proceso y resultado de cada proyecto.",
  },

  projectsList: [
    {
      code: "Proyecto 01",
      name: "Remodelación stand",
      type: "Local comercial",
      img: "stand",
      desc: "Remodelación de local comercial adaptada a los requerimientos técnicos y administrativos del shopping. Se aprovechó la estructura existente y se renovaron los tratamientos y terminaciones de las superficies, logrando un cambio visual significativo con una intervención de bajo costo. Incluyó la elaboración de toda la documentación necesaria para su aprobación.",
    },
    {
      code: "Proyecto 02",
      name: "Transformación + ampliación de fachada",
      img: "fachada-transformacion",
      imgs: ["fachada-transformacion-doc", "fachada-transformacion-antes", "fachada-transformacion-despues", "fachada-transformacion-2"],
      desc: "A partir del análisis integral de las patologías de la vivienda, se desarrolló una propuesta de fachada que contempla no solo la estética, sino también las condiciones constructivas existentes. El diagnóstico previo permitió tomar mejores decisiones, resolver patologías y proyectar una intervención funcional, duradera y coherente con la vivienda.",
    },
    {
      code: "Proyecto 03",
      name: "Propuesta de intervención integral de departamento",
      img: "departamento",
      desc: "Se desarrolló una propuesta integral de remodelación de la vivienda, contemplando renovación de pisos, carpinterías, baños y cocina, artefactos sanitarios y equipamiento. Se definió una línea estética integral, con selección de pisos, revestimientos, materiales, colores, texturas, iluminación, mobiliario, griferías, sanitarios, mesadas, herrajes, textiles y elementos decorativos. El objetivo fue lograr espacios funcionales, armónicos y coherentes, donde cada elección de material, color y terminación responda a un concepto general de diseño.",
    },
    {
      code: "Proyecto 04",
      name: "Diagnóstico técnico y plan de intervención de la vivienda",
      img: "diagnostico",
      desc: "Un informe de patologías no es solo detectar humedades, fisuras o problemas constructivos. Es entender su origen, evaluar su alcance y definir cómo intervenir correctamente. Este tipo de relevamiento permite al propietario contar con una mirada profesional sobre el estado de su vivienda, planificar las reparaciones y tener criterios claros para solicitar presupuestos y controlar la ejecución de los trabajos. Diagnosticar antes de intervenir es la clave para evitar soluciones improvisadas y reparaciones que solo resuelven el problema de manera superficial.",
    },
    {
      code: "Proyecto 05",
      name: "Ampliación + remodelación de fachada",
      img: "ampliacion-fachada",
      desc: "El cliente tenía una idea definida para la ampliación, pero buscaba una mirada profesional que permitiera resolverla de la manera más conveniente, considerando las características y condiciones existentes de la vivienda. A partir del análisis del proyecto, se desarrollaron diferentes alternativas de ampliación y diseño de fachada, evaluando volumetría, proporciones, materiales, accesos y relación con la construcción existente. El objetivo fue explorar las distintas posibilidades que la vivienda permitía, para encontrar una solución funcional, estética y coherente con la arquitectura existente.",
    },
    {
      code: "Proyecto 06",
      name: "Intervención y ampliación de dormitorio",
      img: "dormitorio",
      desc: "Aprovechando el balcón existente de la vivienda, se planteó una intervención que permitió resolver problemas de humedad provenientes de este sector y, al mismo tiempo, mejorar la funcionalidad del espacio. La ampliación incorpora un sector de lectura y escritorio, junto con un gimnasio personal, generando un ambiente más cómodo, versátil y adaptado a las necesidades de sus habitantes.",
    },
  ],

  /* ---------- 16. SOBRE VALERIA ---------- */
  about: {
    eyebrow: "Sobre Valeria",
    title: "Arquitectura con atención a las personas",
    para: "Te explico claro, sin tecnicismos, y te acompaño en cada paso.",
    how: [
      { t: "Te escucho", d: "Entiendo qué necesitás y cómo vivís tu casa." },
      { t: "Analizo", d: "Estudio el espacio, sus posibilidades y sus limitaciones." },
      { t: "Te propongo", d: "Alternativas claras para que puedas decidir." },
      { t: "Te acompaño", d: "De la primera idea al proyecto y, cuando corresponda, a la obra." },
    ],
  },

  /* ---------- 17. INSTAGRAM ---------- */
  instagram: {
    eyebrow: "Instagram",
    title: "Conocé más proyectos e ideas",
    text: "Trabajos en curso e ideas en @arqvaleriamartin.",
    cta: "Ver en Instagram →",
    img: "vivienda",
  },

  /* ---------- 18. CTA FINAL ---------- */
  finalCta: {
    title: "Idea, consulta o problema: hablemos de tu casa",
    text: "Contanos qué te pasa y te respondemos a la brevedad.",
    wa: "Hablar por WhatsApp →",
    ig: "Ver en Instagram",
  },

  /* ---------- Formulario de consulta ---------- */
  form: {
    eyebrow: "Contanos qué te pasa",
    title: "Completá tu consulta",
    intro: "Armamos el mensaje por WhatsApp para tu caso. Elegí los archivos que quieras compartir y completá el resto; en WhatsApp los adjuntás en el chat.",
    topicLabel: "Tu tema",
    defaultTopic: "Consulta general",
    customToggle: "O escribir otro tema",
    customPlaceholder: "¿Qué te pasa?",
    filesLabel: "Adjuntá fotos, videos, planos o medidas",
    filesBtn: "Elegir archivos",
    filesHint: "Se listan acá y los pasás cuando se abre WhatsApp.",
    filesCount: "archivo(s)",
    msgLabel: "Contanos en unas líneas qué te pasa",
    msgPlaceholder: "Ej.: el techo del dormitorio se humedece cuando llueve…",
    nameLabel: "Tu nombre",
    namePlaceholder: "Cómo podemos llamarte",
    submit: "Enviar por WhatsApp",
    note: "Al abrir WhatsApp, adjuntá ahí los archivos que elegiste.",
    feedbackNoNumber: "Todavía no hay número de WhatsApp configurado. Editalo en js/config.js.",
  },

  /* ---------- 19. FOOTER ---------- */
  footer: {
    name: "Valeria Martín",
    tagline: "Valeria Martín · Arquitectura — casas que funcionan bien",
    navTitle: "Navegación",
    nav: [
      { label: "Inicio", href: "index.html" },
      { label: "Remodelaciones", href: "remodelar.html" },
      { label: "Diseño de interiores", href: "ambiente.html" },
      { label: "Mi casa tiene un problema", href: "problema.html" },
      { label: "Antes de comprar", href: "comprar.html" },
      { label: "Espacios y bienestar", href: "confort.html" },
      { label: "Consulta online", href: "consulta.html" },
      { label: "Proyectos", href: "index.html#proyectos" },
      { label: "Sobre Valeria", href: "index.html#sobre-mi" },
      { label: "Contacto", href: "index.html#contacto" },
      { label: "Política de privacidad", href: "privacidad.html" },
    ],
    contactTitle: "Contacto",
  },
};