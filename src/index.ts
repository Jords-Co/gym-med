window.Webflow || [];
window.Webflow.push(() => {
  /* Prevent FOUT */
  document.body.classList.add('webflow-loaded');
  /* Skip to content link */
  const trigger = document.querySelector('[dd-skip-to-main-content="trigger"]'),
    target = document.querySelector('[dd-skip-to-main-content="target"]');
  if (trigger && target) {
    ['click', 'keypress'].forEach((event) => {
      trigger.addEventListener(event, (e) => {
        if (e.type === 'keydown' && e.which !== 13) {
          return;
        }
        e.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.focus();
      });
    });
  }
});