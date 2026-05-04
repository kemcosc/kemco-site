// ── NAV: hamburger toggle (event-delegated, defensive) ──
(function () {
  function setOpen(hamburger, navLinks, open) {
    navLinks.classList.toggle('open', open);
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function init() {
    var hamburger = document.querySelector('.nav-hamburger');
    var navLinks  = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    document.addEventListener('click', function (e) {
      // Tap on hamburger -> toggle
      if (e.target.closest && e.target.closest('.nav-hamburger')) {
        e.preventDefault();
        setOpen(hamburger, navLinks, !navLinks.classList.contains('open'));
        return;
      }
      // Tap on a link inside the open menu -> close
      if (e.target.closest && e.target.closest('.nav-links a')) {
        setOpen(hamburger, navLinks, false);
        return;
      }
      // Tap anywhere else while open -> close
      if (navLinks.classList.contains('open')) {
        setOpen(hamburger, navLinks, false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ── SCROLL: fade in sections ──
if (typeof IntersectionObserver !== 'undefined') {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
}

// Active page marker and contact form submission are handled in data.js
