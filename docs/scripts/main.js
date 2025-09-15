/* W4.3-O — Mobile menu toggle (robust + console check) */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav) {
    console.warn('[nav] Missing .nav-toggle or #site-nav; mobile menu disabled.');
    return;
  }

  // Set initial ARIA state
  toggle.setAttribute('aria-expanded', 'false');

  // Toggle handler
  function close() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function open() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    isOpen ? close() : open();
  });

  // Close when a link is tapped (nice UX)
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) close();
  });

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  console.info('[nav] Mobile toggle initialized.');
})();
Commit message:
feat(nav): robust mobile toggle + console diagnostics

