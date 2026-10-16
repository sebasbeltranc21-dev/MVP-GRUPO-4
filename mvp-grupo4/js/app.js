/* ==========================================================
   MVP Grupo 4 — Lógica de la aplicación (SPA sin dependencias)
   ========================================================== */
(() => {
  "use strict";

  /* ---------------- Iconos ---------------- */
  const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
    share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
    bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  };
  const icon = (n) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ""}</svg>`;
  const hydrateIcons = (root = document) => root.querySelectorAll("[data-icon]:empty").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));

  /* ---------------- Utilidades ---------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s = "") => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const nowTime = () => new Date().toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
  const kfmt = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(".0", "") + "k" : n);
  const first = (n) => n.split(" ")[0];
  const view = $("#view");

  /* ---------------- Estado persistente ---------------- */
  const KEY = "mvp-grupo4-state-v1";
  const defaults = () => ({
    me: clone(ME),
    posts: clone(POSTS),
    convos: clone(CONVERSATIONS),
    following: COMPANIES.filter((c) => c.following).map((c) => c.id),
    connected: PEOPLE.filter((p) => p.connected).map((p) => p.id),
    pending: [],
    applied: [],
    saved: [],
    doneGuides: ["g1", "g2"],
    lastScan: null,
  });
  let state;
  try { state = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch { state = defaults(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} };

  const ui = { route: "feed", openComments: new Set(), postTag: "Actualización", acadCat: "Todos", tipIdx: 0, quiz: { i: 0, score: 0, answered: null }, jobFilter: { q: "", modality: "", company: "", sort: "match" }, netTab: "contactos", activeConvo: null, cvFile: null };

  /* ---------------- Entidades ---------------- */
  const company = (id) => COMPANIES.find((c) => c.id === id);
  const person = (id) => (id === "u0" ? state.me : PEOPLE.find((p) => p.id === id));
  function ent(ref) {
    if (ref.type === "company") { const c = company(ref.id); return { name: c.name, sub: c.sector, color: c.color, sq: true, link: `#/empresa/${c.id}`, verified: true }; }
    if (ref.type === "contact") { const c = company(ref.companyId); return { name: ref.name, sub: `${ref.role} · ${c.name}`, color: c.color, link: `#/empresa/${c.id}` }; }
    const p = person(ref.id); return { name: p.name, sub: p.headline, color: p.color, link: ref.id === "u0" ? "#/perfil" : "#/red" };
  }
  const avatar = (e, size = "") => `<span class="avatar ${size} ${e.sq ? "sq" : ""}" style="background:linear-gradient(135deg,${e.color[0]},${e.color[1]})" aria-hidden="true">${esc(initials(e.name))}</span>`;
  const meEnt = () => ent({ type: "person", id: "u0" });

  function jobMatch(job) {
    const mine = state.me.skills.map(norm);
    const hit = job.skills.filter((s) => { const n = norm(s); return mine.some((m) => m === n || n.includes(m) || m.includes(n)); }).length;
    return Math.min(98, Math.round(42 + (hit / job.skills.length) * 56));
  }
  const matchClass = (m) => (m >= 80 ? "mint" : m >= 60 ? "blue" : "amber");

  /* ---------------- UI global ---------------- */
  function toast(msg, ico = "✅") {
    const t = document.createElement("div");
    t.className = "toast"; t.innerHTML = `<span>${ico}</span><span>${msg}</span>`;
    $("#toasts").append(t);
    setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 300); }, 3200);
  }
  const modal = $("#modal");
  function openModal(html) { $("#modalBody").innerHTML = html; hydrateIcons($("#modalBody")); if (!modal.open) modal.showModal(); }
  const closeModal = () => modal.open && modal.close();
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  function updateChrome() {
    const unread = state.convos.reduce((a, c) => a + (c.unread || 0), 0);
    const b = $("#inboxBadge"); b.textContent = unread || ""; b.dataset.n = unread;
    $("#sbScore").textContent = state.me.cv.score + "%";
    $(".sidebar-card .progress span").style.width = state.me.cv.score + "%";
    $("#meChip").innerHTML = `${avatar(meEnt(), "xs")}<span class="name">${esc(first(state.me.name))}</span>`;
  }

  // Sidebar móvil
  const sidebar = $("#sidebar"), scrim = $("#scrim");
  const closeSidebar = () => { sidebar.classList.remove("open"); scrim.classList.remove("show"); };
  $("#menuBtn").addEventListener("click", () => { sidebar.classList.add("open"); scrim.classList.add("show"); });
  scrim.addEventListener("click", closeSidebar);

  // Notificaciones (Popover API con respaldo)
  const notifPanel = $("#notifPanel");
  $("#notifBtn").addEventListener("click", () => {
    if (notifPanel.togglePopover) notifPanel.togglePopover(); else notifPanel.toggleAttribute("hidden");
    $("#notifBtn .dot")?.remove();
  });

  // Búsqueda global
  $("#globalSearch").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim()) location.hash = `#/buscar/${encodeURIComponent(e.target.value.trim())}`;
  });

  /* ==========================================================
     VISTA: FEED
     ========================================================== */
  const TAG_COLORS = { Vacante: "blue", Logro: "mint", Consejo: "violet", Evento: "amber", Proyecto: "blue", "Actualización": "" };

  function postHTML(p) {
    const a = ent(p.author);
    const open = ui.openComments.has(p.id);
    return `<article class="card card-pad post" data-post="${p.id}">
      <div class="post-head">
        <a href="${a.link}">${avatar(a)}</a>
        <div class="grow">
          <h4><a href="${a.link}">${esc(a.name)}</a> ${a.verified ? '<span class="verified" title="Empresa verificada">✔</span>' : ""}</h4>
          <p>${esc(a.sub)} · ${esc(p.time)}</p>
        </div>
        ${p.tag ? `<span class="chip ${TAG_COLORS[p.tag] || ""}">${esc(p.tag)}</span>` : ""}
      </div>
      <p class="post-text">${esc(p.text)}</p>
      <div class="post-stats"><span>❤️ ${kfmt(p.likes)}</span><span>${p.comments} comentarios · ${p.shares} compartidos</span></div>
      <div class="post-actions">
        <button data-action="like" data-id="${p.id}" class="${p.liked ? "liked" : ""}">${icon("heart")} Me gusta</button>
        <button data-action="toggle-comments" data-id="${p.id}">${icon("chat")} Comentar</button>
        <button data-action="share" data-id="${p.id}">${icon("share")} Compartir</button>
      </div>
      ${open ? `<div class="comments">
        ${p.commentsList.map((c) => { const e = ent({ type: "person", id: c.who }); return `<div class="comment">${avatar(e, "xs")}<div class="bubble"><b>${esc(e.name)}</b>${esc(c.text)}</div></div>`; }).join("")}
        <form class="comment-form" data-form="comment" data-id="${p.id}">
          ${avatar(meEnt(), "xs")}
          <input name="c" placeholder="Escribe un comentario…" autocomplete="off" required />
          <button class="btn btn-primary btn-sm">Enviar</button>
        </form>
      </div>` : ""}
    </article>`;
  }

  function viewFeed() {
    const me = state.me;
    const recJobs = [...JOBS].sort((a, b) => jobMatch(b) - jobMatch(a)).slice(0, 3);
    const sugCompanies = COMPANIES.filter((c) => !state.following.includes(c.id)).slice(0, 3);
    const sugPeople = PEOPLE.filter((p) => !state.connected.includes(p.id)).slice(0, 3);
    view.innerHTML = `
    <div class="feed-grid">
      <aside class="feed-left sticky">
        <div class="card mini-profile">
          <div class="cover"></div>
          ${avatar(meEnt(), "lg")}
          <div style="padding:0 16px">
            <h3 style="font-size:1.05rem"><a href="#/perfil">${esc(me.name)}</a></h3>
            <p class="muted small">${esc(me.headline)}</p>
          </div>
          <div class="stats">
            <div><b>${state.connected.length + 120}</b><small>Conexiones</small></div>
            <div><b>${me.stats.views}</b><small>Visitas</small></div>
            <div><b>${state.applied.length}</b><small>Postulaciones</small></div>
          </div>
        </div>
        <div class="card card-pad">
          <h3 class="card-title">Accesos rápidos</h3>
          <div class="side-list">
            <a class="side-item" href="#/scanner"><span class="avatar sm sq" style="background:var(--grad)">${icon("spark")}</span><div><h5>Evaluar mi CV</h5><p>Puntaje actual: ${me.cv.score}/100</p></div></a>
            <a class="side-item" href="#/academia"><span class="avatar sm sq" style="background:var(--grad-mint)">${icon("book")}</span><div><h5>Academia</h5><p>${state.doneGuides.length}/${ACADEMY.guides.length} guías completadas</p></div></a>
            <a class="side-item" href="#/vacantes"><span class="avatar sm sq" style="background:linear-gradient(135deg,#FFB547,#FF6B6B)">${icon("bookmark")}</span><div><h5>Vacantes guardadas</h5><p>${state.saved.length} guardadas</p></div></a>
          </div>
        </div>
      </aside>

      <section style="display:grid;gap:18px;min-width:0">
        <div class="card card-pad composer">
          <div class="row" style="align-items:start">
            ${avatar(meEnt())}
            <textarea id="postText" class="grow" placeholder="¿Qué quieres compartir hoy, ${esc(first(me.name))}? Un logro, un consejo, un proyecto…"></textarea>
          </div>
          <div class="composer-actions">
            ${["Logro", "Consejo", "Proyecto", "Actualización"].map((t) => `<button class="tag-btn ${ui.postTag === t ? "active" : ""}" data-action="post-tag" data-tag="${t}">${{ Logro: "🏆", Consejo: "💡", Proyecto: "🛠️", "Actualización": "📢" }[t]} ${t}</button>`).join("")}
            <button class="btn btn-primary" style="margin-left:auto" data-action="publish">${icon("send")} Publicar</button>
          </div>
        </div>
        <div id="posts" style="display:grid;gap:18px">${state.posts.map(postHTML).join("")}</div>
      </section>

      <aside class="feed-right sticky">
        <div class="card card-pad">
          <h3 class="card-title">Vacantes para ti <a href="#/vacantes">Ver todas</a></h3>
          <div class="side-list">
            ${recJobs.map((j) => { const c = company(j.companyId); const m = jobMatch(j); return `
              <button class="side-item" style="border:0;background:none;padding:0;text-align:left" data-action="job-detail" data-id="${j.id}">
                ${avatar({ name: c.name, color: c.color, sq: true }, "sm")}
                <div class="grow"><h5>${esc(j.title)}</h5><p>${esc(c.name)} · ${j.modality}</p></div>
                <span class="match chip ${matchClass(m)}">${m}%</span>
              </button>`; }).join("")}
          </div>
        </div>
        ${sugCompanies.length ? `<div class="card card-pad">
          <h3 class="card-title">Empresas sugeridas <a href="#/red">Más</a></h3>
          <div class="side-list">${sugCompanies.map((c) => `
            <div class="side-item"><a href="#/empresa/${c.id}">${avatar({ name: c.name, color: c.color, sq: true }, "sm")}</a>
              <div class="grow"><h5><a href="#/empresa/${c.id}">${esc(c.name)}</a></h5><p>${esc(c.sector)}</p></div>
              <button class="btn btn-ghost btn-sm" data-action="follow" data-id="${c.id}">+ Seguir</button></div>`).join("")}
          </div></div>` : ""}
        ${sugPeople.length ? `<div class="card card-pad">
          <h3 class="card-title">Personas que quizá conozcas</h3>
          <div class="side-list">${sugPeople.map((p) => `
            <div class="side-item">${avatar(p, "sm")}<div class="grow"><h5>${esc(p.name)}</h5><p>${esc(p.headline)}</p></div>
              <button class="btn btn-ghost btn-sm" data-action="connect" data-id="${p.id}" ${state.pending.includes(p.id) ? "disabled" : ""}>${state.pending.includes(p.id) ? "Enviada" : "Conectar"}</button></div>`).join("")}
          </div></div>` : ""}
      </aside>
    </div>`;
  }

  /* ==========================================================
     VISTA: ACADEMIA
     ========================================================== */
  function viewAcademy() {
    const guides = ACADEMY.guides.filter((g) => ui.acadCat === "Todos" || g.cat === ui.acadCat);
    const done = state.doneGuides.length, total = ACADEMY.guides.length;
    const q = ACADEMY.quiz[ui.quiz.i];
    view.innerHTML = `
      <section class="hero">
        <span class="eyebrow" style="color:#c9fff0">Academia MVP Grupo 4</span>
        <h1>Prepárate para conseguir tu primera pasantía 🚀</h1>
        <p>Guías prácticas, plantillas descargables y consejos estratégicos para crear un CV de alto impacto y destacar en procesos de selección, incluso sin experiencia previa.</p>
        <div class="chips"><span class="chip">📚 ${total} guías</span><span class="chip">📄 ${ACADEMY.templates.length} plantillas</span><span class="chip">✅ ${done}/${total} completadas</span></div>
        <div style="max-width:360px"><div class="progress" style="background:rgb(255 255 255 / .25)"><span style="width:${(done / total) * 100}%;background:var(--mint)"></span></div></div>
      </section>

      <div class="section-head">
        <div><h1 style="font-size:1.35rem">Guías prácticas</h1><p>Haz clic en una guía para ver el paso a paso.</p></div>
        <div class="tabs" role="tablist">${ACADEMY.categories.map((c) => `<button role="tab" aria-selected="${ui.acadCat === c}" class="${ui.acadCat === c ? "active" : ""}" data-action="acad-cat" data-cat="${c}">${c}</button>`).join("")}</div>
      </div>

      <div class="grid-cards">
        ${guides.map((g) => `
          <button class="card guide" data-action="open-guide" data-id="${g.id}">
            <div class="g-top" style="background:linear-gradient(135deg,${g.color[0]},${g.color[1]})">
              <span class="g-icon">${g.icon}</span>
              ${state.doneGuides.includes(g.id) ? '<span class="done-mark">✓ Completada</span>' : ""}
            </div>
            <div class="g-body">
              <div class="chips"><span class="chip blue">${g.cat}</span><span class="chip">⏱ ${g.time}</span><span class="chip">${g.level}</span></div>
              <h3>${esc(g.title)}</h3>
              <p class="muted small">${esc(g.summary)}</p>
            </div>
          </button>`).join("")}
      </div>

      <div class="academy-split">
        <div class="card card-pad">
          <h3 class="card-title">📥 Plantillas descargables</h3>
          ${ACADEMY.templates.map((t) => `
            <div class="template">
              <span class="t-ico" style="background:${t.color}">${t.format}</span>
              <div class="grow"><b>${esc(t.name)}</b><p class="muted small">${esc(t.desc)}</p></div>
              <button class="btn btn-ghost btn-sm" data-action="download-template" data-id="${t.id}">${icon("download")} Descargar</button>
            </div>`).join("")}
        </div>
        <div style="display:grid;gap:18px">
          <div class="tip-card">
            <span class="eyebrow" style="color:#0c8a69">💡 Consejo estratégico #${ui.tipIdx + 1}</span>
            <p class="tip-text" id="tipText">${esc(ACADEMY.tips[ui.tipIdx])}</p>
            <button class="btn btn-mint btn-sm" style="justify-self:start" data-action="next-tip">Otro consejo →</button>
          </div>
          <div class="card card-pad" id="quizBox">
            ${q ? `
              <h3 class="card-title">🧠 Mini-quiz <span class="muted small">${ui.quiz.i + 1}/${ACADEMY.quiz.length}</span></h3>
              <p style="font-weight:700;margin-bottom:12px">${esc(q.q)}</p>
              <div style="display:grid;gap:8px">${q.options.map((o, i) => {
                let cls = ""; if (ui.quiz.answered !== null) { if (i === q.answer) cls = "right"; else if (i === ui.quiz.answered) cls = "wrong"; }
                return `<button class="quiz-opt ${cls}" data-action="quiz" data-i="${i}" ${ui.quiz.answered !== null ? "disabled" : ""}>${esc(o)}</button>`; }).join("")}</div>
              ${ui.quiz.answered !== null ? `<button class="btn btn-primary btn-sm" style="margin-top:12px" data-action="quiz-next">Siguiente →</button>` : ""}
            ` : `
              <h3 class="card-title">🧠 ¡Quiz completado!</h3>
              <p>Obtuviste <b>${ui.quiz.score}/${ACADEMY.quiz.length}</b> respuestas correctas. ${ui.quiz.score === ACADEMY.quiz.length ? "¡Eres un experto! 🏆" : "¡Repasa las guías y vuelve a intentarlo!"}</p>
              <button class="btn btn-ghost btn-sm" style="margin-top:12px" data-action="quiz-reset">Reintentar</button>`}
          </div>
        </div>
      </div>`;
  }

  function openGuide(id) {
    const g = ACADEMY.guides.find((x) => x.id === id);
    const done = state.doneGuides.includes(id);
    openModal(`
      <div class="modal-hero" style="background:linear-gradient(135deg,${g.color[0]},${g.color[1]})">
        <span style="font-size:2.6rem">${g.icon}</span>
        <div><span class="eyebrow" style="color:#fff;opacity:.85">${g.cat} · ${g.time} · ${g.level}</span><h2>${esc(g.title)}</h2></div>
      </div>
      <div class="modal-content">
        <p class="muted">${esc(g.summary)}</p>
        <ol class="steps">${g.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
        <div class="row wrap">
          <button class="btn ${done ? "btn-ghost" : "btn-mint"}" data-action="guide-done" data-id="${g.id}">${done ? "✓ Completada" : "Marcar como completada"}</button>
          <a href="#/scanner" class="btn btn-grad" data-action="close-modal">${icon("spark")} Aplicar en el Evaluador IA</a>
        </div>
      </div>`);
  }

  const TEMPLATE_DOCS = {
    harvard: `<h1 style="text-align:center">[NOMBRE COMPLETO]</h1><p style="text-align:center">[Ciudad] · [Correo] · [Teléfono] · [LinkedIn]</p><h2>EDUCACIÓN</h2><p><b>[Universidad / Institución]</b> — [Carrera] ([Año inicio] – [Año fin esperado])<br>Promedio: [X.X] · Cursos relevantes: [Curso 1], [Curso 2]</p><h2>EXPERIENCIA Y PROYECTOS</h2><p><b>[Nombre del proyecto / cargo]</b> — [Organización] ([Fecha])</p><ul><li>[Verbo de acción] + [qué hiciste] + [resultado medible].</li><li>[Verbo de acción] + [qué hiciste] + [resultado medible].</li></ul><h2>LIDERAZGO Y VOLUNTARIADO</h2><ul><li>[Rol] en [Organización]: [logro concreto].</li></ul><h2>HABILIDADES E IDIOMAS</h2><p>Técnicas: [Excel, SQL, …] · Blandas: [Comunicación, …] · Idiomas: [Inglés B2, …]</p>`,
    tech: `<h1>[NOMBRE COMPLETO]</h1><p><b>[Rol objetivo: p. ej. Desarrollador Frontend Jr.]</b><br>[Correo] · [Teléfono] · github.com/[usuario] · [portafolio.com]</p><h2>Perfil</h2><p>[3 líneas: quién eres, stack principal y qué buscas aportar.]</p><h2>Habilidades técnicas</h2><p>Lenguajes: [JavaScript, Python] · Frameworks: [React, Node.js] · Herramientas: [Git, Figma, Docker]</p><h2>Proyectos</h2><p><b>[Proyecto 1]</b> — [Stack] — [enlace]</p><ul><li>[Desarrollé…] logrando [métrica].</li></ul><p><b>[Proyecto 2]</b> — [Stack] — [enlace]</p><ul><li>[Implementé…] reduciendo [métrica].</li></ul><h2>Educación</h2><p>[Carrera / Bootcamp / Cursos online] — [Institución] — [Año]</p><h2>Idiomas</h2><p>[Español nativo · Inglés B1]</p>`,
    noexp: `<h1>[NOMBRE COMPLETO]</h1><p>[Ciudad] · [Correo] · [Teléfono] · [Portafolio]</p><h2>Perfil</h2><p>[Persona proactiva con formación en … y experiencia práctica en proyectos de … Busco una pasantía en … para aportar …]</p><h2>Proyectos destacados</h2><ul><li><b>[Proyecto]</b>: [qué hiciste y resultado con números].</li><li><b>[Proyecto]</b>: [qué hiciste y resultado con números].</li></ul><h2>Habilidades</h2><ul><li>Técnicas: […]</li><li>Blandas (con ejemplo): [Trabajo en equipo — coordiné un grupo de 5 personas en …]</li></ul><h2>Formación y cursos</h2><ul><li>[Curso / certificado] — [Plataforma] — [Año]</li></ul><h2>Voluntariado y actividades</h2><ul><li>[Rol] — [Organización] — [logro]</li></ul><h2>Idiomas</h2><p>[…]</p>`,
    carta: `<p>[Ciudad], [Fecha]</p><p>Estimado/a [Nombre del reclutador]:</p><p><b>Párrafo 1 — Gancho:</b> Me dirijo a usted para postularme a la pasantía de [Puesto] en [Empresa]. [Menciona algo concreto que admiras de la empresa].</p><p><b>Párrafo 2 — Evidencia:</b> Durante [proyecto / estudios], [verbo de acción + logro medible], lo que me permitió desarrollar [habilidad clave de la vacante].</p><p><b>Párrafo 3 — Encaje:</b> Me motiva [valor / misión de la empresa] y estoy convencido/a de que puedo aportar [beneficio concreto] al equipo de [área].</p><p><b>Párrafo 4 — Cierre:</b> Agradezco su tiempo y quedo atento/a a la posibilidad de conversar. Adjunto mi CV y portafolio: [enlace].</p><p>Cordialmente,<br>[Nombre] · [Teléfono] · [Correo]</p>`,
  };
  function downloadTemplate(id) {
    const t = ACADEMY.templates.find((x) => x.id === id);
    const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><title>${t.name}</title><style>body{font-family:Calibri,Arial;font-size:11pt;line-height:1.4}h1{font-size:20pt;margin:0}h2{font-size:12pt;color:${t.color};border-bottom:1px solid #ccc;padding-bottom:2pt;margin-top:14pt}</style></head><body>${TEMPLATE_DOCS[id]}<p style="color:#999;font-size:8pt;margin-top:24pt">Plantilla de MVP Grupo 4 · Reemplaza el texto entre [corchetes].</p></body></html>`;
    const blob = new Blob(["\ufeff", html], { type: "application/msword" });
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${t.name.replace(/\s+/g, "_")}_MVPGrupo4.doc` });
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(`Descargando “${t.name}”`, "📥");
  }

  /* ==========================================================
     VISTA: EVALUADOR IA
     ========================================================== */
  const SAMPLE_CV = `Valentina Ríos
Estudiante de Ingeniería de Sistemas | valentina.rios@mail.com | +57 310 555 0192 | github.com/valerios

PERFIL
Estudiante de 7.º semestre apasionada por el desarrollo web y el diseño de interfaces. Busco una pasantía para aportar en equipos ágiles.

PROYECTOS
- EcoRuta: Desarrollé una app web en React para planificar rutas en bicicleta; alcanzó +300 usuarios activos.
- Bot de Horarios: Construí un bot con Node.js que usan 4 facultades y redujo un 60% los choques de horario.
- Lideré un equipo de 4 personas en la hackathon universitaria 2025 (2.º puesto).

EDUCACIÓN
Ingeniería de Sistemas — Universidad Nacional (2022 – 2027)
Curso Frontend Developer — Platzi (2025)

HABILIDADES
JavaScript, HTML, CSS, React, Git, SQL, Figma, trabajo en equipo, comunicación.

IDIOMAS
Español nativo · Inglés B2`;

  const STOP = new Set("para como con que los las del una uno por sus nuestro nuestra nuestros equipo buscamos ser estar sobre entre desde hasta este esta estos estas tener tiene puede donde cuando quien muy mas pero tambien todo toda todos todas cada otro otra alguien persona personas semana semanal horas meses mes junto real reales ganas aprender nuestros apoyaras trabajaras requisitos habilidades deseadas perfil conocimientos ultimos semestres estudiantes estudiante disponibilidad basicos basico deseable buscado bienvenidos".split(" "));
  const ACTION_VERBS = ["desarrolle", "lidere", "disene", "implemente", "cree", "optimice", "aumente", "reduje", "gestione", "coordine", "organice", "logre", "construi", "automatice", "mejore", "analice", "colabore", "participe", "dirigi", "propuse", "lance", "investigue", "documente", "capacite"];

  function analyzeCV(cv, job) {
    const C = norm(cv), J = norm(job);
    const has = (txt, term) => new RegExp(`(^|[^a-z0-9])${term.replace(/[.+#]/g, "\\$&")}([^a-z0-9]|$)`).test(txt);
    let keys = SKILL_LEXICON.map(norm).filter((k) => has(J, k));
    keys = keys.filter((k) => !keys.some((o) => o !== k && o.includes(k) && o.length > k.length)); // quitar duplicados contenidos
    // Términos frecuentes adicionales de la vacante
    const freq = {};
    J.split(/[^a-zñ]+/).filter((w) => w.length >= 6 && !STOP.has(w)).forEach((w) => (freq[w] = (freq[w] || 0) + 1));
    const extra = Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([w]) => w).filter((w) => !keys.some((k) => k.includes(w) || w.includes(k))).slice(0, Math.max(3, 10 - keys.length));
    const allKeys = [...new Set([...keys, ...extra])].slice(0, 14);
    const matched = allKeys.filter((k) => has(C, k) || C.includes(k));
    const missing = allKeys.filter((k) => !matched.includes(k));
    const kw = allKeys.length ? (matched.length / allKeys.length) * 100 : 50;

    const sections = [
      ["Experiencia o Proyectos", /experiencia|proyectos?/],
      ["Educación / Formación", /educacion|formacion|estudios|academic/],
      ["Habilidades", /habilidades|skills|competencias|conocimientos/],
      ["Idiomas", /idiomas|ingles|english/],
      ["Datos de contacto", /@|\+?\d[\d\s-]{7,}/],
      ["Perfil profesional", /perfil|resumen|sobre mi|objetivo/],
    ];
    const foundSec = sections.filter(([, r]) => r.test(C));
    const missingSec = sections.filter(([, r]) => !r.test(C)).map(([n]) => n);
    const structure = (foundSec.length / sections.length) * 100;

    const verbs = ACTION_VERBS.filter((v) => C.includes(v));
    const nums = (C.match(/(\+\d+|\d+\s?%|\d+\s?(usuarios|personas|clientes|proyectos|facultades|puesto))/g) || []).length;
    const impact = Math.min(100, verbs.length * 14 + nums * 16);

    const words = cv.trim().split(/\s+/).length;
    let format = words < 60 ? 30 : words < 120 ? 60 : words <= 750 ? 100 : words <= 1000 ? 75 : 50;
    if ((cv.match(/\n/g) || []).length < 4) format -= 15;
    format = Math.max(10, format);

    const score = Math.max(1, Math.min(100, Math.round(kw * 0.45 + structure * 0.2 + impact * 0.2 + format * 0.15)));

    const sugg = [];
    if (missing.length) sugg.push({ i: "🔑", c: "#ffeef0", t: `Incluye estas palabras clave de la vacante (si tienes la habilidad): <b>${missing.slice(0, 5).map(esc).join(", ")}</b>. Los filtros ATS buscan coincidencias exactas.` });
    if (missingSec.length) sugg.push({ i: "🧱", c: "#fff5e6", t: `Agrega las secciones faltantes: <b>${missingSec.join(", ")}</b>. Una estructura estándar facilita la lectura en 7 segundos.` });
    if (verbs.length < 3) sugg.push({ i: "⚡", c: "#eef3ff", t: "Empieza tus viñetas con verbos de acción en pasado: <b>Desarrollé, Lideré, Optimicé, Automaticé</b>." });
    if (nums < 2) sugg.push({ i: "📈", c: "#e6fbf5", t: "Cuantifica tus logros: usa números y porcentajes (p. ej. “+300 usuarios”, “reduje un 40% el tiempo”)." });
    if (words < 120) sugg.push({ i: "📝", c: "#f1edff", t: `Tu CV tiene solo ${words} palabras. Desarrolla más tus proyectos, cursos y voluntariados (ideal: 250–600).` });
    if (words > 800) sugg.push({ i: "✂️", c: "#f1edff", t: `Tu CV tiene ${words} palabras. Resúmelo a una página priorizando lo relevante para el puesto.` });
    if (!/github|behance|portafolio|portfolio|linkedin|dribbble/.test(C)) sugg.push({ i: "🔗", c: "#eef3ff", t: "Añade un enlace a tu portafolio, GitHub, Behance o LinkedIn en el encabezado." });
    sugg.push({ i: "🎯", c: "#e6fbf5", t: "Adapta tu perfil profesional mencionando el nombre del puesto al que aplicas." });

    return { score, kw: Math.round(kw), structure: Math.round(structure), impact: Math.round(impact), format: Math.round(format), matched, missing, sugg: sugg.slice(0, 6), words, date: Date.now() };
  }

  function scoreColor(s) { return s >= 80 ? "var(--mint)" : s >= 60 ? "var(--blue)" : s >= 40 ? "var(--amber)" : "var(--red)"; }
  function verdict(s) {
    if (s >= 80) return ["¡Excelente afinidad! Tu CV está listo para postular. 🚀", "#e6fbf5", "#0c8a69"];
    if (s >= 60) return ["Buena afinidad. Con unos ajustes puedes destacar aún más. 💪", "#eef3ff", "#1d4ed8"];
    if (s >= 40) return ["Afinidad media. Aplica las sugerencias antes de postular. 🛠️", "#fff5e6", "#b76e00"];
    return ["Afinidad baja. Tu CV necesita adaptarse a este puesto. 📌", "#ffeef0", "#d63447"];
  }

  function resultHTML(r) {
    const [vt, vbg, vfg] = verdict(r.score);
    const bar = (label, v, col) => `<div class="bar-row"><div class="row"><span>${label}</span><span>${v}%</span></div><div class="progress"><span data-w="${v}" style="width:0;background:${col}"></span></div></div>`;
    return `
      <div class="score-wrap">
        <div class="ring" id="ring" style="--c:${scoreColor(r.score)}"><div><b id="ringNum">0</b><small>de 100</small></div></div>
        <div style="display:grid;gap:12px">
          <span class="eyebrow">Resultado del análisis IA</span>
          <h2 style="font-size:1.4rem">Afinidad con el puesto</h2>
          <div class="verdict" style="background:${vbg};color:${vfg}">${vt}</div>
        </div>
      </div>
      <div class="bars" style="margin-top:22px">
        ${bar("🔑 Palabras clave", r.kw, "var(--blue)")}
        ${bar("🧱 Estructura y secciones", r.structure, "var(--violet)")}
        ${bar("📈 Impacto y logros medibles", r.impact, "var(--mint)")}
        ${bar("📝 Formato y extensión", r.format, "var(--amber)")}
      </div>
      <div style="margin-top:22px;display:grid;gap:10px">
        <h4>✅ Palabras clave encontradas (${r.matched.length})</h4>
        <div class="chips">${r.matched.length ? r.matched.map((k) => `<span class="chip mint">✓ ${esc(k)}</span>`).join("") : '<span class="muted small">Ninguna coincidencia todavía.</span>'}</div>
        <h4 style="margin-top:6px">⚠️ Palabras clave faltantes (${r.missing.length})</h4>
        <div class="chips">${r.missing.length ? r.missing.map((k) => `<span class="chip red">✕ ${esc(k)}</span>`).join("") : '<span class="muted small">¡No falta ninguna! 🎉</span>'}</div>
      </div>
      <div style="margin-top:22px">
        <h4 style="margin-bottom:10px">💡 Sugerencias concretas de mejora</h4>
        <ul class="sugg">${r.sugg.map((s) => `<li><span class="s-ico" style="background:${s.c}">${s.i}</span><span>${s.t}</span></li>`).join("")}</ul>
      </div>
      <div class="row wrap" style="margin-top:22px">
        <button class="btn btn-primary" data-action="save-score">${icon("check")} Guardar puntaje en mi perfil</button>
        <a href="#/vacantes" class="btn btn-ghost">${icon("briefcase")} Ver vacantes compatibles</a>
        <a href="#/academia" class="btn btn-ghost">${icon("book")} Ir a la Academia</a>
      </div>`;
  }

  function animateResult() {
    const ring = $("#ring"), num = $("#ringNum"); if (!ring) return;
    const target = ui.lastResult.score, t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / 1200), e = 1 - Math.pow(1 - p, 3), v = Math.round(target * e);
      ring.style.setProperty("--v", v); num.textContent = v;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    requestAnimationFrame(() => $$("[data-w]").forEach((b) => (b.style.width = b.dataset.w + "%")));
  }

  function viewScanner() {
    if (!ui.cvText && !ui.jobText && !ui.lastResult && !state.lastScan) {
      const j0 = JOBS[0];
      ui.cvText = SAMPLE_CV;
      ui.jobText = `${j0.title} — ${company(j0.companyId).name}\n${j0.description}\nPerfil: ${j0.profile}\nRequisitos: ${j0.requirements.join("; ")}\nHabilidades deseadas: ${j0.skills.join(", ")}`;
      ui.lastResult = analyzeCV(ui.cvText, ui.jobText);
    } else {
      ui.lastResult = ui.lastResult || state.lastScan;
    }
    view.innerHTML = `
      <div class="section-head">
        <div><span class="eyebrow">AI Scanner</span><h1>Evaluador de CV con Inteligencia Artificial</h1><p>Sube tu CV, indica el puesto al que aspiras y obtén un puntaje de afinidad del 1 al 100 con sugerencias accionables.</p></div>
      </div>
      <div class="scan-grid">
        <form class="card card-pad form-stack" data-form="scan">
          <div>
            <label class="lbl">1 · Tu CV</label>
            <label class="dropzone" id="dropzone">
              <span class="dz-ico">${icon("upload")}</span>
              <b>Arrastra tu CV aquí o haz clic para subirlo</b>
              <span class="muted small">PDF, Word (.docx) o .txt · máx. 5 MB</span>
              <input type="file" id="cvFile" accept=".pdf,.doc,.docx,.txt" hidden />
            </label>
            <div id="filePill" style="margin-top:10px">${ui.cvFile ? `<div class="file-pill">${icon("file")} ${esc(ui.cvFile)}</div>` : ""}</div>
            <div class="divider">o pega el texto de tu CV</div>
            <textarea class="textarea" id="cvText" placeholder="Pega aquí el contenido de tu CV…" style="min-height:180px">${esc(ui.cvText || "")}</textarea>
            <button type="button" class="btn btn-ghost btn-sm" style="margin-top:8px" data-action="sample-cv">✨ Usar CV de ejemplo</button>
          </div>
          <div>
            <label class="lbl" for="jobPick">2 · Puesto o pasantía objetivo</label>
            <select class="input" id="jobPick" style="margin-bottom:10px">
              <option value="">Elegir una vacante publicada en la plataforma…</option>
              ${JOBS.map((j) => `<option value="${j.id}">${esc(j.title)} — ${esc(company(j.companyId).name)}</option>`).join("")}
            </select>
            <textarea class="textarea" id="jobText" placeholder="O escribe el puesto / pega la descripción de la vacante (ej. “Pasante de Desarrollo Frontend con React, Git y APIs REST”)">${esc(ui.jobText || "")}</textarea>
          </div>
          <button class="btn btn-grad btn-block" style="padding:14px">${icon("spark")} Analizar con IA</button>
          <p class="muted small" style="text-align:center">🔒 Tu CV se analiza localmente en tu navegador. No se envía a ningún servidor.</p>
        </form>

        <section class="card card-pad" id="scanResult">
          ${ui.lastResult ? resultHTML(ui.lastResult) : `
            <div class="result-empty"><div>
              <div class="ill">${icon("spark")}</div>
              <h3>Tu análisis aparecerá aquí</h3>
              <p class="muted" style="max-width:38ch;margin:8px auto 0">Calificaremos palabras clave, estructura, impacto y formato, y te diremos exactamente qué mejorar.</p>
            </div></div>`}
        </section>
      </div>`;
    if (ui.lastResult) animateResult();

    const dz = $("#dropzone"), fileInput = $("#cvFile");
    ["dragenter", "dragover"].forEach((ev) => dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.add("drag"); }));
    ["dragleave", "drop"].forEach((ev) => dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.remove("drag"); }));
    dz.addEventListener("drop", (e) => e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]));
    fileInput.addEventListener("change", () => fileInput.files[0] && handleFile(fileInput.files[0]));
    $("#jobPick").addEventListener("change", (e) => {
      const j = JOBS.find((x) => x.id === e.target.value); if (!j) return;
      $("#jobText").value = `${j.title} — ${company(j.companyId).name}\n${j.description}\nPerfil: ${j.profile}\nRequisitos: ${j.requirements.join("; ")}\nHabilidades deseadas: ${j.skills.join(", ")}`;
    });
  }

  async function handleFile(file) {
    const pill = $("#filePill"), ta = $("#cvText");
    if (file.size > 5 * 1024 * 1024) return toast("El archivo supera los 5 MB", "⚠️");
    pill.innerHTML = `<div class="file-pill">⏳ Leyendo ${esc(file.name)}…</div>`;
    const ext = file.name.split(".").pop().toLowerCase();
    let text = "";
    try {
      if (ext === "txt") text = await file.text();
      else if (ext === "docx") {
        if (!window.mammoth) throw new Error("Lector de Word no disponible (sin conexión)");
        text = (await window.mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() })).value;
      } else if (ext === "pdf") {
        const pdfjs = await import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs";
        const doc = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
        for (let i = 1; i <= doc.numPages; i++) {
          const c = await (await doc.getPage(i)).getTextContent();
          let line = "", lastY = null;
          c.items.forEach((it) => { const y = it.transform[5]; if (lastY !== null && Math.abs(y - lastY) > 4) line += "\n"; line += it.str + " "; lastY = y; });
          text += line + "\n";
        }
      } else throw new Error("Formato .doc antiguo: guárdalo como .docx o PDF");
      text = text.replace(/[ \t]+/g, " ").replace(/\n\s*\n+/g, "\n").trim();
      if (!text) throw new Error("No se encontró texto (¿PDF escaneado?)");
      ta.value = text; ui.cvText = text; ui.cvFile = file.name;
      pill.innerHTML = `<div class="file-pill">${icon("check")} ${esc(file.name)} · ${text.split(/\s+/).length} palabras extraídas</div>`;
      toast("CV cargado correctamente", "📄");
    } catch (err) {
      pill.innerHTML = `<div class="file-pill" style="background:#ffeef0;color:#d63447">⚠️ ${esc(err.message || "No se pudo leer el archivo")}. Pega el texto manualmente.</div>`;
    }
  }

  function runScan() {
    const cv = $("#cvText").value.trim(), job = $("#jobText").value.trim();
    ui.cvText = cv; ui.jobText = job;
    if (cv.length < 40) return toast("Sube o pega tu CV (mínimo 40 caracteres)", "⚠️");
    if (job.length < 8) return toast("Indica el puesto o la descripción de la vacante", "⚠️");
    const box = $("#scanResult");
    const steps = ["Extrayendo texto del CV", "Identificando palabras clave del puesto", "Evaluando estructura e impacto", "Generando recomendaciones"];
    box.innerHTML = `<div class="scanning"><div>
      <div class="scan-doc">${[18, 34, 50, 66, 82, 98, 114].map((t, i) => `<i style="top:${t}px;right:${i % 2 ? 36 : 16}px"></i>`).join("")}<span class="beam"></span></div>
      <h3 style="margin:20px 0 12px">Analizando tu CV con IA…</h3>
      <ul class="scan-steps" id="scanSteps">${steps.map((s) => `<li>${s}</li>`).join("")}</ul></div></div>`;
    box.scrollIntoView({ behavior: "smooth", block: "start" });
    let i = 0;
    const tick = setInterval(() => {
      $$("#scanSteps li")[i]?.classList.add("on"); i++;
      if (i > steps.length) {
        clearInterval(tick);
        ui.lastResult = analyzeCV(cv, job); state.lastScan = ui.lastResult; save();
        box.innerHTML = resultHTML(ui.lastResult); animateResult();
      }
    }, 520);
  }

  /* ==========================================================
     VISTA: VACANTES
     ========================================================== */
  function contactBox(job) {
    const c = job.contact;
    return `<div class="contact-box">
      <span class="c-title">👤 Contacto directo del reclutador</span>
      <div class="c-name">${esc(c.name)}<small>${esc(c.role)}</small></div>
      <div class="contact-line">${icon("phone")}<a href="tel:${c.phone.replace(/\s/g, "")}">${esc(c.phone)}</a></div>
      <div class="contact-line">${icon("mail")}<a href="mailto:${c.email}?subject=${encodeURIComponent("Postulación: " + job.title)}">${esc(c.email)}</a></div>
    </div>`;
  }

  function jobCard(j) {
    const c = company(j.companyId), m = jobMatch(j), applied = state.applied.includes(j.id), saved = state.saved.includes(j.id);
    return `<article class="card card-pad job">
      <div class="job-head">
        <a href="#/empresa/${c.id}">${avatar({ name: c.name, color: c.color, sq: true })}</a>
        <div class="grow">
          <h3>${esc(j.title)}</h3>
          <a class="co" href="#/empresa/${c.id}">${esc(c.name)} · ${esc(c.sector)}</a>
        </div>
        <span class="match chip ${matchClass(m)}" title="Afinidad con tu perfil">${m}% match</span>
      </div>
      <div class="job-meta">
        <span>${icon("pin")} ${j.modality} · ${esc(c.location.split("·")[0].trim())}</span>
        <span>${icon("clock")} ${j.duration}</span>
        <span>${icon("money")} ${esc(j.stipend)}</span>
        <span>${icon("users")} ${j.applicants} postulantes · ${j.posted}</span>
      </div>
      <p class="small" style="color:var(--ink-2)"><b>Perfil buscado:</b> ${esc(j.profile)}</p>
      <div class="chips">${j.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      ${contactBox(j)}
      <div class="job-actions">
        <button class="btn ${applied ? "btn-mint" : "btn-primary"}" data-action="apply" data-id="${j.id}">${applied ? icon("check") + " Postulado" : "Postularme"}</button>
        <button class="btn btn-ghost" data-action="message-contact" data-id="${j.id}">${icon("chat")} Mensaje</button>
        <button class="btn btn-ghost btn-icon" data-action="job-detail" data-id="${j.id}" aria-label="Ver detalle" title="Ver detalle">${icon("eye")}</button>
        <button class="btn btn-ghost btn-icon" style="${saved ? "color:var(--violet);border-color:var(--violet)" : ""}" data-action="save-job" data-id="${j.id}" aria-label="Guardar vacante" title="Guardar vacante">${icon("bookmark")}</button>
      </div>
    </article>`;
  }

  function filteredJobs() {
    const f = ui.jobFilter, q = norm(f.q);
    let list = JOBS.filter((j) => {
      const c = company(j.companyId);
      const hay = norm([j.title, c.name, c.sector, j.profile, ...j.skills].join(" "));
      return (!q || hay.includes(q)) && (!f.modality || j.modality === f.modality) && (!f.company || j.companyId === f.company) && (f.sort !== "saved" || state.saved.includes(j.id));
    });
    if (f.sort === "match") list.sort((a, b) => jobMatch(b) - jobMatch(a));
    if (f.sort === "applicants") list.sort((a, b) => a.applicants - b.applicants);
    return list;
  }

  function viewJobs() {
    const f = ui.jobFilter;
    view.innerHTML = `
      <div class="section-head">
        <div><span class="eyebrow">Job Board</span><h1>Vacantes de pasantía</h1><p>${JOBS.length} oportunidades de ${COMPANIES.length} empresas que valoran el talento por encima del título.</p></div>
        <div class="chips"><span class="chip mint">✓ ${state.applied.length} postulaciones</span><span class="chip violet">🔖 ${state.saved.length} guardadas</span></div>
      </div>
      <div class="filters">
        <input class="input" id="fq" type="search" placeholder="🔍 Puesto, habilidad o empresa…" value="${esc(f.q)}" style="flex:1;min-width:200px" />
        <select class="input" id="fmod"><option value="">Todas las modalidades</option>${["Remoto", "Híbrido", "Presencial"].map((m) => `<option ${f.modality === m ? "selected" : ""}>${m}</option>`).join("")}</select>
        <select class="input" id="fco"><option value="">Todas las empresas</option>${COMPANIES.map((c) => `<option value="${c.id}" ${f.company === c.id ? "selected" : ""}>${esc(c.name)}</option>`).join("")}</select>
        <select class="input" id="fsort">${[["match", "Mayor afinidad"], ["recent", "Más recientes"], ["applicants", "Menos competencia"], ["saved", "Solo guardadas"]].map(([v, l]) => `<option value="${v}" ${f.sort === v ? "selected" : ""}>${l}</option>`).join("")}</select>
      </div>
      <div class="jobs-grid" id="jobsGrid"></div>`;
    const draw = () => { const l = filteredJobs(); $("#jobsGrid").innerHTML = l.length ? l.map(jobCard).join("") : `<div class="card empty" style="grid-column:1/-1">😕 No hay vacantes con esos filtros.</div>`; };
    draw();
    $("#fq").addEventListener("input", (e) => { f.q = e.target.value; draw(); });
    $("#fmod").addEventListener("change", (e) => { f.modality = e.target.value; draw(); });
    $("#fco").addEventListener("change", (e) => { f.company = e.target.value; draw(); });
    $("#fsort").addEventListener("change", (e) => { f.sort = e.target.value; draw(); });
  }

  function jobDetail(id) {
    const j = JOBS.find((x) => x.id === id), c = company(j.companyId), m = jobMatch(j), applied = state.applied.includes(j.id);
    openModal(`
      <div class="modal-hero" style="background:linear-gradient(135deg,${c.color[0]},${c.color[1]})">
        <span class="avatar lg sq" style="background:rgb(255 255 255 / .22)">${esc(initials(c.name))}</span>
        <div><span class="eyebrow" style="color:#fff;opacity:.85">${esc(c.name)} · ${j.posted}</span><h2>${esc(j.title)}</h2>
        <div class="chips" style="margin-top:8px"><span class="chip">${j.modality}</span><span class="chip">${j.duration}</span><span class="chip">${esc(j.stipend)}</span><span class="chip">${m}% match</span></div></div>
      </div>
      <div class="modal-content">
        <div><h4>Sobre la pasantía</h4><p style="color:var(--ink-2)">${esc(j.description)}</p></div>
        <div><h4>Perfil de pasante que buscamos</h4><p style="color:var(--ink-2)">${esc(j.profile)}</p></div>
        <div><h4>Requisitos</h4><ul class="req">${j.requirements.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
        <div><h4>Habilidades deseadas</h4><div class="chips">${j.skills.map((s) => { const ok = state.me.skills.some((k) => norm(k) === norm(s) || norm(s).includes(norm(k))); return `<span class="chip ${ok ? "mint" : ""}">${ok ? "✓ " : ""}${esc(s)}</span>`; }).join("")}</div></div>
        ${contactBox(j)}
        <div class="job-actions">
          <button class="btn ${applied ? "btn-mint" : "btn-primary"}" data-action="apply" data-id="${j.id}">${applied ? "✓ Postulado" : "Postularme ahora"}</button>
          <button class="btn btn-ghost" data-action="message-contact" data-id="${j.id}">${icon("chat")} Enviar mensaje por Inbox</button>
          <a class="btn btn-ghost" href="#/empresa/${c.id}" data-action="close-modal">${icon("building")} Ver empresa</a>
        </div>
      </div>`);
  }

  /* ==========================================================
     VISTA: PERFIL DE EMPRESA
     ========================================================== */
  function viewCompany(id) {
    const c = company(id); if (!c) { location.hash = "#/vacantes"; return; }
    const jobs = JOBS.filter((j) => j.companyId === id), fol = state.following.includes(id);
    const recruiters = [...new Map(jobs.map((j) => [j.contact.email, j])).values()];
    view.innerHTML = `
      <a href="#/vacantes" class="btn btn-ghost btn-sm" style="margin-bottom:14px">${icon("back")} Volver a vacantes</a>
      <div class="card" style="overflow:hidden">
        <div class="company-cover" style="background:linear-gradient(135deg,${c.color[0]},${c.color[1]})"></div>
        <div class="company-head">
          ${avatar({ name: c.name, color: c.color, sq: true }, "xl")}
          <div class="grow" style="padding-bottom:6px">
            <h1 style="font-size:1.7rem">${esc(c.name)} <span style="color:var(--blue);font-size:1rem">✔</span></h1>
            <p class="muted">${esc(c.sector)} · ${esc(c.location)} · ${kfmt(c.followers + (fol && !c.following ? 1 : 0))} seguidores</p>
          </div>
          <div class="row wrap">
            <button class="btn ${fol ? "btn-ghost" : "btn-primary"}" data-action="follow" data-id="${c.id}">${fol ? "✓ Siguiendo" : "+ Seguir empresa"}</button>
            <button class="btn btn-ghost" data-action="message-company" data-id="${c.id}">${icon("chat")} Mensaje</button>
          </div>
        </div>
      </div>
      <div class="company-body">
        <div style="display:grid;gap:18px;min-width:0">
          <div class="card card-pad"><h3 class="card-title">Acerca de</h3><p style="color:var(--ink-2)">${esc(c.about)}</p></div>
          <div class="card card-pad"><h3 class="card-title">Cultura de trabajo</h3><ul class="culture">${c.culture.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div><h3 style="margin:6px 0 14px">Vacantes abiertas (${jobs.length})</h3><div class="jobs-grid">${jobs.map(jobCard).join("")}</div></div>
        </div>
        <aside class="sticky">
          <div class="card card-pad">
            <h3 class="card-title">Información</h3>
            <div class="side-list small">
              <div class="contact-line">${icon("building")} ${esc(c.sector)}</div>
              <div class="contact-line">${icon("users")} ${esc(c.size)}</div>
              <div class="contact-line">${icon("pin")} ${esc(c.location)}</div>
              <div class="contact-line">${icon("globe")} <a href="https://${c.website}" target="_blank" rel="noopener">${esc(c.website)}</a></div>
            </div>
          </div>
          <div class="card card-pad">
            <h3 class="card-title">Equipo de reclutamiento</h3>
            <div style="display:grid;gap:12px">${recruiters.map(contactBox).join("")}</div>
          </div>
        </aside>
      </div>`;
  }

  /* ==========================================================
     VISTA: INBOX (chat en tiempo real simulado)
     ========================================================== */
  const convoKey = (ref) => `${ref.type}:${ref.id || ref.name}`;
  function getOrCreateConvo(ref) {
    let c = state.convos.find((x) => convoKey(x.with) === convoKey(ref));
    if (!c) { c = { id: "m" + Date.now(), with: ref, unread: 0, messages: [] }; state.convos.unshift(c); save(); }
    return c;
  }

  function convoItem(c) {
    const e = ent(c.with), last = c.messages[c.messages.length - 1];
    return `<button class="convo ${c.id === ui.activeConvo ? "active" : ""} ${c.unread ? "unread" : ""}" data-action="open-convo" data-id="${c.id}">
      ${avatar(e)}
      <div class="grow"><h5><span>${esc(e.name)}</span><small>${last ? esc(last.time) : ""}</small></h5>
      <div class="row"><p class="grow">${last ? (last.from === "me" ? "Tú: " : "") + esc(last.text) : "Nueva conversación"}</p>${c.unread ? `<em class="badge">${c.unread}</em>` : ""}</div></div>
    </button>`;
  }

  function viewInbox(id) {
    if (id) ui.activeConvo = id;
    if (!state.convos.find((c) => c.id === ui.activeConvo)) ui.activeConvo = window.innerWidth > 900 ? state.convos[0]?.id : null;
    view.innerHTML = `
      <div class="card inbox ${id ? "show-chat" : ""}" id="inbox">
        <div class="convos">
          <div class="convos-head">
            <div class="row"><h2 class="grow" style="font-size:1.25rem">Mensajes</h2><span class="chip blue">${state.convos.length} chats</span></div>
            <input class="input" id="convoSearch" type="search" placeholder="Buscar conversación…" style="padding:9px 14px" />
          </div>
          <div class="convo-list" id="convoList"></div>
        </div>
        <div class="chat" id="chat"></div>
      </div>`;
    drawConvos(); drawChat();
    $("#convoSearch").addEventListener("input", (e) => drawConvos(e.target.value));
  }
  function drawConvos(q = "") {
    const list = $("#convoList"); if (!list) return;
    const n = norm(q);
    list.innerHTML = state.convos.filter((c) => !n || norm(ent(c.with).name).includes(n)).map(convoItem).join("") || `<p class="empty">Sin resultados</p>`;
  }
  function drawChat() {
    const box = $("#chat"); if (!box) return;
    const c = state.convos.find((x) => x.id === ui.activeConvo);
    if (!c) { box.innerHTML = `<div class="result-empty"><div><div class="ill">${icon("chat")}</div><h3>Selecciona una conversación</h3><p class="muted">Escribe a reclutadores, empresas o colegas.</p></div></div>`; return; }
    if (c.unread) { c.unread = 0; save(); updateChrome(); drawConvos(); }
    const e = ent(c.with);
    box.innerHTML = `
      <div class="chat-head">
        <button class="icon-btn back-btn" data-action="inbox-back" aria-label="Volver">${icon("back")}</button>
        <a href="${e.link}">${avatar(e)}</a>
        <div class="grow"><h4>${esc(e.name)}</h4><span class="online">En línea</span></div>
        <a class="icon-btn" href="${e.link}" aria-label="Ver perfil">${icon("user")}</a>
      </div>
      <div class="chat-body" id="chatBody">
        ${c.messages.length ? c.messages.map((m) => `<div class="msg ${m.from}">${esc(m.text)}<time>${esc(m.time)}</time></div>`).join("") : `<p class="muted small" style="text-align:center;margin:auto">Inicia la conversación con ${esc(first(e.name))} 👋</p>`}
      </div>
      <div class="quick-replies">${["¡Gracias! 😊", "¿Cuándo podemos hablar?", "📎 Te comparto mi CV", "Me interesa la vacante"].map((q) => `<button data-action="quick" data-text="${esc(q)}">${esc(q)}</button>`).join("")}</div>
      <form class="chat-form" data-form="chat">
        <input id="chatInput" placeholder="Escribe un mensaje…" autocomplete="off" value="${esc(ui.draft || "")}" />
        <button class="btn btn-primary" aria-label="Enviar">${icon("send")}</button>
      </form>`;
    ui.draft = "";
    const body = $("#chatBody"); body.scrollTop = body.scrollHeight;
  }

  function smartReply(text, c) {
    const t = norm(text), e = ent(c.with);
    if (/cv|curricul|hoja de vida/.test(t)) return "¡Recibido! Lo reviso con el equipo y te cuento en máximo 48 horas 🙌";
    if (/vacante|pasant|practica|postul/.test(t)) return `¡Qué bueno, ${first(state.me.name)}! Tu perfil encaja muy bien. ¿Tienes disponibilidad para una entrevista esta semana?`;
    if (/hablar|llamada|entrevista|reunion|disponib/.test(t)) return "¿Te parece el jueves a las 10:00 a. m.? Te envío el enlace de Google Meet por aquí. 📅";
    if (/gracias/.test(t)) return "¡Con mucho gusto! Cualquier duda me escribes por aquí. 😊";
    if (/hola|buen/.test(t)) return `¡Hola! Soy ${first(e.name)}, ¿en qué te puedo ayudar?`;
    return AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
  }

  function sendMessage(text) {
    const c = state.convos.find((x) => x.id === ui.activeConvo); if (!c || !text.trim()) return;
    c.messages.push({ from: "me", text: text.trim(), time: nowTime() });
    state.convos = [c, ...state.convos.filter((x) => x !== c)]; save();
    drawChat(); drawConvos();
    const cid = c.id;
    setTimeout(() => {
      const body = $("#chatBody");
      if (ui.activeConvo === cid && body) { body.insertAdjacentHTML("beforeend", `<div class="msg them typing" id="typing"><i></i><i></i><i></i></div>`); body.scrollTop = body.scrollHeight; }
    }, 600);
    setTimeout(() => {
      const reply = smartReply(text, c);
      c.messages.push({ from: "them", text: reply, time: nowTime() });
      const viewing = ui.route === "inbox" && ui.activeConvo === cid;
      if (!viewing) { c.unread = (c.unread || 0) + 1; toast(`<b>${esc(ent(c.with).name)}</b>: ${esc(reply.slice(0, 50))}…`, "💬"); }
      save(); updateChrome();
      if (viewing) { const inp = $("#chatInput"); ui.draft = inp?.value || ""; drawChat(); $("#chatInput")?.focus(); }
      drawConvos();
    }, 1800 + Math.random() * 1200);
  }

  function messageJobContact(id) {
    const j = JOBS.find((x) => x.id === id), k = j.contact;
    const ref = k.personId ? { type: "person", id: k.personId } : { type: "contact", name: k.name, role: k.role, companyId: j.companyId };
    const c = getOrCreateConvo(ref);
    ui.draft = `Hola ${first(k.name)}, ¡un gusto saludarte! Me interesa mucho la vacante "${j.title}" y me gustaría saber más sobre el proceso.`;
    closeModal(); location.hash = `#/inbox/${c.id}`;
  }

  /* ==========================================================
     VISTA: RED DE CONTACTOS Y EMPRESAS
     ========================================================== */
  function personCard(p) {
    const con = state.connected.includes(p.id), pen = state.pending.includes(p.id);
    return `<div class="card person">
      ${avatar(p, "lg")}
      <h4>${esc(p.name)} ${p.recruiter ? '<span class="chip violet" style="padding:2px 8px;font-size:.66rem">Reclutador/a</span>' : ""}</h4>
      <p>${esc(p.headline)}</p>
      <span class="muted small">🤝 ${p.mutual} contactos en común</span>
      <div class="row" style="margin-top:6px">
        ${con ? `<button class="btn btn-primary btn-sm" data-action="message-person" data-id="${p.id}">${icon("chat")} Mensaje</button><button class="btn btn-ghost btn-sm" data-action="disconnect" data-id="${p.id}" title="Eliminar contacto">✓ Conectado</button>`
        : `<button class="btn ${pen ? "btn-ghost" : "btn-primary"} btn-sm" data-action="connect" data-id="${p.id}" ${pen ? "disabled" : ""}>${pen ? "⏳ Pendiente" : "+ Conectar"}</button>`}
      </div>
    </div>`;
  }
  function companyCard(c) {
    const fol = state.following.includes(c.id), n = JOBS.filter((j) => j.companyId === c.id).length;
    return `<div class="card card-pad company-card">
      <div class="row">${avatar({ name: c.name, color: c.color, sq: true }, "lg")}<div class="grow"><h4><a href="#/empresa/${c.id}">${esc(c.name)}</a></h4><p class="muted small">${esc(c.sector)}</p></div></div>
      <p class="small" style="color:var(--ink-2)">${esc(c.about.slice(0, 110))}…</p>
      <div class="chips"><span class="chip">${kfmt(c.followers)} seguidores</span><span class="chip blue">${n} vacante${n !== 1 ? "s" : ""}</span></div>
      <div class="row"><button class="btn ${fol ? "btn-ghost" : "btn-primary"} btn-sm grow" data-action="follow" data-id="${c.id}">${fol ? "✓ Siguiendo" : "+ Seguir"}</button><a class="btn btn-ghost btn-sm grow" href="#/empresa/${c.id}">Ver perfil</a></div>
    </div>`;
  }
  function viewNetwork() {
    const tab = ui.netTab;
    const contacts = PEOPLE.filter((p) => state.connected.includes(p.id));
    const sugg = PEOPLE.filter((p) => !state.connected.includes(p.id));
    const tabs = [["contactos", `Mis contactos (${contacts.length})`], ["sugerencias", `Sugerencias (${sugg.length})`], ["empresas", `Empresas (${state.following.length} seguidas)`]];
    let body = "";
    if (tab === "contactos") body = contacts.length ? `<div class="people-grid">${contacts.map(personCard).join("")}</div>` : `<div class="card empty">Aún no tienes contactos. ¡Revisa las sugerencias!</div>`;
    if (tab === "sugerencias") body = sugg.length ? `<div class="people-grid">${sugg.map(personCard).join("")}</div>` : `<div class="card empty">¡Ya conectaste con todos! 🎉</div>`;
    if (tab === "empresas") body = `<div class="grid-cards">${[...COMPANIES].sort((a, b) => state.following.includes(b.id) - state.following.includes(a.id)).map(companyCard).join("")}</div>`;
    view.innerHTML = `
      <div class="section-head">
        <div><span class="eyebrow">Networking</span><h1>Red de contactos y empresas</h1><p>Gestiona tus conexiones y sigue a las empresas donde te gustaría trabajar.</p></div>
        <div class="tabs">${tabs.map(([k, l]) => `<button class="${tab === k ? "active" : ""}" data-action="net-tab" data-tab="${k}">${l}</button>`).join("")}</div>
      </div>${body}`;
  }

  /* ==========================================================
     VISTA: PERFIL DEL CANDIDATO
     ========================================================== */
  function viewProfile() {
    const me = state.me, s = me.cv.score;
    view.innerHTML = `
      <div class="card" style="overflow:hidden">
        <div class="profile-cover"></div>
        <div class="profile-head">
          ${avatar(meEnt(), "xl")}
          <div class="grow" style="padding-bottom:6px;min-width:240px">
            <h1>${esc(me.name)}</h1>
            <p style="color:var(--ink-2)">${esc(me.headline)}</p>
            <p class="muted small">${icon("pin").replace("<svg", '<svg style="display:inline;width:14px;height:14px;vertical-align:-2px"')} ${esc(me.location)} · ${state.connected.length + 120} conexiones</p>
          </div>
          <div class="row wrap">
            <button class="btn btn-primary" data-action="edit-profile">${icon("edit")} Editar perfil</button>
            <button class="btn btn-ghost" data-action="share-profile">${icon("share")} Compartir</button>
          </div>
        </div>
      </div>
      <div class="profile-grid">
        <div style="display:grid;gap:18px;min-width:0">
          <div class="card card-pad"><h3 class="card-title">Sobre mí</h3><p style="color:var(--ink-2)">${esc(me.bio)}</p></div>
          <div class="card card-pad">
            <h3 class="card-title">Habilidades <span class="muted small">${me.skills.length}</span></h3>
            <div class="chips">${me.skills.map((k, i) => `<span class="chip blue">${esc(k)} <button data-action="rm-skill" data-i="${i}" aria-label="Quitar ${esc(k)}" style="border:0;background:none;padding:0;color:inherit;opacity:.6">✕</button></span>`).join("")}</div>
            <form class="skill-edit" data-form="skill"><input class="input" name="s" placeholder="Añadir habilidad (ej. TypeScript)" style="padding:9px 14px" required /><button class="btn btn-ghost">${icon("plus")} Añadir</button></form>
          </div>
          <div class="card card-pad">
            <h3 class="card-title">Portafolio</h3>
            <div class="portfolio">${me.portfolio.map((p) => `
              <div class="pf"><div class="pf-img" style="background:linear-gradient(135deg,${p.color[0]},${p.color[1]})">${esc(p.title)}</div>
              <div class="pf-body"><b>${esc(p.title)}</b><p>${esc(p.desc)}</p><div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div></div>`).join("")}
            </div>
          </div>
          <div class="card card-pad">
            <h3 class="card-title">CV optimizado <span class="chip ${s >= 80 ? "mint" : "blue"}">🤖 Puntaje IA: ${s}/100</span></h3>
            <div class="cv-doc">
              <div><h2 style="font-size:1.3rem">${esc(me.name)}</h2><p class="muted small">${esc(me.headline)} · ${esc(me.email)} · ${esc(me.phone)}</p></div>
              ${me.cv.sections.map((sec) => `<div><h4>${esc(sec.title)}</h4><ul>${sec.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}
              <div><h4>Habilidades</h4><p class="small" style="color:var(--ink-2)">${me.skills.map(esc).join(" · ")}</p></div>
            </div>
            <div class="row wrap" style="margin-top:14px">
              <button class="btn btn-primary" data-action="download-cv">${icon("download")} Descargar CV</button>
              <a href="#/scanner" class="btn btn-ghost">${icon("spark")} Re-evaluar con IA</a>
            </div>
          </div>
        </div>
        <aside class="sticky">
          <div class="card card-pad">
            <h3 class="card-title">Estadísticas</h3>
            <div class="badges">
              <div class="badge-item"><b style="font-size:1.4rem">${me.stats.views}</b><small>Visitas al perfil</small></div>
              <div class="badge-item"><b style="font-size:1.4rem">${state.applied.length}</b><small>Postulaciones</small></div>
              <div class="badge-item"><b style="font-size:1.4rem">${state.following.length}</b><small>Empresas seguidas</small></div>
              <div class="badge-item"><b style="font-size:1.4rem">${state.doneGuides.length}</b><small>Guías completadas</small></div>
            </div>
          </div>
          <div class="card card-pad">
            <h3 class="card-title">Insignias</h3>
            <div class="badges">${me.badges.map((b) => `<div class="badge-item" title="${esc(b.desc)}"><span class="b-ico">${b.icon}</span><b>${esc(b.name)}</b><small>${esc(b.desc)}</small></div>`).join("")}</div>
          </div>
          <div class="card card-pad">
            <h3 class="card-title">Contacto</h3>
            <div class="side-list small">
              <div class="contact-line">${icon("mail")} ${esc(me.email)}</div>
              <div class="contact-line">${icon("phone")} ${esc(me.phone)}</div>
              <div class="contact-line">${icon("pin")} ${esc(me.location)}</div>
            </div>
          </div>
        </aside>
      </div>`;
  }

  function editProfile() {
    const me = state.me;
    openModal(`
      <div class="modal-hero" style="background:var(--grad)"><h2>Editar perfil</h2></div>
      <form class="modal-content" data-form="profile">
        <div><label class="lbl" for="pfName">Nombre completo</label><input class="input" id="pfName" name="name" value="${esc(me.name)}" required /></div>
        <div><label class="lbl" for="pfHead">Titular</label><input class="input" id="pfHead" name="headline" value="${esc(me.headline)}" required /></div>
        <div><label class="lbl" for="pfLoc">Ubicación</label><input class="input" id="pfLoc" name="location" value="${esc(me.location)}" /></div>
        <div><label class="lbl" for="pfBio">Biografía</label><textarea class="textarea" id="pfBio" name="bio">${esc(me.bio)}</textarea></div>
        <div class="row"><label class="grow"><span class="lbl">Correo</span><input class="input" name="email" type="email" value="${esc(me.email)}" /></label><label class="grow"><span class="lbl">Teléfono</span><input class="input" name="phone" type="tel" value="${esc(me.phone)}" /></label></div>
        <button class="btn btn-primary">${icon("check")} Guardar cambios</button>
      </form>`);
  }

  function downloadCV() {
    const me = state.me;
    const html = `<html><head><meta charset="utf-8"><style>body{font-family:Calibri,Arial;font-size:11pt}h1{margin:0;color:#2563FF}h2{font-size:12pt;color:#2563FF;border-bottom:1px solid #ddd}</style></head><body>
      <h1>${esc(me.name)}</h1><p>${esc(me.headline)}<br>${esc(me.email)} · ${esc(me.phone)} · ${esc(me.location)}</p>
      <h2>Perfil</h2><p>${esc(me.bio)}</p>
      ${me.cv.sections.map((s) => `<h2>${esc(s.title)}</h2><ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`).join("")}
      <h2>Habilidades</h2><p>${me.skills.map(esc).join(" · ")}</p></body></html>`;
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(new Blob(["\ufeff", html], { type: "application/msword" })), download: `CV_${me.name.replace(/\s+/g, "_")}.doc` });
    a.click(); toast("CV descargado", "📥");
  }

  /* ==========================================================
     VISTA: BÚSQUEDA
     ========================================================== */
  function viewSearch(q = "") {
    const n = norm(q);
    const jobs = JOBS.filter((j) => norm([j.title, j.profile, ...j.skills, company(j.companyId).name].join(" ")).includes(n));
    const cos = COMPANIES.filter((c) => norm(c.name + c.sector + c.about).includes(n));
    const ppl = PEOPLE.filter((p) => norm(p.name + p.headline).includes(n));
    $("#globalSearch").value = q;
    view.innerHTML = `
      <div class="section-head"><div><span class="eyebrow">Búsqueda</span><h1>Resultados para “${esc(q)}”</h1><p>${jobs.length + cos.length + ppl.length} resultados</p></div></div>
      ${jobs.length ? `<h3 style="margin:8px 0 12px">Vacantes (${jobs.length})</h3><div class="jobs-grid">${jobs.map(jobCard).join("")}</div>` : ""}
      ${cos.length ? `<h3 style="margin:24px 0 12px">Empresas (${cos.length})</h3><div class="grid-cards">${cos.map(companyCard).join("")}</div>` : ""}
      ${ppl.length ? `<h3 style="margin:24px 0 12px">Personas (${ppl.length})</h3><div class="people-grid">${ppl.map(personCard).join("")}</div>` : ""}
      ${!jobs.length && !cos.length && !ppl.length ? `<div class="card empty">🔍 No encontramos resultados. Prueba con “React”, “Datos” o “Diseño”.</div>` : ""}`;
  }

  /* ==========================================================
     ROUTER
     ========================================================== */
  const ROUTES = { feed: viewFeed, academia: viewAcademy, scanner: viewScanner, vacantes: viewJobs, empresa: viewCompany, inbox: viewInbox, red: viewNetwork, perfil: viewProfile, buscar: viewSearch };
  const NAV_MAP = { empresa: "vacantes", buscar: "" };

  function render() {
    const [r, ...rest] = location.hash.replace(/^#\/?/, "").split("/");
    const name = ROUTES[r] ? r : "feed";
    const param = rest.length ? decodeURIComponent(rest.join("/")) : undefined;
    const changed = ui.route !== name;
    ui.route = name;
    ROUTES[name](param);
    hydrateIcons(view);
    const navKey = name in NAV_MAP ? NAV_MAP[name] : name;
    $$("[data-route]").forEach((a) => { const on = a.dataset.route === navKey; a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
    updateChrome();
    return changed;
  }
  function navigate() {
    closeSidebar(); closeModal();
    view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";
    render(); window.scrollTo({ top: 0 });
  }
  // Re-render conservando scroll (para acciones dentro de la vista)
  function rerender() { const y = window.scrollY; render(); window.scrollTo({ top: y }); }

  /* ==========================================================
     ACCIONES (delegación de eventos)
     ========================================================== */
  const ACTIONS = {
    "close-modal": () => closeModal(),
    "post-tag": (el) => { ui.postTag = el.dataset.tag; $$(".tag-btn").forEach((b) => b.classList.toggle("active", b === el)); },
    publish: () => {
      const ta = $("#postText"), text = ta.value.trim();
      if (!text) return toast("Escribe algo para publicar", "✍️");
      state.posts.unshift({ id: "p" + Date.now(), author: { type: "person", id: "u0" }, time: "Justo ahora", text, tag: ui.postTag, likes: 0, comments: 0, shares: 0, liked: false, commentsList: [] });
      save(); rerender(); toast("¡Publicación compartida en el feed!", "🎉");
      setTimeout(() => { const p = state.posts[0]; if (p.likes === 0) { p.likes = 3; save(); if (ui.route === "feed") rerender(); toast("A 3 personas les gusta tu publicación", "❤️"); } }, 4000);
    },
    like: (el) => { const p = state.posts.find((x) => x.id === el.dataset.id); p.liked = !p.liked; p.likes += p.liked ? 1 : -1; save(); rerender(); },
    "toggle-comments": (el) => { const id = el.dataset.id; ui.openComments.has(id) ? ui.openComments.delete(id) : ui.openComments.add(id); rerender(); $(`[data-form="comment"][data-id="${id}"] input`)?.focus({ preventScroll: true }); },
    share: (el) => { const p = state.posts.find((x) => x.id === el.dataset.id); p.shares++; save(); navigator.clipboard?.writeText(p.text).catch(() => {}); rerender(); toast("Enlace copiado al portapapeles", "🔗"); },
    follow: (el) => {
      const id = el.dataset.id, c = company(id), i = state.following.indexOf(id);
      if (i >= 0) { state.following.splice(i, 1); toast(`Dejaste de seguir a ${c.name}`, "👋"); } else { state.following.push(id); toast(`Ahora sigues a ${c.name}`, "⭐"); }
      save(); rerender();
    },
    connect: (el) => {
      const id = el.dataset.id, p = person(id);
      state.pending.push(id); save(); rerender(); toast(`Solicitud enviada a ${p.name}`, "🤝");
      setTimeout(() => { state.pending = state.pending.filter((x) => x !== id); state.connected.push(id); save(); toast(`<b>${esc(p.name)}</b> aceptó tu solicitud`, "🎉"); if (["red", "feed"].includes(ui.route)) rerender(); }, 3000);
    },
    disconnect: (el) => { state.connected = state.connected.filter((x) => x !== el.dataset.id); save(); rerender(); toast("Contacto eliminado", "👋"); },
    "net-tab": (el) => { ui.netTab = el.dataset.tab; rerender(); },
    "acad-cat": (el) => { ui.acadCat = el.dataset.cat; rerender(); },
    "open-guide": (el) => openGuide(el.dataset.id),
    "guide-done": (el) => {
      const id = el.dataset.id, i = state.doneGuides.indexOf(id);
      if (i >= 0) state.doneGuides.splice(i, 1); else { state.doneGuides.push(id); toast("¡Guía completada! +10 XP", "🎓"); }
      save(); openGuide(id); rerender();
    },
    "download-template": (el) => downloadTemplate(el.dataset.id),
    "next-tip": () => { ui.tipIdx = (ui.tipIdx + 1) % ACADEMY.tips.length; rerender(); },
    quiz: (el) => { const q = ACADEMY.quiz[ui.quiz.i], i = +el.dataset.i; ui.quiz.answered = i; if (i === q.answer) ui.quiz.score++; rerender(); },
    "quiz-next": () => { ui.quiz.i++; ui.quiz.answered = null; rerender(); },
    "quiz-reset": () => { ui.quiz = { i: 0, score: 0, answered: null }; rerender(); },
    "sample-cv": () => { $("#cvText").value = SAMPLE_CV; ui.cvText = SAMPLE_CV; toast("CV de ejemplo cargado", "✨"); },
    "save-score": () => {
      state.me.cv.score = ui.lastResult.score; save(); updateChrome();
      toast(`Puntaje ${ui.lastResult.score}/100 guardado en tu perfil`, "🏅");
    },
    apply: (el) => {
      const id = el.dataset.id, j = JOBS.find((x) => x.id === id), i = state.applied.indexOf(id);
      if (i >= 0) { state.applied.splice(i, 1); toast("Postulación retirada", "↩️"); }
      else { state.applied.push(id); toast(`¡Te postulaste a “${j.title}”! ${esc(first(j.contact.name))} recibirá tu perfil.`, "🚀"); }
      save(); if (modal.open) jobDetail(id); rerender();
    },
    "save-job": (el) => { const id = el.dataset.id, i = state.saved.indexOf(id); i >= 0 ? state.saved.splice(i, 1) : state.saved.push(id); save(); rerender(); toast(i >= 0 ? "Vacante eliminada de guardadas" : "Vacante guardada", "🔖"); },
    "job-detail": (el) => jobDetail(el.dataset.id),
    "message-contact": (el) => messageJobContact(el.dataset.id),
    "message-company": (el) => { const c = getOrCreateConvo({ type: "company", id: el.dataset.id }); location.hash = `#/inbox/${c.id}`; },
    "message-person": (el) => { const c = getOrCreateConvo({ type: "person", id: el.dataset.id }); location.hash = `#/inbox/${c.id}`; },
    "open-convo": (el) => { ui.activeConvo = el.dataset.id; history.replaceState(null, "", `#/inbox/${el.dataset.id}`); $("#inbox").classList.add("show-chat"); drawConvos($("#convoSearch").value); drawChat(); $("#chatInput").focus(); },
    "inbox-back": () => { $("#inbox").classList.remove("show-chat"); history.replaceState(null, "", "#/inbox"); },
    quick: (el) => sendMessage(el.dataset.text),
    "edit-profile": () => editProfile(),
    "share-profile": () => { navigator.clipboard?.writeText(location.href).catch(() => {}); toast("Enlace de tu perfil copiado", "🔗"); },
    "rm-skill": (el) => { state.me.skills.splice(+el.dataset.i, 1); save(); rerender(); },
    "download-cv": () => downloadCV(),
  };

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]"); if (!el) return;
    const fn = ACTIONS[el.dataset.action]; if (!fn) return;
    if (el.tagName !== "A") e.preventDefault();
    fn(el, e);
  });

  document.addEventListener("submit", (e) => {
    const f = e.target.closest("[data-form]"); if (!f) return;
    e.preventDefault();
    const type = f.dataset.form, data = Object.fromEntries(new FormData(f));
    if (type === "comment") {
      const p = state.posts.find((x) => x.id === f.dataset.id);
      p.commentsList.push({ who: "u0", text: data.c.trim() }); p.comments++; save(); rerender();
      $(`[data-form="comment"][data-id="${p.id}"] input`)?.focus({ preventScroll: true });
    }
    if (type === "chat") { const inp = $("#chatInput"); const t = inp.value; inp.value = ""; sendMessage(t); $("#chatInput")?.focus(); }
    if (type === "scan") runScan();
    if (type === "skill") { const s = data.s.trim(); if (s && !state.me.skills.some((k) => norm(k) === norm(s))) { state.me.skills.push(s); save(); rerender(); toast(`Habilidad “${esc(s)}” añadida`, "💪"); } }
    if (type === "profile") { Object.assign(state.me, data); save(); closeModal(); rerender(); toast("Perfil actualizado", "✅"); }
  });

  // Atajo: Ctrl/⌘ + K para buscar
  document.addEventListener("keydown", (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("#globalSearch").focus(); } });

  /* ---------------- Mensaje entrante simulado (tiempo real) ---------------- */
  function simulateIncoming() {
    const ref = { type: "person", id: "u6" };
    if (state.convos.some((c) => convoKey(c.with) === convoKey(ref))) return;
    setTimeout(() => {
      const c = getOrCreateConvo(ref);
      c.messages.push({ from: "them", text: `¡Hola ${first(state.me.name)}! Soy Sofía de Verde Finanzas 💚. Vi tu perfil y creo que encajarías en nuestra práctica de Análisis de Datos. ¿Te gustaría conversar?`, time: nowTime() });
      const viewing = ui.route === "inbox" && ui.activeConvo === c.id;
      if (!viewing) c.unread = 1;
      save(); updateChrome();
      toast("<b>Sofía Ramírez</b> (Verde Finanzas) te envió un mensaje", "💬");
      if (ui.route === "inbox") { drawConvos(); if (viewing) drawChat(); }
    }, 20000);
  }

  /* ---------------- Inicio ---------------- */
  hydrateIcons();
  window.addEventListener("hashchange", navigate);
  if (!location.hash) history.replaceState(null, "", "#/feed");
  render();
  simulateIncoming();
})();
