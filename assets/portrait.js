/* Quiet photo rotation, with no visible controls. */
(() => {
  const root = document.querySelector('.portrait-switcher');
  if (!root) return;
  const panels = [...root.querySelectorAll('.portrait-panel')];
  if (panels.length < 2) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  window.setInterval(() => {
    if (document.hidden || reducedMotion.matches || root.matches(':hover, :focus-within')) return;
    panels[current].hidden = true;
    current = (current + 1) % panels.length;
    panels[current].hidden = false;
  }, 30000);
})();
