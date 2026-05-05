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

// Note: hamburger toggle is now inlined in each HTML page for reliability.
// Active page marker and contact form submission are handled in data.js.
