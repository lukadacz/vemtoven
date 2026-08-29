document.addEventListener('click', function (e) {
  var btn = e.target.closest('[data-nav-toggle]');
  if (!btn) return;
  document.querySelectorAll('.nav-collapsible, .mobile-menu-overlay').forEach(function (el) {
    el.classList.toggle('nav-open');
  });
  btn.classList.toggle('is-active');
});
