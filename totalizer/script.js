// get DOM elements
const display = document.getElementById("displayText");
const totalDisplay = document.getElementById("totalValue");
const inputValue = document.getElementById("inputValue");
const buttonAdd = document.getElementById("buttonAdd");
const buttonReset = document.getElementById("buttonReset");

// state
let total = 0;

// events

// add total
buttonAdd.addEventListener("click", (e) => {
  // prevent page from refreshing
  e.preventDefault();

  // get input value and convert to a number
  let value = Number(inputValue.value);

  // add value to total
  total = total + value;

  // display current total value
  totalDisplay.textContent = total;

  // clear value from input
  inputValue.value = "";
});

// reset total
buttonReset.addEventListener("click", () => {
  // set total back to 0
  total = 0;
  // display total
  totalDisplay.textContent = total;
});
