/* ============================================================
   VALEMANA · VALERIA MARTÍN — CONFIGURACIÓN EDITABLE
   ------------------------------------------------------------
   Datos de contacto, redes, y el mapa de imágenes.
   Los botones de WhatsApp arman el mensaje con SITE_CONTENT.
   ============================================================ */

window.SITE_CONFIG = {

  /* ---------- Profesional ---------- */
  owner: {
    name: "Valeria Martín",
    brand: "Valeria Martín",
    monogram: "VM",
    tagline: "Valeria Martín · Arquitectura — casas que funcionan bien",
    location: "Córdoba, Argentina · Presencial y online",
  },

  /* ---------- Sitio ---------- */
  siteUrl: "", // TODO: dominio cuando exista (para og:url / canonical)
  seo: {
    title: "Valeria Martín — Arquitecta | Casas que funcionan bien",
    description:
      "Arquitectura para tu casa: humedades, remodelaciones, diseño de interiores y asesoramiento antes de comprar. Presencial y online.",
  },

  /* ---------- WhatsApp -------------------------------------------------
     NÚMERO EN FORMATO INTERNACIONAL SOLO DÍGITOS, con código de país.
     Ej. 5491100000000  (54 país, 9, 11 código de área, 0000-0000).
     TODO: reemplazar por el número real antes de publicar.               */
  whatsapp: {
    number: "5491112345678",
  },

  /* ---------- Redes sociales ---------- */
  social: {
    instagram: "https://www.instagram.com/arqvaleriamartin",
    linkedin: "https://www.linkedin.com/in/arqvaleriamartin",
    // Uso:  Instagram oficial de Valeria Martín.
    // instagram: "https://www.instagram.com/arq.valeriamartin/reel/xyz/?igsh=abc123",
    // linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:xyz/",
  },

  /* ---------- Imágenes --------------------------------------------------
     Las fotos se cargan después: cuando tengas las fotos reales, creá una
     carpeta assets/images/ y agregá las claves acá abajo. Mientras tanto la
     página deja el espacio (borde punteado) para reemplazarlas.
     Claves: hero, fachada, interiorLiving, cocina, bano, patio, detalle,
     ampliacion, mood, retrato. El logo ya está en assets/images/logo.jpg. */
  images: {
    logo: "assets/images/logo.jpg",
  },
};