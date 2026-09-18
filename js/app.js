/* ============================================================
   VALEMANA · VAM ARQUITECTURA — INTERACCIÓN
   ------------------------------------------------------------
   No tocar esta lógica salvo para agregar funcionalidad.
   Todo el contenido editable vive en js/content.js y js/config.js.
   Las imágenes se leen de assets/images/<nombre>.jpg según la
   clave definida en js/config.js. Si el archivo no existe
   todavía, se muestra un recuadro con el nombre esperado.
   ============================================================ */

(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};
  var DATA = window.SITE_CONTENT || {};
  var IMG_DIR = "assets/images/";

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  };

  function getPath(obj, path) {
    if (!obj || !path) return null;
    return path.split(".").reduce(function (acc, key) {
      return acc == null ? null : acc[key];
    }, obj);
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fileName(name) {
    name = String(name || "");
    return name.indexOf(".") > -1 ? name : name + ".jpg";
  }

  function pad(num) {
    num = String(num);
    return num.length < 2 ? "0" + num : num;
  }

  function waHref(text) {
    var num = (CONFIG.whatsapp && CONFIG.whatsapp.number) || "";
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(text || "");
  }

  /* ---------- Imagen con slot de respaldo ---------- */

  function media(name, alt) {
    var file = fileName(name);
    return (
      '<span class="media">' +
        '<img src="' + IMG_DIR + file + '" alt="' + esc(alt) + '" loading="lazy" data-file="' + esc(file) + '">' +
        '<span class="img-slot" aria-hidden="true">' +
          '<span class="img-slot__mark">✳</span>' +
          '<span class="img-slot__name">' + esc(file) + "</span>" +
        "</span>" +
      "</span>"
    );
  }

  function markMissing(img) {
    if (img.id === "heroImg") {
      var hero = $("#inicio");
      if (hero) hero.classList.add("is-plain");
      img.style.display = "none";
      return;
    }
    var wrap = img.parentNode;
    if (wrap && wrap.classList && wrap.classList.contains("media")) {
      wrap.classList.add("is-missing");
    } else if (wrap) {
      var slot = document.createElement("span");
      slot.className = "img-slot img-slot--block";
      slot.innerHTML =
        '<span class="img-slot__mark" aria-hidden="true">✳</span>' +
        '<span class="img-slot__name">' + esc(fileName(img.getAttribute("data-file") || "")) + "</span>";
      wrap.replaceChild(slot, img);
    }
  }

  function watchImg(img) {
    var done = false;
    var onErr = function () {
      if (done) return;
      done = true;
      markMissing(img);
    };
    img.addEventListener("error", onErr);
    if (img.complete && img.naturalWidth === 0 && img.src) onErr();
  }

  function attachPics(root) {
    $$("img[data-file]", root || document).forEach(function (img) {
      if (img.getAttribute("data-bound")) return;
      img.setAttribute("data-bound", "1");
      watchImg(img);
    });
  }

  /* ------------------------- BINDEOS DE HTML ------------------------- */

  function bindText() {
    $$("[data-text]").forEach(function (el) {
      var val = getPath(DATA, el.getAttribute("data-text"));
      if (val == null) val = getPath(CONFIG, el.getAttribute("data-text"));
      if (typeof val === "string" && val.length) el.textContent = val;
    });
  }

  function bindHref() {
    $$("[data-href]").forEach(function (el) {
      var url = CONFIG.social && CONFIG.social[el.getAttribute("data-href")];
      if (url && /^(https?:)?\/\//i.test(url)) {
        el.href = url;
        el.target = "_blank";
        el.rel = "noopener";
      }
    });
  }

  function bindPic() {
    $$("[data-pic]").forEach(function (img) {
      var key = img.getAttribute("data-pic");
      var name = (CONFIG.images && CONFIG.images[key]) || key;
      var file = fileName(name);
      img.setAttribute("data-file", file);
      watchImg(img);
      img.src = IMG_DIR + file;
    });
  }

  function bindWhatsApp() {
    var num = CONFIG.whatsapp && CONFIG.whatsapp.number;
    $$("[data-wa]").forEach(function (el) {
      var msg = DATA.wa && DATA.wa[el.getAttribute("data-wa")];
      if (!num) {
        el.classList.add("is-disabled");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("tabindex", "-1");
        return;
      }
      $("html").classList.add("wa-ready");
      el.href = waHref(msg);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ----------------------------- MARQUEE ----------------------------- */

  function renderMarquee() {
    var host = $("#rad-marquee");
    if (!host) return;
    var html = "";
    for (var r = 0; r < 2; r++) {
      (DATA.marquee || []).forEach(function (t) {
        html += '<span class="marquee__item">' + esc(t) + "</span>" +
          '<span class="marquee__dot" aria-hidden="true">·</span>';
      });
    }
    host.innerHTML = html;
  }

  /* --------------------------- ACCESOS HERO --------------------------- */

  function renderAccesos() {
    var host = $("#rad-accesos");
    if (!host) return;
    host.innerHTML = ((DATA.queNecesita && DATA.queNecesita.items) || [])
      .map(function (it) {
        return (
          '<a class="acceso" href="' + esc(it.href || "#consulta-online") + '">' +
            '<span class="acceso__media">' + media(it.img, it.situation) + "</span>" +
            '<span class="acceso__body">' +
              '<span class="acceso__title">' + esc(it.situation) + "</span>" +
              '<span class="acceso__desc">' + esc(it.solution) + "</span>" +
            "</span>" +
          "</a>"
        );
      })
      .join("");
  }

  /* ------------------------- HERO: CÓMO FUNCIONA ------------------------- */

  function renderHeroHow() {
    var host = $("#rad-hero-how");
    if (!host) return;
    var h = DATA.hero && DATA.hero.how;
    if (!h) return;
    host.innerHTML =
      '<h3 class="hero__how-title">' + esc(h.title) + "</h3>" +
      '<ol class="hero__how-list">' +
        (h.steps || [])
          .map(function (s) {
            return (
              "<li>" +
                '<span class="hero__how-n">' + esc(s.n) + "</span>" +
                '<p class="hero__how-text"><strong>' + esc(s.lead) + "</strong>; " + esc(s.text) + "</p>" +
              "</li>"
            );
          })
          .join("") +
      "</ol>" +
      (h.note ? '<p class="hero__how-note">' + esc(h.note) + "</p>" : "");
  }

  /* ------------------------- FRANJA DE SERVICIOS ------------------------- */

  function renderSvcRail() {
    var host = $("#rad-svcrail");
    if (!host) return;
    host.innerHTML = (DATA.services || [])
      .map(function (s) {
        return (
          '<a href="' + esc(s.anchor) + '">' +
            "<span>" + esc(s.num) + "</span>" +
            esc(s.title) +
          "</a>"
        );
      })
      .join("");
  }

  /* ------------------------ MI CASA TIENE UN PROBLEMA ------------------------ */

  function renderNeeds() {
    var host = $("#rad-needs");
    if (!host) return;
    host.innerHTML = (DATA.needs || [])
      .map(function (n, i) {
        var index = pad(i + 1);
        var cls = "need" + (n.wide ? " need--wide" : "");
        return (
          '<li class="' + cls + '" id="need-' + esc(n.id) + '">' +
            '<button type="button" class="need__link" data-need-id="' + esc(n.id) + '">' +
              '<span class="need__index">' + esc(index) + "</span>" +
              '<span class="need__body">' +
                '<span class="need__title">' + esc(n.title) + "</span>" +
                (n.desc ? '<span class="need__desc">' + esc(n.desc) + "</span>" : "") +
              "</span>" +
              '<span class="need__arr" aria-hidden="true">→</span>' +
            "</button>" +
          "</li>"
        );
      })
      .join("");
  }

  function setupNeedPicker() {
    var grid = $("#rad-needs");
    var topicEl = $("#consultTopic");
    if (!grid) return;
    grid.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest("[data-need-id]") : null;
      if (!btn) return;
      var need = (DATA.needs || []).filter(function (n) {
        return n.id === btn.getAttribute("data-need-id");
      })[0];
      if (topicEl) topicEl.textContent = need ? need.title : (DATA.form || {}).defaultTopic;
      var ct = $("#customTopic");
      var ctl = $("#customToggle");
      if (ct) { ct.hidden = true; ct.value = ""; }
      if (ctl) { ctl.setAttribute("aria-expanded", "false"); ctl.classList.remove("is-in"); }
      if (topicEl) topicEl.classList.remove("is-dim");
      $$(".need", grid).forEach(function (li) { li.classList.remove("need--active"); });
      var li = need ? document.getElementById("need-" + need.id) : null;
      if (li) li.classList.add("need--active");
      var consult = document.getElementById("consultar");
      if (consult) consult.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ------------------------------ GALERÍA (7) ------------------------------ */

  function renderGaleria() {
    var host = $("#rad-galeria");
    if (!host) return;
    var slots = ["v1", "a", "b", "c", "v2", "d", "e", "f"];
    host.innerHTML = (DATA.galeria || [])
      .map(function (name, i) {
        var pos = slots[i] || "a";
        var cls = "galeria7__item galeria7__item--" + pos;
        return (
          '<figure class="' + cls + '">' +
            media(name, "Galería " + (i + 1)) +
          "</figure>"
        );
      })
      .join("");
  }

  /* ---------------------------- CONSULTA ONLINE ---------------------------- */

  function renderConsultaOnline() {
    var co = DATA.consultaOnline || {};

    var steps = $("#rad-steps");
    if (steps) {
      steps.innerHTML = (co.steps || [])
        .map(function (s) {
          return (
            "<li>" +
              '<span class="step__num">' + esc(s.n) + "</span>" +
              '<span class="step__body"><strong>' + esc(s.t) + "</strong><em>" + esc(s.d) + "</em></span>" +
            "</li>"
          );
        })
        .join("");
    }

    var topics = $("#rad-topicos");
    if (topics) {
      topics.innerHTML = (co.topics || [])
        .map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; })
        .join("");
    }

    var pics = $("#rad-online-pics");
    if (pics) {
      pics.innerHTML = (co.photos || [])
        .map(function (n) { return '<figure class="online__fig">' + media(n, "Consulta online") + "</figure>"; })
        .join("");
    }

    var informe = $("#rad-informe");
    if (informe && co.informe) {
      var inf = co.informe;
      var rows = [inf.field, inf.motivo, inf.verificar, inf.recomendacion, inf.prioridad, inf.proximo];
      informe.innerHTML = rows
        .filter(Boolean)
        .map(function (label) {
          return '<div class="informe__row"><dt>' + esc(label) + "</dt><dd></dd></div>";
        })
        .join("");
    }
  }

  /* ---------------------------- REMODELACIONES ---------------------------- */

  function renderRemodel() {
    var list = $("#rad-consultas");
    if (list) {
      list.innerHTML = ((DATA.remodelaciones && DATA.remodelaciones.consultas) || [])
        .map(function (t) { return "<li>" + esc(t) + "</li>"; })
        .join("");
    }

    var host = $("#rad-cards");
    if (!host) return;
    host.innerHTML = ((DATA.remodelaciones && DATA.remodelaciones.cards) || [])
      .map(function (c, i) {
        var cls = "cmp-card" + (i % 2 ? " cmp-card--accent" : "");
        var items = (c.items || [])
          .map(function (item) { return "<li>" + esc(item) + "</li>"; })
          .join("");
        return (
          '<article class="' + cls + '">' +
            '<h3 class="cmp-card__name">' + esc(c.name) + "</h3>" +
            '<ul class="cmp-card__list">' + items + "</ul>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ------------------------------- INSPIRACIÓN ------------------------------- */

  function renderInspiracion() {
    var host = $("#rad-inspi");
    if (!host) return;
    host.innerHTML = ((DATA.inspiracion && DATA.inspiracion.cases) || [])
      .map(function (c, i) {
        var num = ("0" + (i + 1)).slice(-2);
        var altA = [c.name, c.labelA].filter(function (x) { return x; }).join(" — ");
        var altB = [c.name, c.labelB].filter(function (x) { return x; }).join(" — ");
        return (
          '<article class="inspi-card">' +
            '<span class="inspi-num">' + num + "</span>" +
            '<div class="inspi-pair">' +
              '<figure class="inspi-fig">' + media(c.imgA, altA) +
                "<figcaption>" + esc(c.labelA) + "</figcaption></figure>" +
              '<figure class="inspi-fig">' + media(c.imgB, altB) +
                "<figcaption>" + esc(c.labelB) + "</figcaption></figure>" +
            "</div>" +
            '<div class="inspi-body">' +
              (c.name ? '<h4 class="inspi-name">' + esc(c.name) + "</h4>" : "") +
              (c.tag ? '<p class="inspi-tag">' + esc(c.tag) + "</p>" : "") +
            "</div>" +
          "</article>"
        );
      })
      .join("");
    wireMediaLightbox(host);
  }

  /* --------------------------- DISEÑO DE INTERIORES --------------------------- */

  function renderInteriores() {
    var photos = $("#rad-interiores");
    if (photos) {
      photos.innerHTML = ((DATA.disenoInteriores && DATA.disenoInteriores.photos) || [])
        .map(function (n) { return '<figure class="di-fig">' + media(n, "Diseño de interiores") + "</figure>"; })
        .join("");
    }

    var topics = $("#rad-topicos-di");
    if (topics) {
      topics.innerHTML = ((DATA.disenoInteriores && DATA.disenoInteriores.topics) || [])
        .map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; })
        .join("");
    }
  }

  /* ------------------------------ BIENESTAR ------------------------------ */

  function renderBienestar() {
    var concepts = (DATA.bienestar && DATA.bienestar.concepts) || [];

    var pics = $("#rad-confort-pics");
    if (pics) {
      pics.innerHTML = concepts
        .map(function (c) {
          return (
            '<figure class="conf-fig">' +
              media(c.img, c.t) +
              '<figcaption><strong class="conf-fig__t">' + esc(c.t) + "</strong>" +
              (c.d ? '<span class="conf-fig__d">' + esc(c.d) + "</span>" : "") +
              "</figcaption>" +
            "</figure>"
          );
        })
        .join("");
    }
    wireMediaLightbox(pics);
  }

  /* ------------------------------ COMPRAR ------------------------------ */

  function renderComprar() {
    var host = $("#rad-checks");
    if (!host) return;
    host.innerHTML = ((DATA.comprar && DATA.comprar.checks) || [])
      .map(function (t) { return "<li>" + esc(t) + "</li>"; })
      .join("");
  }

  /* --------------------------- FORM A WHATSAPP --------------------------- */

  function renderForm() {
    var host = $("#rad-form");
    if (!host) return;
    var f = DATA.form || {};

    host.innerHTML =
      '<div class="consult__head">' +
        '<span class="section__eyebrow">' + esc(f.eyebrow) + "</span>" +
        '<h3 class="consult__title">' + esc(f.title) + "</h3>" +
        '<p class="consult__intro">' + esc(f.intro) + "</p>" +
      "</div>" +
      '<form class="consult__card" id="consultForm" novalidate>' +
        '<div class="consult__field">' +
          '<span class="consult__label">' + esc(f.topicLabel) + "</span>" +
          '<strong class="consult__topic" id="consultTopic">' + esc(f.defaultTopic) + "</strong>" +
          '<button type="button" class="custom-toggle" id="customToggle" aria-expanded="false">' +
            esc(f.customToggle) + ' <span aria-hidden="true">↓</span></button>' +
          '<input type="text" id="customTopic" class="consult__input consult__input--ghost" aria-label="' +
            esc(f.topicLabel) + '" placeholder="' + esc(f.customPlaceholder) + '" hidden>' +
        "</div>" +
        '<fieldset class="consult__field">' +
          '<legend class="consult__label">' + esc(f.filesLabel) + "</legend>" +
          '<div class="file-row">' +
            '<label class="btn btn--ghost btn--sm" for="consultFiles">+ ' + esc(f.filesBtn) + "</label>" +
            '<input type="file" id="consultFiles" multiple accept="image/*,video/*,application/pdf,.dwg,.dxf" hidden>' +
            '<span class="file-hint" id="fileHint">' + esc(f.filesHint) + "</span>" +
          "</div>" +
          '<ul class="file-list" id="fileList" hidden></ul>' +
        "</fieldset>" +
        '<div class="consult__field">' +
          '<label class="consult__label" for="consultMsg">' + esc(f.msgLabel) + "</label>" +
          '<textarea id="consultMsg" name="consulta" rows="4" placeholder="' + esc(f.msgPlaceholder) + '"></textarea>' +
        "</div>" +
        '<div class="consult__field">' +
          '<label class="consult__label" for="consultName">' + esc(f.nameLabel) + "</label>" +
          '<input id="consultName" name="nombre" type="text" maxlength="60" placeholder="' +
            esc(f.namePlaceholder) + '" autocomplete="name">' +
        "</div>" +
        '<div class="consult__actions">' +
          '<div class="consult__send">' +
            '<button type="submit" class="btn btn--accent btn--lg">' + esc(f.submit) +
              ' <span class="btn__arr" aria-hidden="true">→</span></button>' +
            '<div class="response response--form" data-response></div>' +
          "</div>" +
          '<p class="consult__note">' + esc(f.note) + "</p>" +
        "</div>" +
        '<p class="consult__feedback" id="consultFeedback" hidden></p>' +
      "</form>";
  }

  function setupForm() {
    var form = $("#consultForm");
    if (!form) return;

    var files = [];
    var customToggle = $("#customToggle");
    var customTopic = $("#customTopic");
    var consultTopic = $("#consultTopic");

    if (customToggle && customTopic) {
      customToggle.addEventListener("click", function () {
        var open = customTopic.hidden;
        customTopic.hidden = !open;
        customToggle.setAttribute("aria-expanded", String(open));
        if (open) {
          customTopic.focus();
          customToggle.classList.add("is-in");
        } else {
          customToggle.classList.remove("is-in");
        }
      });
      customTopic.addEventListener("input", function () {
        consultTopic.classList.toggle("is-dim", !!customTopic.value.trim());
      });
    }

    var input = $("#consultFiles");
    var fileList = $("#fileList");
    var fileHint = $("#fileHint");
    if (input && fileList) {
      input.addEventListener("change", function () {
        files = Array.prototype.slice.call(input.files || []);
        fileList.hidden = files.length === 0;
        fileHint.textContent = files.length
          ? files.length + " " + DATA.form.filesCount
          : DATA.form.filesHint;
        fileList.innerHTML = files
          .map(function (file, i) {
            var kb = Math.round(file.size / 1024);
            return (
              "<li>" +
                '<span class="file-list__name">' + esc(file.name) + "</span>" +
                '<span class="file-list__size">' + kb + " KB</span>" +
                '<button type="button" class="file-list__remove" data-i="' + i +
                  '" aria-label="Quitar ' + esc(file.name) + '">×</button>' +
              "</li>"
            );
          })
          .join("");
      });

      fileList.addEventListener("click", function (e) {
        var btn = e.target.closest ? e.target.closest(".file-list__remove") : null;
        if (!btn) return;
        files.splice(Number(btn.getAttribute("data-i")), 1);
        if (typeof DataTransfer !== "undefined") {
          var dt = new DataTransfer();
          files.forEach(function (f) { dt.items.add(f); });
          input.files = dt.files;
        } else {
          input.value = "";
        }
        input.dispatchEvent(new Event("change"));
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var topic = consultTopic.textContent || DATA.form.defaultTopic;
      if (customTopic && !customTopic.hidden && customTopic.value.trim()) {
        topic = customTopic.value.trim();
      }
      var msg = ($("#consultMsg") || {}).value || "";
      var name = ($("#consultName") || {}).value || "";

      var parts = ["Hola Valeria, te escribo desde tu web."];
      parts.push("Tema: " + topic.trim());
      if (msg.trim()) parts.push("Mi casa: " + msg.trim());
      if (files.length) {
        var names = files.slice(0, 5).map(function (f) { return f.name; });
        if (files.length > 5) names.push("y " + (files.length - 5) + " más");
        parts.push("Archivos a adjuntar: " + names.join(", ") + ".");
      }
      if (name.trim()) parts.push("Me llamo " + name.trim() + ".");
      var text = parts.filter(Boolean).join("\n\n");

      var num = CONFIG.whatsapp && CONFIG.whatsapp.number;
      var fb = $("#consultFeedback");
      if (!num) {
        if (fb) {
          fb.textContent = DATA.form.feedbackNoNumber;
          fb.hidden = false;
        }
        return;
      }
      if (fb) fb.hidden = true;
      window.open(waHref(text), "_blank");
    });
  }

  /* --------------------------- RESPUESTA (bloque repetido) --------------------------- */

  function renderResponse() {
    var r = DATA.response || {};
    $$("[data-response]").forEach(function (el) {
      el.innerHTML =
        '<p class="response__title">' + esc(r.title) + "</p>" +
        '<p class="response__text">' + esc(r.text) + "</p>" +
        (r.time ? '<p class="response__time">' + esc(r.time) + "</p>" : "");
    });
  }

  /* ------------------------------- PROYECTOS ------------------------------- */

  function renderProjects() {
    var host = $("#rad-projects");
    if (!host) return;
    host.innerHTML = (DATA.projectsList || [])
      .map(function (p) {
        var extras = (p.imgs || [])
          .map(function (n) { return '<figure class="p-card__extra">' + media(n, p.name) + "</figure>"; })
          .join("");
        var extrasRow = extras ? '<div class="p-card__extras">' + extras + "</div>" : "";
        var meta = p.type ? '<p class="p-card__meta">' + esc(p.type) + "</p>" : "";
        var num = (p.code || "").replace(/\D+/g, "");
        return (
          '<article class="p-card">' +
            '<figure class="p-card__media" role="button" tabindex="0" aria-haspopup="dialog" aria-label="Ver detalle del proyecto" aria-expanded="false">' + media(p.img, p.name) +
              (num ? '<span class="p-card__num">' + esc(num) + "</span>" : "") +
            "</figure>" +
            '<div class="p-card__body">' +
              '<p class="p-card__code">' + esc(p.code) + "</p>" +
              '<h3 class="p-card__name">' + esc(p.name) + "</h3>" +
              meta +
              '<p class="p-card__desc">' + esc(p.desc) + "</p>" +
              extrasRow +
            "</div>" +
          "</article>"
        );
      })
      .join("");
    if (!host.getAttribute("data-lb")) {
      host.setAttribute("data-lb", "1");
      host.addEventListener("click", function (ev) {
        var fig = ev.target.closest && ev.target.closest(".p-card__media");
        if (!fig) return;
        var card = fig.closest(".p-card");
        var idx = Array.prototype.indexOf.call(host.children, card);
        var p = (DATA.projectsList || [])[idx];
        if (p) openLightbox(p);
      });
      host.addEventListener("keydown", function (ev) {
        if ((ev.key === "Enter" || ev.key === " ") && ev.target.classList.contains("p-card__media")) {
          ev.preventDefault();
          ev.target.click();
        }
      });
    }
  }

  function openLightbox(p) {
    var lb = $("#lightbox");
    if (lb && !lb.getAttribute("data-bound")) {
      lb.setAttribute("data-bound", "1");
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.addEventListener("click", function (ev) {
        if (ev.target === lb || ev.target.closest(".lightbox__close")) closeLightbox();
      });
      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape" && lb.classList.contains("is-open")) closeLightbox();
      });
    }
    if (!lb) {
      lb = document.createElement("div");
      lb.className = "lightbox";
      lb.id = "lightbox";
      document.body.appendChild(lb);
      openLightbox(p);
      return;
    }
    lb.setAttribute("aria-label", p.name || "Proyecto");
    lb.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Cerrar">×</button>' +
      '<figure class="lightbox__card">' +
        (p.code ? '<p class="lightbox__code">' + esc(p.code) + "</p>" : "") +
        '<span class="lightbox__media">' + media(p.img, p.name) + "</span>" +
        "<figcaption>" +
          (p.name ? '<h3 class="lightbox__name">' + esc(p.name) + "</h3>" : "") +
          (p.desc ? '<p class="lightbox__desc">' + esc(p.desc) + "</p>" : "") +
        "</figcaption>" +
      "</figure>";
    document.body.classList.add("no-scroll");
    attachPics(lb);
    requestAnimationFrame(function () { lb.classList.add("is-open"); });
  }

  function closeLightbox() {
    var lb = $("#lightbox");
    if (!lb) return;
    lb.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }

  function wireMediaLightbox(host) {
    if (!host || host.getAttribute("data-lb")) return;
    host.setAttribute("data-lb", "1");
    host.addEventListener("click", function (ev) {
      var mediaEl = ev.target.closest && ev.target.closest(".media");
      if (!mediaEl) return;
      var img = mediaEl.querySelector("img");
      if (img && img.getAttribute("src")) {
        openMediaLightbox(img.getAttribute("src"), img.getAttribute("alt") || "");
      }
    });
  }

  function openMediaLightbox(src, alt) {
    var lb = $("#media-lightbox");
    if (!lb) return;
    var img = lb.querySelector(".media-lightbox__img");
    var cap = lb.querySelector(".media-lightbox__alt");
    if (img) { img.src = src; img.alt = alt || ""; }
    if (cap) cap.textContent = alt || "";
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    requestAnimationFrame(function () { lb.classList.add("is-open"); });
  }

  function closeMediaLightbox() {
    var lb = $("#media-lightbox");
    if (!lb) return;
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  function setupMediaLightbox() {
    var lb = $("#media-lightbox");
    if (!lb) return;
    lb.addEventListener("click", function (ev) {
      if (ev.target === lb || ev.target.closest(".lightbox__close")) closeMediaLightbox();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && lb.classList.contains("is-open")) closeMediaLightbox();
    });
  }

  /* ------------------------------- SOBRE ------------------------------- */

  function renderInspiCta() {
    var host = $("#rad-inspi-cta");
    if (!host) return;

    if (host.querySelector(".inspi-cta__note") || host.querySelector(".inspi-cta__notes")) {
      return;
    }

    var rm = DATA.remodelaciones || {};
    var paragraphs = (rm.note || "")
      .split(/\n+/)
      .filter(function (s) { return s.trim(); })
      .map(function (p) { return '<p class="inspi-cta__note">' + esc(p) + "</p>"; })
      .join("");
    host.innerHTML =
      '<div class="inspi-cta__pair">' +
        '<a class="btn btn--accent btn--lg" data-wa="remodelaciones">' +
          esc(rm.cta || "Empezar por una consulta") +
          ' <span class="btn__arr" aria-hidden="true">→</span>' +
        "</a>" +
        '<div class="inspi-cta__notes">' + paragraphs + "</div>" +
      "</div>" +
      '<div class="response" data-response></div>';
  }

  function renderAbout() {
    var host = $("#rad-how");
    if (!host) return;
    host.innerHTML = ((DATA.about && DATA.about.how) || [])
      .map(function (h) {
        return (
          "<li>" +
            "<strong>" + esc(h.t) + "</strong>" +
            "<em>" + esc(h.d) + "</em>" +
          "</li>"
        );
      })
      .join("");
  }

  /* ------------------------------- FOOTER ------------------------------- */

  function renderFooterNav() {
    var host = $("#rad-footer-nav");
    if (!host) return;
    host.innerHTML = ((DATA.footer && DATA.footer.nav) || [])
      .map(function (n) {
        return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + "</a></li>";
      })
      .join("");
  }

  function renderFooterYear() {
    var el = $("#footerYear");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------- REVEAL ------------------------------- */

  function setupReveal() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var targets = $$(
      ".section__head, .hero__inner, .accesos, .hero__band, " +
      ".online__steps, .tools, .recibe, .online__cta, .consult, .consultas, .what-block, " +
      ".cmp-grid, .inspi-grid, .inspi-cta, .di-row, .conf-photos, .pre__row, .projects-grid, .about, " +
      ".ig, .final__actions, .response, .deliver, .needs-grid, .galeria7, .online__photos, .hero__how"
    );
    targets.forEach(function (el) { el.classList.add("r"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------- HEADER / MENÚ ------------------------------- */

  function setupHeader() {
    var header = $("#siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupMenu() {
    var overlay = $("#menuOverlay");
    var toggle = $("#menuToggle");
    var close = $("#menuClose");
    if (!overlay || !toggle) return;

    function setOpen(open) {
      overlay.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("no-scroll", open);
      if (open && close) close.focus();
    }

    toggle.addEventListener("click", function () { setOpen(true); });
    if (close) close.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !overlay.hidden) setOpen(false);
    });
    $$("a", overlay).forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  /* ------------------------------- PARALLAX ------------------------------- */

  function setupParallax() {
    var img = $("#heroImg");
    if (!img) return;
    var fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    var ticking = false;
    function update() {
      var y = Math.min(window.scrollY, 900) * 0.18;
      img.style.transform = "translate3d(0, " + y + "px, 0) scale(1.06)";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      },
      { passive: true }
    );
  }

  /* ------------------------------- INIT ------------------------------- */

  function init() {
    renderMarquee();
    renderHeroHow();
    renderSvcRail();
    renderAccesos();
    renderNeeds();
    renderGaleria();
    renderConsultaOnline();
    renderRemodel();
    renderInspiracion();
    renderInspiCta();
    renderInteriores();
    renderBienestar();
    renderComprar();
    renderProjects();
    renderAbout();
    renderFooterNav();
    renderFooterYear();

    bindText();
    bindHref();
    bindPic();
    bindWhatsApp();

    renderForm();
    setupForm();
    setupNeedPicker();
    renderResponse();

    attachPics(document);

    setupReveal();
    setupHeader();
    setupMenu();
    setupParallax();
    setupMediaLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
