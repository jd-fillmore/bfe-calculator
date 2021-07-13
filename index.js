// Define product price

const productPrice = 105000;

// Append product price to DOM

const productPriceID = document.getElementById("product-price");
productPriceID.innerHTML = productPrice.toLocaleString();

// Grab the id's of the main product price, down payment, total, per month and button for DOM appending

const downPaymentValue = document.getElementById("down-payment-value");
const totalValue = document.getElementById("total-value");
const perMonthValue = document.getElementById("per-month-value");
const calculateBtn = document.getElementById("calculate");

///////// Calculations

calculateBtn.addEventListener("click", calculate);

function calculate() {
  // Grab the value of the month selected
  const monthSelected = document.querySelector('input[name="month"]:checked')
    .value;
  // Grab the value of the down payment percentage selected
  const percentageSelected = document.querySelector(
    'input[name="percent"]:checked'
  ).value;
  // Calculate down payment percentage based on main price
  const totalDownPayment = productPrice * percentageSelected;
  // Calculate the total
  const totalPrice = productPrice - totalDownPayment;
  // Calculate the per month
  const perMonth = totalPrice / monthSelected;
  // Convert to text with options argument to specify number of decimals
  const totalDownPaymentStr = totalDownPayment.toLocaleString(
    navigator.language,
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );
  const totalPriceStr = totalPrice.toLocaleString(navigator.language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const perMonthStr = perMonth.toLocaleString(navigator.language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // Append down payment to DOM
  downPaymentValue.innerHTML =
    "<sup>$</sup>" + totalDownPaymentStr.toLocaleString();
  downPaymentValue.parentNode.appendChild(downPaymentValue);
  // Append total to DOM
  totalValue.innerHTML = "<sup>$</sup>" + totalPriceStr.toLocaleString();
  totalValue.parentNode.appendChild(totalValue);
  // Append per month to DOM
  perMonthValue.innerHTML = "<sup>$</sup>" + perMonthStr.toLocaleString();
  perMonthValue.parentNode.appendChild(perMonthValue);
}

///////// Accessibility

// Grab all labels

const allLabels = document.querySelectorAll("label");

// On enter, select only the ones that are selected

allLabels.forEach((label) => label.addEventListener("keyup", onEnter));

function onEnter(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    this.click();
  }
}

calculate();
