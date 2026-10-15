(() => {
  const root = document.querySelector('.portrait-switcher');
  if (!root) return;
  const controls = root.querySelector('.portrait-controls');
  const buttons = [...controls.querySelectorAll('button')];
  controls.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => {
      const selected = item === button;
      item.setAttribute('aria-pressed', String(selected));
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
  }));
})();
