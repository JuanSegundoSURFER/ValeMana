/* ============================================================
   VALEMANA · VAM ARQUITECTURA — CONFIGURACIÓN EDITABLE
   ------------------------------------------------------------
   Datos de contacto, redes y nombres de archivo de las imágenes.
   Las imágenes se cargan solas cuando el archivo existe en
   assets/images/ con ese nombre. Mientras tanto se ve el
   recuadro con el nombre que debe tener el archivo.
   ============================================================ */

window.SITE_CONFIG = {

  /* ---------- Profesional ---------- */
  owner: {
    name: "Valeria A. Martín",
    brand: "Valeria A. Martín",
    monogram: "VAM",
    tagline: "VAM Arquitectura · casas que funcionan bien",
    location: "Córdoba, Argentina · Presencial y online",
    email: "arqvaleriamartin@gmail.com",
  },

  /* ---------- Sitio ---------- */
  siteUrl: "", // TODO: dominio cuando exista (para og:url / canonical)
  seo: {
    title: "Valeria A. Martín — Arquitecta | Casas que funcionan bien",
    description:
      "Decisiones claras para mejorar, reformar o transformar tu casa. Online, con el trato humano de un arquitecto. Córdoba, Argentina.",
  },

  /* ---------- WhatsApp -------------------------------------------------
     Elegí qué destino usan los botones "Hablar por WhatsApp":
       mode: "username" -> https://wa.me/valeriamartin80
       mode: "number"   -> https://wa.me/5493513555555
     NÚMERO EN FORMATO INTERNACIONAL SOLO DÍGITOS: 54 país + 9 + área + número. */
  whatsapp: {
    mode: "number",
    username: "valeriamartin80",
    number: "5493513555555",
  },

  /* ---------- Redes sociales ---------- */
  social: {
    instagram: "https://www.instagram.com/arqvaleriamartin",
    linkedin: "https://www.linkedin.com/in/arqvaleriamartin",
    // Uso:  Instagram oficial de Valeria A. Martín.
    // instagram: "https://www.instagram.com/arq.valeriamartin/reel/xyz/?igsh=abc123",
    // linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:xyz/",
  },

  /* ---------- Imágenes --------------------------------------------------
     Cada clave es el nombre del archivo (sin extensión) que debe existir
     en assets/images/ — la página usa el nombre tal cual. Para cargar una
     foto: copiar el archivo en assets/images/ con ese nombre (ej. hero.jpg)
     y aparece sola en su lugar. Mientras tanto se muestra el recuadro
     punteado con el nombre esperado.
     Ya incluido: logo.
     Uso directo en el HTML: hero, retrato, croquis, comprarFoto.           */
  images: {
    logo: "logo",
    hero: "hero",
    informativa: "informativa.png",
    retrato: "retrato",
    vivienda: "vivienda.png",
    comprarFoto: "comprar",
  },
};