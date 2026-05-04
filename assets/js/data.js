// ── DATA LOADER ──────────────────────────────────────────────
// Fetches JSON data files and returns parsed objects.
// Falls back gracefully if a file is missing.

async function loadData(filename) {
  try {
    const res = await fetch(`/_data/${filename}.json?v=${Date.now()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn(`Could not load _data/${filename}.json`, e);
    return null;
  }
}

// ── TEMPLATE HELPERS ─────────────────────────────────────────
function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el && value !== undefined) el.textContent = value;
}
function setHtml(selector, value) {
  const el = document.querySelector(selector);
  if (el && value !== undefined) el.innerHTML = value;
}
function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el && value !== undefined) el.setAttribute(attr, value);
}

// ── POPULATE GLOBAL SITE DATA ────────────────────────────────
async function applySiteData() {
  const s = await loadData('site');
  if (!s) return;
  document.querySelectorAll('[data-site="company_name"]').forEach(el => el.textContent = s.company_name);
  document.querySelectorAll('[data-site="tagline"]').forEach(el => el.textContent = s.tagline);
  document.querySelectorAll('[data-site="address_line1"]').forEach(el => el.textContent = s.address_line1);
  document.querySelectorAll('[data-site="address_line2"]').forEach(el => el.textContent = s.address_line2);
  document.querySelectorAll('[data-site="phone_display"]').forEach(el => el.textContent = s.phone_display);
  document.querySelectorAll('[data-site="phone_link"]').forEach(el => {
    el.href = `tel:${s.phone_link}`;
    el.textContent = s.phone_display;
  });
  document.querySelectorAll('[data-site="footer_description"]').forEach(el => el.textContent = s.footer_description);
}

// ── NAV & HAMBURGER ──────────────────────────────────────────
function initNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }
  // Mark active link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── CONTACT FORM ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    // On Netlify, the form will submit via standard POST (data-netlify="true")
    // This handler only applies when running locally (no Netlify)
    if (!window.location.hostname.includes('netlify') && window.location.hostname !== 'kemcocontractors.com') {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        form.innerHTML = `
          <div style="text-align:center;padding:40px 0;">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style="margin:0 auto 20px">
              <circle cx="28" cy="28" r="28" fill="rgba(42,125,225,0.15)"/>
              <path d="M18 28l8 8 14-16" stroke="#2a7de1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 style="margin-bottom:8px;color:#fff;">Message sent!</h3>
            <p style="color:#8ea8c3;">We'll be in touch within 1 business day.</p>
          </div>`;
      }, 800);
    }
  });
}

// ── RUN ON PAGE LOAD ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initContactForm();
  applySiteData();
});
