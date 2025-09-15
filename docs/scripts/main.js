/* W4.3-O — Mobile menu toggle */

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  // Set initial ARIA state
  toggle.setAttribute('aria-expanded', 'false');

  // Toggle handler
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when any nav link is clicked (nice UX)
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
