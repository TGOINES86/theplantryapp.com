/* W4.3-O — Mobile menu toggle (robust + console check) */
/* W4.4 - Mobile nav toggle (defensive) */

(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  // Ensure starting state is closed on small screens
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');

  function toggleNav() {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  }

  toggle.addEventListener('click', toggleNav);
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleNav();
    }
  });

  // Close menu when a nav link is clicked (mobile)
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    if (getComputedStyle(toggle).display !== 'none') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
