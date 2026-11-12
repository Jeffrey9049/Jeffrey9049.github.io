(function () {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const mobileButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');

  try {
    const saved = localStorage.getItem('jc-theme');
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';
  } catch (_) { /* Storage may be blocked; default light theme still works */ }

  function updateThemeLabel() {
    if (!themeButton) return;
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton.setAttribute('title', dark ? 'Light theme' : 'Dark theme');
    themeButton.innerHTML = dark
      ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20.9 13a9 9 0 0 1-9.9-9.9A9 9 0 1 0 20.9 13Z"/></svg>';
  }
  updateThemeLabel();
  if (themeButton) themeButton.addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('jc-theme', root.dataset.theme); } catch (_) {}
    updateThemeLabel();
  });
  if (mobileButton && nav) {
    mobileButton.addEventListener('click', function () {
      const expanded = mobileButton.getAttribute('aria-expanded') === 'true';
      mobileButton.setAttribute('aria-expanded', String(!expanded));
      mobileButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        mobileButton.setAttribute('aria-expanded', 'false');
        mobileButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
