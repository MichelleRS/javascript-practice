/* get DOM elements */
const resultsEl = document.getElementById("results");
const formEl = document.getElementById("formCalc");
const tempScaleEl = document.getElementById("tempScale");
const tempNumEl = document.getElementById("tempNum");
const humidityNumEl = document.getElementById("humidityNum");

/* events */
// calculate dew point on form submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // convert input elements to numbers
  let temp = Number(tempNumEl.value);
  let humidity = Number(humidityNumEl.value);

  // calculate dew point
  let dwpt = temp - (100 - humidity) / 5;

  /* insert dew point message with calculation into DOM */
  // initialize an empty string for message
  let message = "";
  // initialize a new paragraph element node
  let par = document.createElement("p");
  // set message to a text node with calculation results
  message = document.createTextNode(
    "The dew point is " + dwpt + " " + tempScaleEl.value
  );
  // append text node to paragraph element
  par.appendChild(message);
  // add paragraph element to DOM; show in results section
  resultsEl.insertBefore(par, resultsEl.firstChild);

  doStyleSuggestion(dwpt);
});

/* functions */
// TODO render dew point with styling suggestions for curly hair
function doStyleSuggestion(dwpt) {
  /* TODO insert style suggestion message into DOM */
  // initialize an empty string for message
  let message = "";

  /* */
  // TODO use switch construction
  if (dwpt === 51) {
    message = "Dew point is 51";
    console.log("message", message);
  } else {
    message = "Dew point is not 51";
    console.log("message", message);
  }
}

/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
[x] get form and its child elements
[x] get input elements as numbers
[x] get dew point

tasks
[x] calculate dew point
[x] show dew point result
[x] show dew point result with temperature scale selection

* --- --- --- --- - * - --- --- --- --- */
