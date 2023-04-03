/* get DOM elements */
const form = document.getElementById("formMinMax");
const buttonRoll = document.getElementById("buttonRoll");

/* functions */
// get number rolled
function getNumberRolled(min, max) {
  let range = max - min + 1;
  let numberRolled = Math.floor(Math.random() * range) + min;
  return numberRolled;
}

// get number from input
function getNumberFromInput(name) {
  // get input element
  const input = document.getElementById(name);
  // convert input to a number
  let result = Number(input.value);
  return result;
}

/* display functions */
//  display number rolled
function doRollDice(minInput, maxInput) {
  let min = getNumberFromInput(minInput);
  let max = getNumberFromInput(maxInput);
  let number = getNumberRolled(min, max);

  let message = "Rolled: " + number;
  console.log("message", message);
}

/* events */
// on submit display number rolled
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // FIX display number rolled
  // new plan:
  // write as event listener without function calls (see TODO at end of code), commit
  // refactor to simplify code using function calls, commit
  doRollDice();
});

// TODO
// steps for how to display number rolled on button click:
// get user input for min
// get user input for max
// convert user input values to numbers
// take the numbers to calculate a range
// take that range and get a random number that represents the roll of the die
// display a message that includes the roll of the die
