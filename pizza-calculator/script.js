// get DOM elements
const form = document.getElementById("pizza-calculator-form");
const input = document.getElementById("numberInput");
const button = document.getElementById("calculatePizzas");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  // get number of people
  let numberOfPeople = Number(input.value);
  // calculate a whole number plus 1 extra
  let calculation = Math.floor(numberOfPeople / 1.5) + 1;
  // display calculated results
  result.textContent = calculation;
});
