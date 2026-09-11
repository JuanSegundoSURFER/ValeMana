/* ============================================================
   VALEMANA · VALERIA MARTÍN — INTERACCIÓN
   ------------------------------------------------------------
   No tocar esta lógica salvo para agregar funcionalidad.
   Todo el contenido editable vive en js/content.js y js/config.js.
   ============================================================ */

(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};
  var DATA = window.SITE_CONTENT || {};

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

  function waHref(text) {
    var num = CONFIG.whatsapp && CONFIG.whatsapp.number ? CONFIG.whatsapp.number : "";
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(text || "");
  }

  /* ------------------------- BINDEOS DE HTML ------------------------- */

  function bindText() {
    $$("[data-text]").forEach(function (el) {
      var val = getPath(DATA, el.getAttribute("data-text"));
      if (val == null) val = getPath(CONFIG, el.getAttribute("data-text"));
      if (typeof val === "string" && val.length) el.textContent = val;
    });
  }

  function bindMail() {
    $$("[data-mail]").forEach(function (el) {
      var val = getPath(CONFIG, el.getAttribute("data-mail"));
      if (val) el.href = "mailto:" + val;
    });
  }

  function bindHref() {
    $$("[data-href]").forEach(function (el) {
      var key = el.getAttribute("data-href");
      var url = CONFIG.social && CONFIG.social[key];
      if (url) {
        el.href = url;
        el.target = "_blank";
        el.rel = "noopener";
      }
    });
  }

  function bindPic() {
    $$("[data-pic]").forEach(function (el) {
      var key = el.getAttribute("data-pic");
      var src = CONFIG.images && CONFIG.images[key];
      if (!src) {
        if (el.tagName === "IMG") {
          el.remove();
        } else {
          el.classList.add("p-slot");
        }
        return;
      }
      if (el.tagName === "IMG") {
        el.src = src;
      } else {
        var mark = $(".p-slot__mark", el);
        if (mark) mark.remove();
        el.classList.remove("p-slot");
        el.style.backgroundImage = "url('" + src + "')";
      }
    });
    if (!$("#heroImg")) {
      var hero = $("#inicio");
      if (hero) hero.classList.add("is-plain");
    }
  }

  function bindWhatsApp() {
    $$("[data-wa]").forEach(function (el) {
      var key = el.getAttribute("data-wa");
      var msg = DATA.wa && DATA.wa[key];
      var num = CONFIG.whatsapp && CONFIG.whatsapp.number;
      if (!num) {
        el.classList.add("is-disabled");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("tabindex", "-1");
        if ($("html")) $("html").classList.remove("wa-ready");
        return;
      }
      if (msg) el.href = waHref(msg);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
      if ($("html")) $("html").classList.add("wa-ready");
    });
  }

  /* ----------------------------- MARQUEE ----------------------------- */

  function renderMarquee() {
    var host = $("#rad-marquee");
    if (!host) return;
    var items = DATA.marquee || [];
    var html = "";
    for (var r = 0; r < 2; r++) {
      items.forEach(function (t) {
        html += '<span class="marquee__item">' + t + '</span><span class="marquee__dot" aria-hidden="true">·</span>';
      });
    }
    host.innerHTML = html;
  }

  /* --------------------- QUIERO MEJORAR MI CASA ---------------------- */

  function renderNeeds() {
    var host = $("#rad-needs");
    if (!host) return;
    host.innerHTML = (DATA.needs || [])
      .map(function (n, i) {
        var index = String(i + 1).padStart(2, "0");
        return (
          '<li class="need' + (n.wide ? " need--wide" : "") + '" id="need-' + n.id + '">' +
            '<button type="button" class="need__link" data-need-id="' + n.id + '">' +
              '<span class="need__index">' + index + "</span>" +
              "<span class=\"need__body\">" +
                '<span class="need__title">' + n.title + "</span>" +
                (n.desc ? '<span class="need__desc">' + n.desc + "</span>" : "") +
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
      var need = (DATA.needs || []).filter(function (n) { return n.id === btn.getAttribute("data-need-id"); })[0];
      if (topicEl) topicEl.textContent = need ? need.title : DATA.form.defaultTopic;
      var ct = $("#customTopic");
      var ctl = $("#customToggle");
      if (ct) { ct.hidden = true; ct.value = ""; }
      if (ctl) { ctl.setAttribute("aria-expanded", "false"); ctl.classList.remove("is-in"); }
      if (topicEl) topicEl.classList.remove("is-dim");
      $$(".need", grid).forEach(function (li) { li.classList.remove("need--active"); });
      var li = document.getElementById("need-" + (need ? need.id : ""));
      if (li) li.classList.add("need--active");
      var consult = document.getElementById("consultar");
      if (consult) consult.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* --------------------------- FORM A WHATSAPP --------------------------- */

  function renderForm() {
    var host = $("#rad-form");
    if (!host) return;
    var f = DATA.form || {};

    host.innerHTML =
      '<div class="consult__head">' +
        '<span class="section__eyebrow">' + f.eyebrow + "</span>" +
        '<h3 class="consult__title">' + f.title + "</h3>" +
        '<p class="consult__intro">' + f.intro + "</p>" +
      "</div>" +
      '<form class="consult__card" id="consultForm" novalidate>' +
        '<div class="consult__field">' +
          '<span class="consult__label">' + f.topicLabel + "</span>" +
          '<strong class="consult__topic" id="consultTopic">' + f.defaultTopic + "</strong>" +
          '<button type="button" class="custom-toggle" id="customToggle" aria-expanded="false">' + f.customToggle + ' <span aria-hidden="true">↓</span></button>' +
          '<input type="text" id="customTopic" class="consult__input consult__input--ghost" aria-label="' + f.topicLabel + '" placeholder="' + f.customPlaceholder + '" hidden>' +
        "</div>" +
        '<fieldset class="consult__field">' +
          '<legend class="consult__label">' + f.filesLabel + "</legend>" +
          '<div class="file-row">' +
            '<label class="btn btn--ghost btn--sm" for="consultFiles">+ ' + f.filesBtn + "</label>" +
            '<input type="file" id="consultFiles" multiple accept="image/*,video/*,application/pdf,.dwg,.dxf" hidden>' +
            '<span class="file-hint" id="fileHint">' + f.filesHint + "</span>" +
          "</div>" +
          '<ul class="file-list" id="fileList" hidden></ul>' +
        "</fieldset>" +
        '<div class="consult__field">' +
          '<label class="consult__label" for="consultMsg">' + f.msgLabel + "</label>" +
          '<textarea id="consultMsg" name="consulta" rows="4" placeholder="' + f.msgPlaceholder + '"></textarea>' +
        "</div>" +
        '<div class="consult__field">' +
          '<label class="consult__label" for="consultName">' + f.nameLabel + "</label>" +
          '<input id="consultName" name="nombre" type="text" maxlength="60" placeholder="' + f.namePlaceholder + '" autocomplete="name">' +
        "</div>" +
        '<div class="consult__actions">' +
          '<button type="submit" class="btn btn--accent btn--lg">' + f.submit + ' <span class="btn__arr" aria-hidden="true">→</span></button>' +
          '<p class="consult__note">' + f.note + "</p>" +
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
        if (customTopic.value.trim()) consultTopic.classList.add("is-dim");
        else consultTopic.classList.remove("is-dim");
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
              '<li>' +
                "<span class=\"file-list__name\">" + file.name + "</span>" +
                "<span class=\"file-list__size\">" + kb + " KB</span>" +
                '<button type="button" class="file-list__remove" data-i="' + i + '" aria-label="Quitar ' + file.name + '">×</button>' +
              "</li>"
            );
          })
          .join("");
      });

      fileList.addEventListener("click", function (e) {
        var btn = e.target.closest ? e.target.closest(".file-list__remove") : null;
        if (!btn) return;
        files.splice(Number(btn.getAttribute("data-i")), 1);
        var dt = new DataTransfer();
        files.forEach(function (f) { dt.items.add(f); });
        input.files = dt.files;
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

  /* ------------------------- FRANJA DE SERVICIOS ------------------------- */

  function renderSvcRail() {
    var host = $("#rad-svcrail");
    if (!host) return;
    host.innerHTML = (DATA.services || [])
      .map(function (s) {
        return (
          '<a href="' + s.anchor + '">' +
            "<span>" + s.num + "</span>" +
            s.title +
          "</a>"
        );
      })
      .join("");
  }

  /* ------------------------------ SERVICIOS ------------------------------ */

  function renderServices() {
    var host = $("#rad-services");
    if (!host) return;
    host.innerHTML = (DATA.services || [])
      .map(function (s) {
        return (
          '<li class="svc" data-service-id="' + s.id + '">' +
            '<a class="svc__link" href="' + s.anchor + '">' +
              '<span class="svc__index">' + s.num + "</span>" +
              '<span class="svc__name">' + s.title + "</span>" +
              '<span class="svc__arrow" aria-hidden="true">→</span>' +
            "</a>" +
            '<p class="svc__desc">' + s.desc + "</p>" +
          "</li>"
        );
      })
      .join("");
  }

  /* --------------------------- ASESORAMIENTO ONLINE --------------------------- */

  function renderOnline() {
    var stepsHost = $("#rad-steps");
    if (stepsHost) {
      stepsHost.innerHTML = (DATA.online.steps || [])
        .map(function (s) {
          return (
            "<li>" +
              '<span class="step__num">' + s.n + "</span>" +
              '<span class="step__body"><strong>' + s.t + "</strong><em>" + s.d + "</em></span>" +
            "</li>"
          );
        })
        .join("");
    }

    var topicsHost = $("#rad-topics");
    if (topicsHost) {
      topicsHost.innerHTML = (DATA.online.topics || [])
        .map(function (t) { return '<span class="chip">' + t + "</span>"; })
        .join("");
    }

    var informeHost = $("#rad-informe");
    if (informeHost) {
      var inf = DATA.online.informe || {};
      var rows = [
        ["field", inf.field],
        ["motivo", inf.motivo],
        ["verificar", inf.verificar],
        ["recomendacion", inf.recomendacion],
        ["prioridad", inf.prioridad],
        ["proximo", inf.proximo],
      ];
      var vals = ["", "", "", "", "", ""];
      rows.forEach(function (r, i) {
        if (!r[1]) return;
        informeHost.innerHTML +=
          '<div class="informe__row">' +
            '<dt>' + r[1] + "</dt>" +
            '<dd class="is-ph" data-ph="' + r[0] + '">' + vals[i] + "</dd>" +
          "</div>";
      });
    }
  }

  /* ------------------------------- REMODEL ------------------------------- */

  function renderRemodel() {
    var ex = $("#rad-examples");
    if (ex) {
      ex.innerHTML = (DATA.remodel.examples || [])
        .map(function (t) { return "<li><span aria-hidden=\"true\">+</span>" + t + "</li>"; })
        .join("");
    }

    var cmp = $("#rad-compare");
    if (cmp) {
      cmp.innerHTML = (DATA.remodel.compare || [])
        .map(function (c) {
          var items = (c.items || []).map(function (i) { return "<li>" + i + "</li>"; }).join("");
          return (
            '<div class="cmp-card cmp-card--' + (c.n === "02" ? "accent" : "plain") + '">' +
              '<span class="cmp-card__num">' + c.n + "</span>" +
              '<h3 class="cmp-card__name">' + c.name + "</h3>" +
              '<p class="cmp-card__desc">' + c.desc + "</p>" +
              '<ul class="cmp-card__list">' + items + "</ul>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  /* ------------------------------- INTERIORES ------------------------------- */

  function renderInteriors() {
    var host = $("#rad-chips");
    if (!host) return;
    host.innerHTML = (DATA.interiors.chips || [])
      .map(function (t) { return '<span class="chip">' + t + "</span>"; })
      .join("");
  }

  /* ------------------------------- BIENESTAR ------------------------------- */

  function renderWellness() {
    var host = $("#rad-concepts");
    if (!host) return;
    host.innerHTML = (DATA.wellness.concepts || [])
      .map(function (c) {
        return "<li><strong>" + c.t + "</strong><span>" + c.d + "</span></li>";
      })
      .join("");
  }

  /* ------------------------------- ANTES DE COMPRAR ------------------------------- */

  function renderPrePurchase() {
    var host = $("#rad-checks");
    if (!host) return;
    host.innerHTML = (DATA.prePurchase.checks || [])
      .map(function (t) { return '<li><span aria-hidden="true">✓</span>' + t + "</li>"; })
      .join("");
  }

  /* ------------------------------- PROYECTOS ------------------------------- */

  function renderProjects() {
    var host = $("#rad-projects");
    if (!host) return;
    var pics = CONFIG.images || {};
    host.innerHTML = (DATA.projectPlaceholders || [])
      .map(function (p) {
        var img = pics[p.img] || "";
        var media = img
          ? '<img src="' + img + '" alt="' + p.name + '" loading="lazy">'
          : '<span class="p-slot__mark" aria-hidden="true">✳</span>';
        return (
          '<article class="p-card' + (p.wide ? " p-card--wide" : "") + '">' +
            '<figure class="p-card__media' + (img ? "" : " p-slot") + '">' + media + "</figure>" +
            '<div class="p-card__body">' +
              '<h3 class="p-card__name">' + p.name + "</h3>" +
              '<p class="p-card__meta">' + p.type + " · " + p.year + "</p>" +
              '<p class="p-card__desc">' + p.desc + "</p>" +
            "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ------------------------------- SOBRE ------------------------------- */

  function renderAbout() {
    var host = $("#rad-how");
    if (!host) return;
    host.innerHTML = (DATA.about.how || [])
      .map(function (h) {
        return "<li><span>" + h.n + "</span><strong>" + h.t + "</strong><em>" + h.d + "</em></li>";
      })
      .join("");
  }

  /* ------------------------------- FOOTER ------------------------------- */

  function renderFooterNav() {
    var host = $("#rad-footer-nav");
    if (!host) return;
    host.innerHTML = (DATA.footer.nav || [])
      .map(function (n) { return '<li><a href="' + n.href + '">' + n.label + "</a></li>"; })
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
      ".section__head, .hero__inner, .needs-grid, .svc-list, .consult, .online__steps, " +
      ".online__tools, .remodel__examples, .cmp-grid, .mood-grid, .concept-grid, " +
      ".wellness-quote, .pre__row, .projects-grid, .about, .final__actions"
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

  /* ------------------------------- HEADER ------------------------------- */

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
      if (open) close.focus();
    }

    toggle.addEventListener("click", function () { setOpen(true); });
    close.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
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
    renderNeeds();
    renderServices();
    renderSvcRail();
    renderOnline();
    renderRemodel();
    renderInteriors();
    renderWellness();
    renderPrePurchase();
    renderProjects();
    renderAbout();
    renderFooterNav();
    renderFooterYear();

    bindText();
    bindMail();
    bindHref();
    bindPic();
    bindWhatsApp();

    renderForm();
    setupForm();
    setupNeedPicker();

    setupReveal();
    setupHeader();
    setupMenu();
    setupParallax();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();