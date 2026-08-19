/* ==========================================================================
   app.js — renderiza el contenido de datos.js / datos.en.js y maneja la
   interacción. Sin dependencias externas.
   ========================================================================== */
(function () {
  "use strict";

  var IDIOMAS = { es: typeof DATOS_ES !== "undefined" ? DATOS_ES : null,
                  en: typeof DATOS_EN !== "undefined" ? DATOS_EN : null };

  if (!IDIOMAS.es) { console.error("Falta datos.js"); return; }

  var lang = "es";
  var D = IDIOMAS.es;          // contenido activo
  var io = null;               // IntersectionObserver
  var revealListo = false;
  var filtroIA = 0, filtroPub = 0;   // índices, para no perderlos al cambiar idioma

  var el = function (id) { return document.getElementById(id); };

  /* Escapa texto plano. Los campos con etiquetas HTML son contenido propio
     de datos*.js y se inyectan a propósito sin escapar. */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var ICON = {
    mail:    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3.5 6.5 8.5 6 8.5-6"/></svg>',
    link:    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 10.5a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.4-1.4"/><path d="M10.5 13.5a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.4 1.4"/></svg>',
    pin:     '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.5s7-6.2 7-11.5a7 7 0 1 0-14 0c0 5.3 7 11.5 7 11.5z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    tel:     '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.4 3.5h3l1.5 3.8-2 1.4a12.5 12.5 0 0 0 6.4 6.4l1.4-2 3.8 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.4 5.7a2 2 0 0 1 2-2.2z"/></svg>',
    github:  '<svg viewBox="0 0 24 24" class="ico-fill" aria-hidden="true"><path d="M12 .5C5.7.5.6 5.6.6 12a11.4 11.4 0 0 0 7.8 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.2-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.4 11.4 0 0 0 23.4 12C23.4 5.6 18.3.5 12 .5z"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" class="ico-fill" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zM9.5 9.5h3.8v1.5h.06c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.77 2.5 4.77 5.76v5.7h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.31-2.02 2.66v5.14h-4v-11z"/></svg>',
    orcid:   '<svg viewBox="0 0 24 24" class="ico-fill" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 18.2H5.62V7.35h1.75V18.2zM6.5 6.19a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1zm5.06 12.01H9.8V7.35h3.86c3.68 0 5.3 2.63 5.3 5.43 0 3.04-2.38 5.42-5.4 5.42h-2zm.13-1.6h1.73c2.47 0 3.79-1.5 3.79-3.82 0-2.13-1.35-3.83-3.85-3.83h-1.67v7.65z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" class="ico-fill" aria-hidden="true"><path d="M12 1.5 0 8.02l3.2 1.74V16l8.8 4.78L20.8 16V9.76L24 8.02 12 1.5zm6.9 13.42L12 18.67l-6.9-3.75v-4.28L12 14.4l6.9-3.76v4.28z"/></svg>',
    repo:    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8zM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2z"/></svg>',
    star:    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/></svg>',
    ext:     '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
    /* iconos de la sección Colaboremos */
    sim:     '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="3.2"/><ellipse cx="12" cy="12" rx="10" ry="4.4"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)"/></svg>',
    datos:   '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20.5h18"/><rect x="4" y="12" width="3.6" height="6"/><rect x="10.2" y="7" width="3.6" height="11"/><rect x="16.4" y="3.5" width="3.6" height="14.5"/></svg>',
    codigo:  '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m8.5 7.5-5 4.5 5 4.5M15.5 7.5l5 4.5-5 4.5"/></svg>',
    ensenar: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 1.8 8.4 12 13.3l10.2-4.9z"/><path d="M5.6 10.6v5.1c0 1.6 2.9 3 6.4 3s6.4-1.4 6.4-3v-5.1"/><path d="M21.4 9v5.6"/></svg>'
  };

  /* Alias: en datos*.js los tipos se llaman "email" y "lugar", pero los iconos
     están bajo "mail" y "pin". Sin esto caían al icono genérico de enlace. */
  ICON.email = ICON.mail;
  ICON.lugar = ICON.pin;

  var LANG_COLORS = {
    "Python": "#3572A5", "Jupyter Notebook": "#DA5B0B", "HTML": "#e34c26",
    "Markdown": "#083fa1", "Fortran": "#4d41b1", "JavaScript": "#f1e05a"
  };

  /* ================================================== ENCABEZADOS Y NAV */
  function renderChrome() {
    var u = D.ui;

    document.documentElement.lang = lang;
    document.title = D.meta.tituloPagina;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", D.meta.descripcion);
    var og = document.querySelector('meta[property="og:locale"]');
    if (og) og.setAttribute("content", lang === "en" ? "en_US" : "es_AR");

    el("skipLink").textContent = u.saltar;
    el("brandText").textContent = D.meta.nombreCorto;

    el("navLinks").setAttribute("aria-label", u.nav.perfil + " …");
    el("navLinks").innerHTML = Object.keys(u.nav).map(function (k) {
      return '<a href="#' + k + '">' + esc(u.nav[k]) + "</a>";
    }).join("");

    var lb = el("langToggle");
    lb.textContent = u.idiomaOtro;
    lb.setAttribute("aria-label", u.cambiarIdioma);
    lb.setAttribute("title", u.cambiarIdioma);

    el("themeToggle").setAttribute("aria-label", u.tema);
    el("themeToggle").setAttribute("title", u.tema);
    el("navBurger").setAttribute("aria-label", u.menu);

    Array.prototype.forEach.call(document.querySelectorAll("[data-t]"), function (n) {
      var k = n.dataset.t;
      n.textContent = (u.sec[k] && u.sec[k].t) || u.lbl[k] || "";
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-s]"), function (n) {
      var s = u.sec[n.dataset.s] || {};
      n.textContent = s.s || "";
    });
  }

  /* ====================================================== HERO */
  function perfilChip(p) {
    return '<li><a href="' + esc(p.href) + '" target="_blank" rel="noopener">' +
      (ICON[p.tipo] || ICON.link) +
      "<span><b>" + esc(p.label) + "</b>" + esc(p.valor) + "</span></a></li>";
  }

  function renderHero() {
    var m = D.meta, L = D.links;

    el("heroEyebrow").textContent = m.eyebrow;
    el("heroName").innerHTML =
      (m.tratamiento ? '<span class="hero__trato">' + esc(m.tratamiento) + "</span> " : "") +
      esc(m.nombre);
    el("heroRole").textContent = m.rol;
    el("heroLede").textContent = m.lede;

    el("heroCta").innerHTML =
      '<a class="btn btn--primary" href="#contacto">' + ICON.mail + " " + esc(D.contacto.titulo) + "</a>" +
      '<a class="btn" href="' + esc(L.github) + '" target="_blank" rel="noopener">' + ICON.github + " GitHub</a>" +
      '<a class="btn" href="' + esc(L.linkedin) + '" target="_blank" rel="noopener">' + ICON.linkedin + " LinkedIn</a>";

    el("heroPerfiles").innerHTML = D.perfiles.map(perfilChip).join("");

    el("heroStats").innerHTML = D.stats.map(function (s) {
      return "<li><b>" + esc(s.valor) + "</b><span>" + esc(s.label) + "</span></li>";
    }).join("");

    var t = D.tarjeta;
    el("heroCard").innerHTML =
      (m.foto ? '<img class="hero__avatar" src="' + esc(m.foto) + '" alt="' + esc(m.fotoAlt || m.nombre) + '">' : "") +
      "<h3>" + esc(t.titulo) + "</h3><dl>" +
      t.filas.map(function (f) {
        return '<div class="row"><dt>' + esc(f.k) + "</dt><dd>" + f.v + "</dd></div>";
      }).join("") + "</dl>";
  }

  /* ==================================================== PERFIL */
  function renderPerfil() {
    var p = D.perfil;
    el("perfilText").innerHTML = p.parrafos.map(function (x) {
      return "<p>" + x + "</p>";
    }).join("");
    el("perfilAreas").innerHTML   = p.areas.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
    el("perfilIdiomas").innerHTML = p.idiomas.map(function (i) {
      return "<li><b>" + esc(i.k) + "</b><span>" + esc(i.v) + "</span></li>";
    }).join("");

    el("skills").innerHTML = D.skills.map(function (g) {
      return '<div class="skillcard reveal"><h4>' + esc(g.grupo) + "</h4><ul>" +
        g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
  }

  /* ================================================= ACTUALIDAD */
  function renderActualidad() {
    el("nowGrid").innerHTML = D.actualidad.map(function (a) {
      return '<article class="nowcard reveal' + (a.destacado ? " nowcard--hi" : "") + '">' +
        '<span class="nowcard__tag">' + esc(a.etiqueta) + "</span>" +
        "<h3>" + esc(a.titulo) + "</h3>" +
        '<p class="nowcard__meta">' + esc(a.lugar) + "</p>" +
        '<p class="nowcard__per">' + esc(a.periodo) + "</p>" +
        '<p class="nowcard__det">' + esc(a.detalle) + "</p></article>";
    }).join("");
  }

  /* ================================================= TRAYECTORIA */
  function timelineItem(it) {
    return '<li class="tlitem reveal' + (it.actual ? " tlitem--now" : "") + '">' +
      '<span class="tlitem__per">' + esc(it.periodo) + "</span>" +
      "<h4>" + esc(it.rol) + "</h4>" +
      '<p class="tlitem__org">' + esc(it.org) + "</p>" +
      (it.lugar ? '<p class="tlitem__loc">' + esc(it.lugar) + "</p>" : "") +
      (it.puntos && it.puntos.length
        ? "<ul>" + it.puntos.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>"
        : "") + "</li>";
  }

  function renderTrayectoria() {
    el("tlExperiencia").innerHTML = D.experiencia.map(timelineItem).join("");
    el("tlFormacion").innerHTML   = D.formacion.map(timelineItem).join("");
    el("listBecas").innerHTML     = D.becas.map(function (b) { return '<li class="reveal">' + b + "</li>"; }).join("");
  }

  /* ================================ FILTROS (IA y publicaciones) */
  function montarFiltros(cont, etiquetas, activo, alElegir, conteos) {
    cont.innerHTML = etiquetas.map(function (e, i) {
      var n = conteos ? '<span class="chip__n">' + esc(conteos[i]) + "</span>" : "";
      return '<button class="chip" type="button" data-i="' + i +
        '" aria-pressed="' + (i === activo) + '">' + esc(e) + n + "</button>";
    }).join("");
    cont.onclick = function (ev) {
      var b = ev.target.closest(".chip");
      if (!b) return;
      Array.prototype.forEach.call(cont.children, function (c) {
        c.setAttribute("aria-pressed", String(c === b));
      });
      alElegir(Number(b.dataset.i));
    };
  }

  /* ========================================================== IA */
  function renderIA() {
    var grid = el("iaGrid");

    function pinta(i) {
      filtroIA = i;
      var etiqueta = D.iaEstados[i];
      var lista = D.ia.filter(function (p) {
        return i === 0 || p.estado === etiqueta;
      });
      grid.innerHTML = lista.map(function (p) {
        var enCurso = p.estado === D.iaEstados[1];
        return '<article class="iacard reveal"><div class="iacard__top">' +
          '<span class="badge ' + (enCurso ? "badge--curso" : "badge--plan") + '">' + esc(p.estado) + "</span>" +
          '<span class="iacard__per">' + esc(p.periodo) + "</span></div>" +
          "<h3>" + esc(p.titulo) + "</h3><p>" + esc(p.resumen) + "</p>" +
          '<div class="iacard__stack">' + p.stack.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") + "</div>" +
          '<p class="iacard__ctx">' + esc(p.contexto) + "</p></article>";
      }).join("");
      observarNuevos(grid);
    }

    montarFiltros(el("iaFilters"), D.iaEstados, filtroIA, pinta);
    pinta(filtroIA);
    el("iaNote").innerHTML = D.iaNota;
  }

  /* =============================================== PUBLICACIONES */
  function renderPublicaciones() {
    var lista = el("pubList");

    el("pubPerfiles").innerHTML =
      '<span class="perfilesbar__lbl">' + esc(D.ui.lbl.verPerfil) + ":</span>" +
      D.perfiles.map(function (p) {
        return '<a class="perfilesbar__a" href="' + esc(p.href) + '" target="_blank" rel="noopener">' +
          (ICON[p.tipo] || ICON.link) + " " + esc(p.label) + "</a>";
      }).join("");

    function pinta(i) {
      filtroPub = i;
      /* `pubTodas` es la única etiqueta que no filtra. */
      var etiqueta = D.pubTipos[i];
      var items = D.publicaciones
        .filter(function (p) { return etiqueta === D.pubTodas || p.tipo === etiqueta; })
        .sort(function (a, b) { return b.anio - a.anio; });

      lista.innerHTML = items.map(function (p) {
        var foot = "";
        if (p.doi) foot += '<a class="doi" href="https://doi.org/' + esc(p.doi) +
                           '" target="_blank" rel="noopener">' + ICON.ext + " " + esc(p.doi) + "</a>";
        if (p.id) foot += '<span class="idtag">' + esc(p.id) + "</span>";
        return '<li class="pubitem reveal' + (p.destacado ? " pubitem--hi" : "") + '">' +
          '<span class="pubitem__year">' + esc(p.anio) + "</span>" +
          '<div class="pubitem__body"><h3>' + esc(p.titulo) + "</h3>" +
          '<p class="pubitem__aut">' + p.autores + "</p>" +
          '<p class="pubitem__src">' + p.fuente + "</p>" +
          (foot ? '<div class="pubitem__foot">' + foot + "</div>" : "") +
          "</div></li>";
      }).join("");
      observarNuevos(lista);
    }

    var conteos = D.pubTipos.map(function (t) {
      return t === D.pubTodas
        ? D.publicaciones.length
        : D.publicaciones.filter(function (p) { return p.tipo === t; }).length;
    });

    montarFiltros(el("pubFilters"), D.pubTipos, filtroPub, pinta, conteos);
    pinta(filtroPub);
  }

  /* ======================================================= REPOS */
  function renderRepos() {
    el("repoGrid").innerHTML = D.repos.map(function (r) {
      var color = LANG_COLORS[r.lang] || "var(--accent-2)";
      return '<a class="repocard reveal' + (r.destacado ? " repocard--hi" : "") + '" href="' +
        esc(r.url) + '" target="_blank" rel="noopener"><div class="repocard__top">' + ICON.repo +
        '<span class="repocard__name">' + esc(r.nombre) + "</span>" +
        (r.estrellas ? '<span class="repocard__star">' + ICON.star + " " + esc(r.estrellas) + "</span>" : "") +
        "</div><p>" + esc(r.desc) + '</p><div class="repocard__foot">' +
        (r.lang ? '<span class="langdot"><i style="background:' + color + '"></i>' + esc(r.lang) + "</span>" : "") +
        r.tags.map(function (t) { return '<span class="repotag">' + esc(t) + "</span>"; }).join("") +
        "</div></a>";
    }).join("");
    el("repoNote").innerHTML = D.repoNota;
  }

  /* ====================================================== CURSOS */
  function renderCursos() {
    var proximo = D.cursos.length && D.cursos[0].estado;   // referencia de idioma
    el("cursoGrid").innerHTML = D.cursos.map(function (c) {
      var esProx = /Próximo|Upcoming/i.test(c.estado);
      var meta = [c.institucion, c.anio, c.horas, c.modalidad].filter(Boolean).map(esc).join(" · ");
      return '<article class="curso reveal' + (esProx ? " curso--prox" : "") + '">' +
        '<div class="curso__top"><span class="badge ' + (esProx ? "badge--plan" : "badge--curso") + '">' +
        esc(c.estado) + '</span><span class="curso__rol">' + esc(c.rol) + "</span></div>" +
        "<h3>" + esc(c.titulo) + '</h3><p class="curso__meta">' + meta + "</p>" +
        "<p>" + esc(c.descripcion) + "</p>" +
        (c.temas && c.temas.length
          ? '<div class="curso__temas">' + c.temas.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>"
          : "") +
        (c.repo
          ? '<a class="curso__repo" href="' + esc(c.repo) + '" target="_blank" rel="noopener">' +
            ICON.repo + " " + esc(c.repoLabel || D.ui.lbl.verRepo) + "</a>"
          : "") + "</article>";
    }).join("");
    el("cursoNota").innerHTML = D.cursoNota;
    void proximo;
  }

  /* ==================================================== DOCENCIA */
  function renderDocencia() {
    var pinta = function (id, arr) {
      el(id).innerHTML = arr.map(function (x) { return "<li>" + x + "</li>"; }).join("");
    };
    pinta("listDocencia", D.docencia);
    pinta("listBecarios", D.becarios);
    pinta("listEval",     D.evaluacion);
  }

  /* ================================================= COLABOREMOS */
  function renderBusco() {
    el("buscoIntro").textContent = D.buscoIntro;
    el("buscoGrid").innerHTML = D.busco.map(function (b) {
      return '<article class="busco reveal"><span class="busco__ico">' + (ICON[b.icono] || ICON.link) + "</span>" +
        "<h3>" + esc(b.titulo) + "</h3><p>" + esc(b.desc) + "</p>" +
        '<span class="busco__mod">' + esc(b.modalidad) + "</span></article>";
    }).join("");

    var c = D.buscoCta;
    el("buscoCta").innerHTML =
      "<div><h3>" + esc(c.titulo) + "</h3><p>" + esc(c.texto) + "</p></div>" +
      '<a class="btn btn--primary" href="mailto:' + esc(D.meta.email) + '">' + ICON.mail + " " + esc(c.boton) + "</a>";
  }

  /* ==================================================== CONTACTO */
  function renderContacto() {
    var c = D.contacto;
    var filas = c.items.map(function (i) {
      var tag  = i.href ? "a" : "div";
      var attr = i.href
        ? ' href="' + esc(i.href) + '"' + (/^https?:/.test(i.href) ? ' target="_blank" rel="noopener"' : "")
        : "";
      var copy = (i.tipo === "email" || i.tipo === "tel")
        ? '<button class="copybtn" type="button" data-copy="' + esc(i.valor) + '">' + esc(D.ui.copiar) + "</button>"
        : "";
      return "<" + tag + ' class="contact__row"' + attr + ">" + (ICON[i.tipo] || ICON.link) +
        '<span class="contact__txt"><b>' + esc(i.label) + "</b><span>" + esc(i.valor) + "</span></span>" +
        copy + "</" + tag + ">";
    }).join("");

    el("contact").innerHTML =
      "<div><h3>" + esc(c.titulo) + "</h3><p>" + esc(c.texto) + "</p>" +
      '<a class="btn btn--primary" href="mailto:' + esc(D.meta.email) + '">' + ICON.mail + " " + esc(D.buscoCta.boton) + "</a></div>" +
      '<div class="contact__list">' + filas + "</div>";
  }

  /* Numera las secciones y alterna el fondo. Se calcula acá y no se deja fijo
     en el HTML para no tener que renumerar a mano al agregar o sacar una. */
  function numerarSecciones() {
    Array.prototype.forEach.call(
      document.querySelectorAll("main > section:not(.hero)"),
      function (s, i) {
        var n = s.querySelector(".sec-num");
        if (n) n.textContent = (i < 9 ? "0" : "") + (i + 1);
        s.classList.toggle("section--alt", i % 2 === 1);
      }
    );
  }

  function alCopiar(ev) {
    var b = ev.target.closest(".copybtn");
    if (!b) return;
    ev.preventDefault();
    var ok = function () {
      b.textContent = D.ui.copiado;
      b.classList.add("is-ok");
      setTimeout(function () { b.textContent = D.ui.copiar; b.classList.remove("is-ok"); }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(b.dataset.copy).then(ok).catch(function () {});
    } else {
      var ta = document.createElement("textarea");
      ta.value = b.dataset.copy; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); ok(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  /* ====================================================== FOOTER */
  function renderFooter() {
    var f = new Date(D.meta.actualizado + "T12:00:00");
    var fecha = isNaN(f) ? D.meta.actualizado
      : f.toLocaleDateString(lang === "en" ? "en-GB" : "es-AR",
          { year: "numeric", month: "long", day: "numeric" });

    /* Sin el tratamiento delante: «Ph.D. in Engineering Paola Torres» no es
       una forma válida de nombrar a alguien en inglés. */
    el("footLeft").innerHTML = "&copy; " + f.getFullYear() + " " +
      esc(D.meta.nombre) + " · San Rafael, Mendoza, Argentina";
    el("footRight").innerHTML =
      '<span class="foot__upd">' + esc(D.ui.actualizado) + ": " + esc(fecha) + "</span><br>" + esc(D.pie);
  }

  /* ================================================ INTERACCIÓN */
  function initReveal() {
    revealListo = true;
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      mostrarTodo(document);
      return;
    }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        var n = e.target;
        setTimeout(function () { n.classList.add("is-in"); }, Math.min(i, 6) * 55);
        io.unobserve(n);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    observarNuevos(document);
  }

  function mostrarTodo(root) {
    Array.prototype.forEach.call(root.querySelectorAll(".reveal"), function (n) {
      n.classList.add("is-in");
    });
  }

  function observarNuevos(root) {
    var nodos = root.querySelectorAll(".reveal:not(.is-in)");
    if (io) Array.prototype.forEach.call(nodos, function (n) { io.observe(n); });
    else if (revealListo) mostrarTodo(root);
  }

  /* Decide si el nav entra horizontal o pasa a hamburguesa. Se mide en vez
     de usar un breakpoint fijo porque el ancho de los enlaces cambia con el
     idioma y con la cantidad de secciones. */
  function ajustarNav() {
    var nav = el("nav"), inner = nav.querySelector(".nav__inner");
    var links = el("navLinks");
    var brand = nav.querySelector(".nav__brand"), acts = nav.querySelector(".nav__actions");

    var abierto = links.classList.contains("is-open");
    links.classList.remove("is-open");
    nav.classList.remove("is-compact");

    var estilo = getComputedStyle(inner);
    var disponible = inner.clientWidth -
      parseFloat(estilo.paddingLeft) - parseFloat(estilo.paddingRight);
    var necesario = brand.offsetWidth + links.scrollWidth + acts.offsetWidth +
      parseFloat(estilo.columnGap || 18) * 2;

    if (necesario > disponible) {
      nav.classList.add("is-compact");
      if (abierto) links.classList.add("is-open");
    }
  }

  function initNav() {
    var nav = el("nav"), links = el("navLinks"), burger = el("navBurger"), progress = el("navProgress");

    ajustarNav();
    var rt = null;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(ajustarNav, 120);
    });

    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? D.ui.menuCerrar : D.ui.menu);
    });

    links.addEventListener("click", function (ev) {
      if (ev.target.tagName === "A") {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      nav.classList.toggle("is-stuck", y > 8);

      var alto = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (alto > 0 ? Math.min(100, (y / alto) * 100) : 0) + "%";

      var anchors = Array.prototype.slice.call(links.querySelectorAll("a"));
      var activa = null, limite = y + 140;
      anchors.forEach(function (a) {
        var s = document.querySelector(a.getAttribute("href"));
        if (s && s.offsetTop <= limite) activa = s;
      });
      anchors.forEach(function (a) {
        a.classList.toggle("is-active", !!activa && a.getAttribute("href") === "#" + activa.id);
      });
    }

    var tick = false;
    window.addEventListener("scroll", function () {
      if (tick) return;
      tick = true;
      window.requestAnimationFrame(function () { onScroll(); tick = false; });
    }, { passive: true });
    onScroll();
    navListo = true;
  }

  function initTheme() {
    var root = document.documentElement;
    if (!root.getAttribute("data-theme")) {
      root.setAttribute("data-theme",
        window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    }
    el("themeToggle").addEventListener("click", function () {
      var nuevo = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", nuevo);
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", nuevo === "light" ? "#faf7f2" : "#131211");
      try { localStorage.setItem("pt-theme", nuevo); } catch (e) {}
    });
  }

  /* ======================================================= IDIOMA */
  function aplicarIdioma(nuevo) {
    if (!IDIOMAS[nuevo]) nuevo = "es";
    lang = nuevo;
    D = IDIOMAS[nuevo];
    filtroIA = 0; filtroPub = 0;

    renderChrome();
    renderHero();
    renderPerfil();
    renderActualidad();
    renderTrayectoria();
    renderIA();
    renderPublicaciones();
    renderRepos();
    renderCursos();
    renderDocencia();
    renderBusco();
    renderContacto();
    renderFooter();
    numerarSecciones();

    if (revealListo) { if (io) observarNuevos(document); else mostrarTodo(document); }
    if (navListo) ajustarNav();   // los enlaces cambian de ancho al traducirse
  }
  var navListo = false;

  function initIdioma() {
    var guardado = null;
    try { guardado = localStorage.getItem("pt-lang"); } catch (e) {}
    var url = new URLSearchParams(location.search).get("lang");
    var inicial = (url === "en" || url === "es") ? url
      : guardado || ((navigator.language || "es").slice(0, 2) === "en" ? "en" : "es");

    aplicarIdioma(IDIOMAS[inicial] ? inicial : "es");

    el("langToggle").addEventListener("click", function () {
      var nuevo = lang === "es" ? "en" : "es";
      try { localStorage.setItem("pt-lang", nuevo); } catch (e) {}
      aplicarIdioma(nuevo);
    });
  }

  /* ========================================================= INIT */
  function init() {
    initTheme();
    initIdioma();
    initReveal();
    initNav();
    document.addEventListener("click", alCopiar);

    /* El contenido lo pinta JS, así que al cargar con #ancla el navegador
       todavía no tenía adónde saltar: ahora que está pintado, saltamos. */
    var ancla = (location.hash || "").slice(1);
    if (ancla && el(ancla)) el(ancla).scrollIntoView({ behavior: "auto", block: "start" });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
