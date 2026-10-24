const countElement = document.querySelector('#count');
const decrementButton = document.querySelector('#decrement');
const incrementButton = document.querySelector('#increment');
const resetButton = document.querySelector('#reset');

let count = 0;

function render() {
  countElement.textContent = String(count);
  countElement.classList.toggle('negative', count < 0);
}

function change(amount) {
  count += amount;
  render();
}

decrementButton.addEventListener('click', () => change(-1));
incrementButton.addEventListener('click', () => change(1));
resetButton.addEventListener('click', () => {
  count = 0;
  render();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' || event.key === '-') {
    change(-1);
  }

  if (event.key === 'ArrowUp' || event.key === '+') {
    change(1);
  }
});

render();
