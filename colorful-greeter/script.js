/* get DOM elements */
const formEl = document.getElementById("colorfulGreetingForm");
const outputPar = document.getElementById("outputPar");
const greetingInput = document.getElementById("greetingInput");
const colorInput = document.getElementById("colorInput");

function showColorfulGreeting(greetingInput, colorInput) {
  // get greeting input value
  let greeting = greetingInput.value;
  // get color input value
  color = "color:" + colorInput.value;
  // set greeting to output paragraph
  outputPar.textContent = greeting;
  // apply style to output paragraph
  outputPar.style = color;
}

// TODO error handling function

/* show colorful greeting on form submit */
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  showColorfulGreeting(greetingInput, colorInput);
});
