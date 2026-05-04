// ── NAV: hamburger toggle ──
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
    // close on outside click/tap
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) &&
          !hamburger.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// ── NAV: mark active page ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── SCROLL: fade in sections ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── CONTACT FORM: basic handling ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    // Netlify handles form submissions automatically when deployed
    // For local testing this just shows a success message
    setTimeout(() => {
      contactForm.innerHTML = `
        <div style="text-align:center;padding:40px 0;">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style="margin:0 auto 20px">
            <circle cx="28" cy="28" r="28" fill="rgba(42,125,225,0.15)"/>
            <path d="M18 28l8 8 14-16" stroke="#2a7de1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3 style="margin-bottom:8px;color:#fff;">Message sent!</h3>
          <p style="color:#8ea8c3;">We'll be in touch within 1 business day.</p>
        </div>`;
    }, 800);
  });
}
