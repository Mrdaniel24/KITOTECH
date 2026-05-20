/* ============================================================
   KITOTECH — Homepage-specific styles
   ============================================================ */

/* -----------------------------------------------------------
   HERO — Split layout: text left, visual right
   ----------------------------------------------------------- */
.hero {
  background: var(--ink-0);
  border-bottom: 1px solid var(--hair-d);
  position: relative;
  overflow: visible;  /* allow panel to overlap next section */
  padding-bottom: 0;
}

.hero-edge {
  position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--brand-red); z-index: 10;
}

/* Two-column grid — fills its own height */
.hero-inner {
  display: grid;
  grid-template-columns: 55% 45%;
  min-height: 760px;
}

/* ── LEFT — copy ─────────────────────────────────────────── */
.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;        /* true vertical center */
  align-items: flex-start;
  padding: 64px 64px 64px 48px;
  gap: 0;
}

.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font: 700 11px/1 var(--font-mono);
  letter-spacing: 0.24em; text-transform: uppercase;
  color: var(--brand-red);
  margin-bottom: 20px;
  animation: heroIn 0.6s var(--ease-out) both;
}
.hero-eyebrow::before {
  content: ''; width: 24px; height: 2px;
  background: var(--brand-red); flex-shrink: 0;
}

.hero-copy h1 {
  font: 700 clamp(36px, 3.8vw, 58px)/1.08 var(--font-display);
  letter-spacing: -0.025em; color: #fff;
  margin: 0 0 18px;
  animation: heroIn 0.6s 0.08s var(--ease-out) both;
}
.hero-copy h1 .accent {
  color: var(--brand-red); font-style: italic; font-weight: 600;
}

.hero-sub {
  font: 400 16px/1.7 var(--font-body);
  color: rgba(255,255,255,0.68);
  margin: 0 0 32px;
  max-width: 460px;
  animation: heroIn 0.6s 0.14s var(--ease-out) both;
}

.hero-actions {
  display: flex; gap: 12px; flex-wrap: wrap;
  animation: heroIn 0.6s 0.20s var(--ease-out) both;
}

.hero-dots {
  display: flex; gap: 7px;
  margin-top: 28px;
  animation: heroIn 0.6s 0.26s var(--ease-out) both;
}
.hero-dots span {
  width: 7px; height: 7px; border-radius: 999px;
  background: rgba(255,255,255,0.2); cursor: pointer;
  transition: all var(--dur-base) var(--ease-out);
}
.hero-dots span.active { background: var(--brand-red); width: 24px; }

/* Ghost outline button for dark background */
.btn-outline-light {
  background: transparent;
  color: rgba(255,255,255,0.82);
  border: 1px solid rgba(255,255,255,0.28);
}
.btn-outline-light:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.5);
  color: #fff;
}

/* ── RIGHT — visual panel ────────────────────────────────── */
.hero-visual {
  position: relative;
  overflow: hidden;
  background: var(--ink-1);
  /* Diagonal left-edge cut — brand signature */
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
}

/* Photo slides */
.hero-img {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: var(--ink-2);
  opacity: 0;
  transition: opacity 1.4s var(--ease-in-out);
}
.hero-img.active { opacity: 1; }
/* Slight dark gradient over photo for badge legibility */
.hero-img.active::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(5,5,7,0.15) 0%, rgba(5,5,7,0.45) 100%);
}

/* Fallback when no photo */
.hero-fallback {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0e0208 0%, var(--ink-1) 60%, #060a18 100%);
}
.hero-fallback-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 48px 48px;
}
.hero-fallback-glow {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 60% 40%, rgba(225,20,28,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 20% 80%, rgba(26,55,213,0.10) 0%, transparent 45%);
}
.hero-fallback-logo {
  height: 88px; opacity: 0.14; position: relative; z-index: 1;
}

/* Tech overlay — corner brackets + scan line */
.hero-tech-overlay {
  position: absolute; inset: 0; z-index: 3; pointer-events: none;
}

/* Animated scan line */
.hero-scan-line {
  position: absolute; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(225,20,28,0.6), transparent);
  animation: scanDown 4s linear infinite;
}
@keyframes scanDown {
  0%   { top: 0%; opacity: 0; }
  5%   { opacity: 1; }
  95%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* Corner bracket accents */
.hero-corner {
  position: absolute; width: 20px; height: 20px;
}
.hero-corner.tl { top: 20px; left: 32px;
  border-top: 2px solid var(--brand-red); border-left: 2px solid var(--brand-red); }
.hero-corner.tr { top: 20px; right: 20px;
  border-top: 2px solid rgba(255,255,255,0.2); border-right: 2px solid rgba(255,255,255,0.2); }
.hero-corner.bl { bottom: 20px; left: 32px;
  border-bottom: 2px solid rgba(255,255,255,0.2); border-left: 2px solid rgba(255,255,255,0.2); }
.hero-corner.br { bottom: 20px; right: 20px;
  border-bottom: 2px solid var(--brand-red); border-right: 2px solid var(--brand-red); }

/* Data badges */
.hero-badge {
  position: absolute; z-index: 4;
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(5,5,7,0.75);
  border: 1px solid var(--hair-d2);
  backdrop-filter: blur(8px);
  padding: 8px 14px;
  font: 600 10px/1 var(--font-mono);
  text-transform: uppercase; letter-spacing: 0.14em;
}
.hero-badge-top    { top: 24px; left: 40px; }
.hero-badge-bottom { bottom: 24px; right: 24px; }
.hero-badge .live-dot {
  width: 6px; height: 6px; border-radius: 999px;
  background: var(--brand-red); flex-shrink: 0;
  animation: livepulse 1.4s ease-in-out infinite;
}
.hero-badge-label { color: var(--brand-red); }
.hero-badge-val   { color: rgba(255,255,255,0.75); }
.hero-badge svg   { color: var(--brand-red); flex-shrink: 0; }

/* ── Floating white stats panel ──────────────────────────── */
.hero-float-stats {
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  background: #ffffff;
  border-radius: 4px;
  box-shadow:
    0 8px 32px rgba(0,0,0,0.12),
    0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);

  width: max-content;
  max-width: calc(100vw - 64px);
  overflow: hidden;
}

.hfs-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 32px;
  gap: 5px;
  min-width: 160px;
}

.hfs-num {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 0;
  line-height: 1;
}
.hfs-prefix {
  font: 700 20px/1 var(--font-display);
  color: var(--brand-red);
  letter-spacing: -0.01em;
}
.hfs-val {
  font: 800 36px/1 var(--font-display);
  color: var(--ink-1);
  letter-spacing: -0.03em;
}
.hfs-unit {
  font: 800 20px/1 var(--font-display);
  color: var(--brand-red);
  margin-left: 2px;
  letter-spacing: -0.01em;
}
.hfs-label {
  font: 500 11px/1.4 var(--font-body);
  color: var(--fg-on-light-3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
}

.hfs-sep {
  width: 1px;
  background: var(--hair-l);
  align-self: stretch;
  flex-shrink: 0;
}

/* ── Animations ──────────────────────────────────────────── */
@keyframes heroIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes livepulse {
  0%,100% { box-shadow: 0 0 0 2px rgba(225,20,28,0.3); }
  50%      { box-shadow: 0 0 0 5px rgba(225,20,28,0.08); }
}

/* -----------------------------------------------------------
   STATS STRIP — premium depth cards
   ----------------------------------------------------------- */
.stats-strip {
  background: var(--ink-0);
  padding: 56px 0;
  position: relative;
  overflow: hidden;
}
/* Subtle red glow behind the whole strip */
.stats-strip::before {
  content: '';
  position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);
  width: 60%; height: 80%;
  background: radial-gradient(ellipse, rgba(225,20,28,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.stats-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  position: relative; z-index: 1;
}
.stat-item {
  background: linear-gradient(145deg, var(--ink-2) 0%, var(--ink-1) 100%);
  border: 1px solid var(--hair-d2);
  box-shadow:
    0 20px 40px -12px rgba(0,0,0,0.7),
    inset 0 1px 1px rgba(255,255,255,0.06),
    inset 0 -1px 1px rgba(0,0,0,0.5);
  padding: 28px 24px 24px;
  display: flex; flex-direction: column; gap: 0;
  position: relative; overflow: hidden;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.stat-item:hover {
  transform: translateY(-4px);
  box-shadow:
    0 32px 56px -12px rgba(0,0,0,0.8),
    0 0 0 1px rgba(225,20,28,0.3),
    inset 0 1px 1px rgba(255,255,255,0.08),
    inset 0 -1px 1px rgba(0,0,0,0.5);
}
/* Red top-edge sheen */
.stat-item::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--brand-red);
}
/* Subtle inner glow on hover */
.stat-item::after {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(225,20,28,0.08), transparent 60%);
  opacity: 0; transition: opacity var(--dur-base) var(--ease-out);
  pointer-events: none;
}
.stat-item:hover::after { opacity: 1; }

.stat-icon {
  width: 36px; height: 36px;
  background: rgba(225,20,28,0.12);
  border: 1px solid rgba(225,20,28,0.25);
  display: grid; place-items: center;
  color: var(--brand-red);
  margin-bottom: 18px;
}
.stat-val {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: nowrap;
  gap: 0;
  margin-bottom: 10px;
  white-space: nowrap;
}
.stat-prefix {
  font: 700 28px/1 var(--font-display);
  color: var(--brand-red);
  letter-spacing: -0.01em;
  display: inline;
}
.stat-num {
  font: 700 40px/1 var(--font-display);
  color: #fff;
  letter-spacing: -0.03em;
  display: inline;
}
.stat-unit {
  font: 700 22px/1 var(--font-display);
  color: var(--brand-red);
  letter-spacing: -0.01em;
  display: inline;
  margin-left: 2px;
}
.stat-label {
  font: 500 11px/1.4 var(--font-body);
  color: var(--fg-on-dark-3);
  text-transform: uppercase; letter-spacing: 0.1em;
  white-space: normal;
}
.stat-divider { display: none; }

/* -----------------------------------------------------------
   ABOUT INTRO — reworked
   ----------------------------------------------------------- */
.intro-section {
  position: relative; padding: 96px 0 96px;
  padding-top: 80px;
  background: var(--paper-1); overflow: hidden;
  margin-top: 32px; /* space for floating stats panel */
}
.intro-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
}
.intro-copy .eyebrow { display: block; color: var(--brand-red); margin-bottom: 16px; }
.intro-copy h2 {
  font: 700 clamp(28px, 3.5vw, 42px)/1.1 var(--font-display);
  letter-spacing: -0.02em; color: var(--fg-on-light-1); margin: 0 0 22px;
}
.intro-copy h2 .accent-red { color: var(--brand-red); }
.intro-copy h2 .black      { color: var(--fg-on-light-1); }
.intro-copy p { font: 400 15px/1.7 var(--font-body); color: var(--fg-on-light-2); margin: 0 0 16px; }

.intro-more {
  display: inline-flex; align-items: center; gap: 8px; margin-top: 8px;
  font: 600 12px/1 var(--font-body);
  color: var(--brand-red); text-decoration: none;
  text-transform: uppercase; letter-spacing: 0.14em;
  transition: gap var(--dur-base) var(--ease-out);
}
.intro-more:hover { gap: 12px; }

/* Hikvision badge inside intro */
.hik-badge {
  display: flex; align-items: center; gap: 16px;
  margin-top: 28px; padding: 16px 20px;
  background: var(--paper-2); border: 1px solid var(--hair-l);
  max-width: 380px;
}
.hik-badge-logo { height: 32px; }
.hik-badge-divider { width: 1px; height: 32px; background: var(--hair-l2); }
.hik-badge-title { font: 700 10px/1 var(--font-mono); text-transform: uppercase; letter-spacing: 0.16em; color: var(--fg-on-light-1); }
.hik-badge-sub   { font: 400 11px/1 var(--font-body); color: var(--fg-on-light-3); margin-top: 4px; }

/* Image side */
.intro-image { position: relative; aspect-ratio: 5/4; }
.intro-img-bg {
  position: absolute; inset: 0;
  background: var(--ink-2) center/cover no-repeat;
  border: 1px solid var(--hair-l);
}
.intro-img-fallback {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--ink-2), var(--ink-0));
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 12px; color: var(--fg-on-dark-3);
  font: 500 10px/1 var(--font-mono); text-transform: uppercase; letter-spacing: 0.18em;
}
.intro-img-badge {
  position: absolute; bottom: -1px; right: -1px;
  background: var(--brand-red); color: #fff;
  padding: 14px 24px;
  clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
  font: 700 13px/1 var(--font-display);
  text-transform: uppercase; letter-spacing: 0.16em;
}

/* -----------------------------------------------------------
   PRINCIPAL SERVICES — reworked
   ----------------------------------------------------------- */
.principal-services {
  padding: 96px 0; background: var(--paper-0);
}
.ps-head { text-align: center; margin-bottom: 56px; }
.ps-head .eyebrow { display: block; color: var(--brand-red); margin-bottom: 14px; }
.ps-head h2 {
  font: 700 clamp(28px, 3.5vw, 42px)/1.08 var(--font-display);
  letter-spacing: -0.02em; color: var(--fg-on-light-1); margin: 0 0 16px;
}
.ps-head h2 .accent { color: var(--brand-red); }
.ps-head p {
  font: 400 15px/1.65 var(--font-body);
  color: var(--fg-on-light-2); max-width: 600px; margin: 0 auto;
}

.ps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--hair-l); border: 1px solid var(--hair-l); }
.ps-card {
  background: var(--paper-0);
  display: flex; flex-direction: column;
  text-decoration: none;
  transition: background var(--dur-base) var(--ease-out);
}
.ps-card:hover { background: var(--paper-1); }
.ps-card:hover .ps-media-img { transform: scale(1.04); }

.ps-media { aspect-ratio: 4/3; position: relative; overflow: hidden; }
.ps-media-img {
  position: absolute; inset: 0;
  background: var(--ink-2) center/cover no-repeat;
  transition: transform 0.6s var(--ease-out);
}
.ps-media-fallback {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--ink-2), var(--ink-0));
  display: grid; place-items: center; color: var(--fg-on-dark-3);
}
.ps-media-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(5,5,7,0.5) 100%);
}

.ps-info { padding: 22px 20px; flex: 1; display: flex; flex-direction: column; }
.ps-info h4 {
  font: 700 15px/1.2 var(--font-display);
  color: var(--fg-on-light-1); margin: 0 0 10px;
  text-transform: uppercase; letter-spacing: 0.04em;
}
.ps-info p { font: 400 13px/1.6 var(--font-body); color: var(--fg-on-light-2); margin: 0 0 16px; flex: 1; }
.ps-link {
  display: inline-flex; align-items: center; gap: 6px; margin-top: auto;
  font: 600 11px/1 var(--font-body); color: var(--brand-red);
  text-transform: uppercase; letter-spacing: 0.12em;
  transition: gap var(--dur-base) var(--ease-out);
}
.ps-card:hover .ps-link { gap: 10px; }

.ps-cta { text-align: center; margin-top: 40px; }

/* -----------------------------------------------------------
   SOLUTIONS TEASER
   ----------------------------------------------------------- */
.solutions-teaser { padding: 96px 0; background: var(--paper-2); }
.sol-teaser-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 16px; margin-top: 0;
}
.sol-teaser-card {
  display: flex; flex-direction: column;
  text-decoration: none;
  border: 1px solid var(--hair-l);
  background: var(--paper-0);
  overflow: hidden;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.sol-teaser-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-3); }

.sol-teaser-img {
  aspect-ratio: 16/9; position: relative; overflow: hidden;
  background: var(--ink-2) center/cover no-repeat;
}
.sol-teaser-fallback {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--ink-2), var(--ink-0));
}
.sol-teaser-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(5,5,7,0.4) 100%);
}
.sol-teaser-img:hover .sol-teaser-fallback { transform: scale(1.04); }

.sol-teaser-body {
  padding: 18px 20px;
  display: flex; align-items: center; gap: 12px;
  font: 600 13px/1 var(--font-display);
  color: var(--fg-on-light-1);
  text-transform: uppercase; letter-spacing: 0.08em;
  border-top: 2px solid transparent;
  transition: border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
}
.sol-teaser-body svg { color: var(--brand-red); flex-shrink: 0; }
.sol-teaser-card:hover .sol-teaser-body { border-top-color: var(--brand-red); color: var(--brand-red); }

.sol-teaser-cta { text-align: center; margin-top: 40px; }

/* -----------------------------------------------------------
   MARQUEE STRIP — scrolling industry chips
   ----------------------------------------------------------- */
.marquee-strip {
  background: var(--paper-2);
  border-top: 1px solid var(--hair-l);
  border-bottom: 1px solid var(--hair-l);
  padding: 24px 0;
}
.marquee-label {
  text-align: center;
  font: 600 10px/1 var(--font-mono);
  text-transform: uppercase; letter-spacing: 0.22em;
  color: var(--fg-on-light-4);
  margin-bottom: 16px;
}
.marquee-track-wrap {
  position: relative; overflow: hidden;
}
.marquee-fade-l,
.marquee-fade-r {
  position: absolute; top: 0; bottom: 0; width: 80px;
  pointer-events: none; z-index: 2;
}
.marquee-fade-l { left:  0; background: linear-gradient(to right, var(--paper-2), transparent); }
.marquee-fade-r { right: 0; background: linear-gradient(to left,  var(--paper-2), transparent); }

.marquee-track {
  display: flex; gap: 12px;
  width: max-content;
  animation: marquee-scroll 28s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.marquee-chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 18px;
  background: var(--paper-0);
  border: 1px solid var(--hair-l);
  font: 600 12px/1 var(--font-body);
  color: var(--fg-on-light-2);
  text-transform: uppercase; letter-spacing: 0.08em;
  white-space: nowrap;
  transition: border-color var(--dur-base), color var(--dur-base);
}
.marquee-chip svg { color: var(--brand-red); flex-shrink: 0; }
.marquee-chip:hover { border-color: var(--brand-red); color: var(--brand-red); }

/* -----------------------------------------------------------
   RESPONSIVE
   ----------------------------------------------------------- */
@media (max-width: 960px) {
  .intro-grid       { grid-template-columns: 1fr; gap: 48px; }
  .ps-grid          { grid-template-columns: repeat(2, 1fr); }
  .sol-teaser-grid  { grid-template-columns: repeat(2, 1fr); }
  .stats-inner      { grid-template-columns: repeat(2, 1fr); }
  .hero-inner         { grid-template-columns: 1fr; min-height: auto; }
  .hero-copy          { padding: 48px 32px 40px; justify-content: flex-start; }
  .hero-visual        { height: 280px; clip-path: none; }
  .hero-float-stats   { position: relative; bottom: auto; left: auto; transform: none;
                        width: 100%; max-width: 100%; border-radius: 0;
                        flex-wrap: wrap; border-top: 1px solid var(--hair-l); }
  .hfs-item           { flex: 1; min-width: 140px; }
  .hfs-sep            { display: none; }
}
@media (max-width: 640px) {
  .ps-grid            { grid-template-columns: 1fr; }
  .sol-teaser-grid    { grid-template-columns: 1fr; }
  .hero-copy          { padding: 36px 20px 28px; }
  .hero-copy h1       { font-size: 28px; }
  .hero-visual        { height: 220px; }
  .hero-float-stats   { flex-wrap: wrap; }
  .hfs-item           { min-width: 45%; border-bottom: 1px solid var(--hair-l); }
  .hfs-val            { font-size: 28px; }
  .intro-section      { margin-top: 0; }
}
