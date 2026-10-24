const currentElement = document.querySelector('#current');
const swatches = document.querySelectorAll('[data-color]');

for (const swatch of swatches) {
  swatch.addEventListener('click', () => {
    const color = swatch.dataset.color;
    const label = swatch.dataset.label ?? color;

    document.documentElement.style.setProperty('--page-bg', color);
    currentElement.textContent = `Current: ${label}`;
  });
}
