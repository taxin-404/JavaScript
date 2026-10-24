const form = document.querySelector('#tip-form');
const billInput = document.querySelector('#bill');
const tipSelect = document.querySelector('#tip');
const tipAmountElement = document.querySelector('#tip-amount');
const totalElement = document.querySelector('#total');

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function calculate() {
  const bill = Number.parseFloat(billInput.value) || 0;
  const tipRate = Number.parseFloat(tipSelect.value);
  const tip = bill * tipRate;
  const total = bill + tip;

  tipAmountElement.textContent = currency.format(tip);
  totalElement.textContent = currency.format(total);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  calculate();
});

for (const field of [billInput, tipSelect]) {
  field.addEventListener('input', calculate);
}

calculate();
