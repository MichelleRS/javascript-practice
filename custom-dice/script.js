/* get DOM elements */
const form = document.getElementById("formMinMax");
const inputMin = document.getElementById("inputMin");
const inputMax = document.getElementById("inputMax");
const buttonRoll = document.getElementById("buttonRoll");

/* events */
// on submit display number rolled
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // convert user input values to numbers
  let min = Number(inputMin.value);
  let max = Number(inputMax.value);

  // calculate a range with min and max numbers
  let range = max - min + 1;

  // take that range and get a random number that represents the number rolled
  let numberRolled = Math.floor(Math.random() * range) + min;

  // display number rolled
  let par = document.createElement("p");
  let message = document.createTextNode("You rolled: " + numberRolled);
  par.appendChild(message);
  form.insertBefore(par, form.firstChild);
});
