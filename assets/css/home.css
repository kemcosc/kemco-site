/* ── HOME PAGE STYLES ── */

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: calc(var(--nav-h) + 60px) 0 80px;
  background: var(--bg);
}

/* Video background */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
/* Dark gradient overlay so text stays readable */
.hero-video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 22, 40, 0.82) 0%,
    rgba(10, 22, 40, 0.55) 50%,
    rgba(10, 22, 40, 0.70) 100%
  );
  z-index: 1;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(42,125,225,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(42,125,225,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 2;
}
.hero-glow {
  position: absolute;
  top: 10%; right: -10%;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(42,125,225,0.08) 0%, transparent 65%);
  pointer-events: none;
  z-index: 2;
}
.hero-content { position: relative; z-index: 3; max-width: 760px; }
.hero-content h1 {
  font-size: clamp(3.2rem, 7vw, 6rem);
  margin-bottom: 24px;
  line-height: 0.95;
}
.hero-sub {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 540px;
  margin-bottom: 40px;
}
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 56px; }
.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat-num {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}
.stat-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-dim);
}
.stat-div {
  width: 1px; height: 40px;
  background: var(--border);
}
.hero-scroll-hint {
  position: absolute;
  bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  animation: bounce 2s infinite;
  z-index: 3;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}
.scroll-dot {
  animation: scroll-dot 2s infinite;
}
@keyframes scroll-dot {
  0%   { cy: 7;  opacity: 1; }
  100% { cy: 16; opacity: 0; }
}

/* PROJECTS PREVIEW */
.projects-preview {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.project-card {
  display: block;
  border-radius: 6px;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.5);
  border-color: rgba(42,125,225,0.4);
}
.project-img {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.project-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.project-card:hover .project-img img { transform: scale(1.04); }
.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,22,40,0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}
.project-card:hover .project-overlay { opacity: 1; }
.project-overlay span {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
}
.project-info {
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.project-info h3 { font-size: 1.1rem; }

/* VALUES — two feature items with logo-icon (matching original) */
.values { background: var(--bg); }
.values-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}
.values-features {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.values-feature-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 28px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.values-feature-item:hover {
  border-color: rgba(42,125,225,0.35);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.values-feature-icon {
  width: 48px;
  height: auto;
  flex-shrink: 0;
  /* The logo-icon has a dark bg — invert so it reads on our dark cards */
  filter: brightness(0) invert(1);
  opacity: 0.9;
}
.values-feature-item h4 {
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  color: #fff;
  margin-bottom: 6px;
}
.values-feature-item p { font-size: 0.88rem; }

/* WHERE QUALITY MEETS EXPERTISE */
.quality-section {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 96px 0;
}
.quality-section .section-header { margin-bottom: 56px; }
.quality-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  text-align: center;
}
.quality-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 32px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.quality-item:hover {
  border-color: rgba(42,125,225,0.35);
  box-shadow: 0 12px 32px rgba(0,0,0,0.35);
  transform: translateY(-3px);
}
.quality-icon {
  width: 72px;
  height: auto;
  /* Icons have black background — strip it so they glow on our dark cards */
  mix-blend-mode: screen;
  opacity: 0.95;
}
.quality-item h4 {
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: #fff;
}
.quality-item p {
  font-size: 0.9rem;
  max-width: 240px;
  margin: 0 auto;
}

/* CTA BANNER */
.cta-banner {
  background: linear-gradient(135deg, var(--bg-2) 0%, #0d2244 100%);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 72px 0;
}
.cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}
.cta-inner h2 { font-size: clamp(2rem, 4vw, 3rem); }
.cta-inner p { color: var(--text-muted); margin-top: 8px; }

/* VETERAN */
.veteran { background: var(--bg); }
.veteran-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 72px;
  align-items: center;
}
.veteran-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 40px;
}
/* Both badges sit on white tiles so dark-on-white artwork reads against the dark card */
.veteran-badge img:first-child {
  max-width: 180px;
  background: #fff;
  border-radius: 10px;
  padding: 14px 18px;
  box-shadow: 0 6px 20px rgba(0,0,0,.22);
}
.veteran-badge img:last-child {
  max-width: 170px;
  background: #fff;
  border-radius: 10px;
  padding: 14px 18px;
  box-shadow: 0 6px 20px rgba(0,0,0,.22);
}

/* RESPONSIVE */
@media (max-width: 860px) {
  .projects-grid { grid-template-columns: 1fr; }
  .values-layout { grid-template-columns: 1fr; gap: 48px; }
  .quality-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
  .cta-inner { flex-direction: column; text-align: center; }
  .veteran-layout { grid-template-columns: 1fr; }
  .veteran-badge { max-width: 280px; margin: 0 auto; }
  .hero-stats { gap: 20px; }
}
@media (max-width: 560px) {
  .hero-actions { flex-direction: column; }
  .quality-grid { max-width: 100%; }
}
