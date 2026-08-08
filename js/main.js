/* =========================================================
   INSIGHT '27 — main.js
   All interactive data for tracks and the 5 Ws live here so
   the HTML stays clean and content is easy to edit.
   ========================================================= */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Tracks data ---------------- */
  const TRACKS = [
    {
      n: "01", t: "AI & Machine Learning",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M17 5l2 2M7 17l-2 2"/></svg>',
      title: "Artificial Intelligence & Machine Learning",
      desc: "The algorithmic frontier — from core learning theory to the agentic systems reshaping how machines perceive, generate, decide, and act beside us.",
      chips: ["Deep Learning", "LLMs & Alignment", "Computer Vision", "Reinforcement Learning", "Responsible AI", "Edge & Robotics"],
      meta: "Track Chair: Dr. Maya Srinivasan · Best Paper Award sponsored by the AI Forum"
    },
    {
      n: "02", t: "Sustainable Engineering",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 4C9 4 4 10 4 20c10 0 16-5 16-16Z"/><path d="M4 20C8 12 12 8 20 8"/></svg>',
      title: "Sustainable Engineering & Green Technologies",
      desc: "How materials, infrastructure and manufacturing must re-engineer themselves for low-carbon duty — without surrendering performance or profit.",
      chips: ["Circular Economy", "Green Chemistry", "Smart Grids", "Life-Cycle Analysis", "Earth-Carbon Materials", "Clean Manufacturing"],
      meta: "Track Chair: Prof. Anuradha Bansal · Green Innovation Grant announced"
    },
    {
      n: "03", t: "Healthcare & Biomedical",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12h4l2-7 4 10 2-5 3 2h5"/></svg>',
      title: "Healthcare & Biomedical Innovation",
      desc: "From bench to bedside — sensors, bioinformatics and next-generation therapeutics engineered to put clinic-grade diagnostics into home and field.",
      chips: ["Biologics", "Digital Health", "IoT Diagnostics", "Oncology Omics", "Pharma 4.0", "Rehab & Prosthetics"],
      meta: "Track Chair: Dr. Elena Petrova · open biosensor entry demo"
    },
    {
      n: "04", t: "Materials & Nanotechnology",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><circle cx="12" cy="12" r="3"/></svg>',
      title: "Advanced Materials & Nanotechnology",
      desc: "Molecules, meta-materials and matter tuned to the atomic scale — the quiet physics that engineering problems are solved with.",
      chips: ["Nanomaterials", "Smart Materials", "Energy Storage", "Metamaterials", "Nano-Electronics", "Composite Chemistries"],
      meta: "Track Chair: Prof. David Okoro · best poster prize from industry panel"
    },
    {
      n: "05", t: "Data & Cybersecurity",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg>',
      title: "Data Science & Cybersecurity",
      desc: "Trust at information scale — analytics that reveal, cryptography that protects, and forensic craft that keeps the digital society honest.",
      chips: ["Privacy Engineering", "Digital Forensics", "Quantum-Safe Crypto", "Trustworthy AI", "Threat Intelligence", "Big-Data Architectural"],
      meta: "Track Chair: Dr. Priya Iyer · hands-on CTF sprint"
    },
    {
      n: "06", t: "Energy & Climate",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
      title: "Renewable Energy & Climate Action",
      desc: "The storage problem, the grid problem and the policy problem — renewable scholarship operating at the junction of watts and conventions.",
      chips: ["Photovoltaics", "Green Storage", "Carbon Capture", "Climate Modelling", "Agrivoltaics", "Just Transition"],
      meta: "Track Chair: Prof. Rajesh Mehta · net-zero poster symposium"
    },
    {
      n: "07", t: "Business & Finance",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
      title: "Emerging Business Models & Finance",
      desc: "Value built on data, reputation and sunlight — new firms, new markets and the financial instruments the next decade runs on.",
      chips: ["FinTech", "Behavioural Finance", "ESG & Green Bonds", "Digital Markets", "Innovation Policy", "Web3 & DeFi"],
      meta: "Track Chair: Dr. Aditya Verma · market simulation workshop"
    },
    {
      n: "08", t: "Society · Culture · Humanity",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 5.4 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.4-4-9s1.5-6.4 4-9Z"/></svg>',
      title: "Society, Culture & Humanities 5.0",
      desc: "What machines should never mediate — digital culture, civil institutions and the human record in an automating age.",
      chips: ["Digital Humanities", "Cultural Heritage", "Public Policy", "Smart Cities", "Media Studies", "Future of Work"],
      meta: "Track Chair: Dr. Haneen Li · Society 5.0 roundtable"
    }
  ];

  /* ---------------- 5 Ws data ---------------- */
  const WS = [
    {
      q: "Why", letter: "Y", tag: "Visibility",
      a: "The peerless forum of the year — abstracts get indexed-ISBN, a DOI, and a podium before peers, editors, and chairs."
    },
    {
      q: "What", letter: "W", tag: "The Conference",
      a: "A three-day hybrid assembly across 8 tracks — keynotes, panels, posters, and published proceedings, all live-streamed."
    },
    {
      q: "Who", letter: "W", tag: "The People",
      a: "Scholars, faculty, doctoral candidates, and industry R&D from 25+ nations — with talks ranged from undergraduate pitches to panels."
    },
    {
      q: "When", letter: "W", tag: "The Dates",
      a: "25–27 February 2027. Abstracts close 30 November 2026; early-bird registration till 10 January 2027."
    },
    {
      q: "Where", letter: "W", tag: "The Place",
      a: "Jagannath Hitkari College, Alwar (India), hybrid-streamed from partner nodes in Asia, Europe, and Africa."
    }
  ];

  const svgChevron = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';

  /* ---------------- Header: scroll state ---------------- */
  const header = $(".header");
  function onScrollHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------------- Mobile drawer ---------------- */
  const burger = $("#burger");
  const drawer = $("#drawer");
  function closeDrawer() {
    drawer.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  burger.addEventListener("click", () => {
    const open = drawer.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$(".mobile-drawer .nav-link", drawer).forEach((l) => l.addEventListener("click", closeDrawer));
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  /* ---------------- Smooth reveal on scroll ---------------- */
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); revealIO.unobserve(en.target); }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  function watchReveals(scope = document) {
    $$(".reveal:not(.is-in)", scope).forEach((el) => revealIO.observe(el));
  }
  watchReveals();

  /* ---------------- Smooth scrolling for anchor links ---------------- */
  const scrollOffset = () => header.offsetHeight + 12;
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeDrawer();
      const top = id === "#top" ? 0 : target.getBoundingClientRect().top + window.scrollY - scrollOffset();
      window.scrollTo({ top: Math.max(top, 0), behavior: reduceMotion ? "auto" : "smooth" });
      history.replaceState(null, "", id);
    });
  });

  /* ---------------- Scroll progress bar ---------------- */
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  header.appendChild(progressBar);
  function updateProgress() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    progressBar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------------- Counters ---------------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const dur = 1400, start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const countIO = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { animateCount(en.target); countIO.unobserve(en.target); } }),
    { threshold: 0.5 }
  );
  $$(".count").forEach((el) => countIO.observe(el));

  /* ---------------- Scrollspy ---------------- */
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-link, .mobile-drawer .nav-link");
  const spyIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
        }
      });
    },
    { rootMargin: "-42% 0px -52% 0px" }
  );
  sections.forEach((s) => spyIO.observe(s));

  /* ---------------- Tracks ---------------- */
  const rail = $("#trackRail");
  const stage = $("#trackStage");
  function buildTracks() {
    rail.innerHTML = TRACKS.map(
      (t, i) => `<button class="track-tab${i === 0 ? " is-active" : ""}" data-idx="${i}" role="tab" aria-selected="${i === 0}">
        <span class="num">${t.n}</span><span class="tt">${t.t}</span></button>`
    ).join("");

    stage.innerHTML = TRACKS.map(
      (t, i) => `<article class="track-panel glass${i === 0 ? " is-active" : ""}" data-idx="${i}" role="tabpanel">
        <span class="track-ghost" aria-hidden="true">${t.n}</span>
        <div class="track-head">
          <span class="track-icon">${t.icon}</span>
          <h3><span class="num">${t.n}</span><span>${t.title}</span></h3>
          <p class="track-desc">${t.desc}</p>
          <div class="track-chips">${t.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>
        </div>
        <div class="track-foot">
          <span class="tf">${t.meta}</span>
          <a class="sp-more" href="mailto:irc2027@jhcollege.ac.in">Submit here ${svgChevron}</a>
        </div>
      </article>`
    ).join("");

    rail.addEventListener("click", (e) => {
      const tab = e.target.closest(".track-tab");
      if (!tab) return;
      const idx = tab.dataset.idx;
      $$(".track-tab", rail).forEach((b) => { b.classList.toggle("is-active", b === tab); b.setAttribute("aria-selected", b === tab ? "true" : "false"); });
      $$(".track-panel", stage).forEach((p) => p.classList.toggle("is-active", p.dataset.idx === idx));
      if (window.innerWidth <= 980) tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  }
  if (rail && stage) buildTracks();

  /* ---------------- 5 Ws ---------------- */
  function buildWs() {
    const strip = $("#whsStrip");
    const acc = $("#whsAccordion");
    if (!strip || !acc) return;

    strip.innerHTML = WS.map(
      (w, i) => `<article class="w-card reveal${i === 0 ? " is-active" : ""}" data-i="${i}" role="tab" tabindex="0" aria-selected="${i === 0}">
        <span class="w-q">${w.q}</span>
        <div class="w-body">
          <h3><span class="gold-letter">${w.q}</span></h3>
          <p>${w.a}</p>
          <span class="w-tag">${w.tag}</span>
        </div>
      </article>`
    ).join("");

    acc.innerHTML = WS.map(
      (w, i) => `<div class="acc-item reveal${i === 0 ? " is-open" : ""}">
        <button class="acc-head" data-i="${i}" aria-expanded="${i === 0}">
          <span class="acc-letter">${w.q}</span>
          <span>${w.tag}</span>
          <span class="acc-chev">${svgChevron}</span>
        </button>
        <div class="acc-body"><p>${w.a}</p></div>
      </div>`
    ).join("");

    watchReveals(strip);
    watchReveals(acc);

    function openStrip(i) {
      $$(".w-card", strip).forEach((c) => c.classList.toggle("is-active", parseInt(c.dataset.i, 10) === i));
      const active = $(".w-card.is-active", strip);
      if (active) { active.querySelector(".w-body").innerHTML = `
        <h3><span class="gold-letter">${WS[i].q}</span></h3>
        <p>${WS[i].a}</p>
        <span class="w-tag">${WS[i].tag}</span>`;
      }
    }

    strip.addEventListener("click", (e) => {
      const card = e.target.closest(".w-card");
      if (!card) return;
      openStrip(parseInt(card.dataset.i, 10));
    });
    strip.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".w-card");
        if (card) { e.preventDefault(); openStrip(parseInt(card.dataset.i, 10)); }
      }
    });

    acc.addEventListener("click", (e) => {
      const head = e.target.closest(".acc-head");
      if (!head) return;
      const item = head.closest(".acc-item");
      const body = item.querySelector(".acc-body");
      const wasOpen = item.classList.contains("is-open");
      $$(".acc-item").forEach((it) => {
        it.classList.remove("is-open");
        it.querySelector(".acc-body").style.maxHeight = "0px";
        it.querySelector(".acc-head").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        body.style.maxHeight = body.scrollHeight + "px";
        item.querySelector(".acc-head").setAttribute("aria-expanded", "true");
      }
    });
  }
  buildWs();
  // Re-sync the body of the first active card strip on load
  const stageFirst = $(".w-card.is-active .w-body");
  if (stageFirst) {
    stageFirst.innerHTML = `<h3><span class="gold-letter">${WS[0].q}</span></h3>
    <p>${WS[0].a}</p>
    <span class="w-tag">${WS[0].tag}</span>`;
  }

  /* ---------------- Timeline fill on scroll ---------------- */
  const timeline = $("#timeline");
  const tlFill = $("#tlFill");
  function updateTimeline() {
    if (!timeline || !tlFill) return;
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    const prog = Math.min(Math.max((vh * 0.62 - rect.top) / total, 0), 1);
    tlFill.style.height = (prog * total) + "px";
  }
  window.addEventListener("scroll", updateTimeline, { passive: true });
  window.addEventListener("resize", updateTimeline);
  updateTimeline();

  /* ---------------- Hero canvas (aurora fallback / backdrop) ---------------- */
  function buildHero() {
    const canvas = $("#heroCanvas");
    const video = $("#heroVideo");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, dpr = 1;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);

    // glow sprites
    function glowSprite(inner, outer) {
      const s = document.createElement("canvas");
      s.width = s.height = 256;
      const g = s.getContext("2d");
      const grad = g.createRadialGradient(128, 128, 4, 128, 128, 128);
      grad.addColorStop(0, inner);
      grad.addColorStop(0.5, outer);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grad; g.fillRect(0, 0, 256, 256);
      return s;
    }
    const blue = glowSprite("rgba(18,59,110,0.95)", "rgba(18,59,110,0.35)");
    const gold = glowSprite("rgba(201,162,39,0.9)", "rgba(201,162,39,0.3)");
    const dusk = glowSprite("rgba(63,94,150,0.8)", "rgba(63,94,150,0.25)");

    const blobs = [
      { spr: blue, x: 0.25, y: 0.3, r: 0.42, xa: 0.00006, ya: 0.00005, ph: 0 },
      { spr: gold, x: 0.75, y: 0.32, r: 0.3, xa: -0.00005, ya: 0.00007, ph: 2 },
      { spr: dusk, x: 0.15, y: 0.78, r: 0.5, xa: 0.00004, ya: -0.00004, ph: 4 },
      { spr: blue, x: 0.6, y: 0.85, r: 0.45, xa: -0.00006, ya: -0.00005, ph: 5 }
    ];

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.6 + 0.4,
      v: Math.random() * 0.00022 + 0.00005, tw: Math.random() * Math.PI * 2
    }));

    let t = 0;
    function frame(now) {
      t += 0.004;
      // base wash
      ctx.globalCompositeOperation = "source-over";
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#081a3e");
      bg.addColorStop(0.55, "#0b2447");
      bg.addColorStop(1, "#050d24");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = "lighter";
      // aurora blobs
      for (const b of blobs) {
        const bx = (b.x + 0.14 * Math.sin(now * b.xa + b.ph)) * W;
        const by = (b.y + 0.16 * Math.cos(now * b.ya + b.ph)) * H;
        const br = b.r * W;
        const a = 0.55 + 0.18 * Math.sin(now * 0.0004 + b.ph);
        ctx.globalAlpha = Math.max(0.25, Math.min(0.8, a));
        ctx.drawImage(b.spr, bx - br, by - br, br * 2, br * 2);
      }
      // drifting dust
      for (const p of particles) {
        p.y -= p.v;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        const twk = 0.35 + 0.65 * Math.abs(Math.sin(p.tw + now * 0.001));
        ctx.globalAlpha = 0.15 * twk * (Math.random() * 0.4 + 0.6);
        ctx.fillStyle = "#f0d48a";
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(frame);
    }

    // Video fallback detection: if assets/hero.mp4 cannot play, run aurora.
    const videoWorks = () => video && !video.error && video.readyState >= 2;
    function useVideo() {
      if (video) { video.classList.remove("is-hidden"); canvas.classList.add("is-hidden"); }
    }
    function useCanvas() {
      if (video) video.classList.add("is-hidden");
      canvas.classList.remove("is-hidden");
      if (reduceMotion) {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, "#081a3e"); bg.addColorStop(1, "#0b2447");
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
        return;
      }
      frame(0);
    }

    if (video) {
      const tmr = setTimeout(() => { if (!videoWorks()) useCanvas(); }, 1400);
      video.addEventListener("loadeddata", () => { clearTimeout(tmr); videoWorks() ? useVideo() : useCanvas(); });
      video.addEventListener("error", () => { clearTimeout(tmr); useCanvas(); });
    } else {
      useCanvas();
    }
  }
  buildHero();
})();