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
  // initialize an empty string for message
  let message = "";

  /* messages: style suggestion */
  // fahrenheit
  if (tempScaleEl.value === "Fahrenheit") {
    // dry: 15 to 30°F
    // mid-range: 30 to 40°F
    // best: 40 to 60°F
    // high: 61+°F
  }
  // celsius
  else {
    // dry: -1°C
    // mid-range: -1 to 4°C
    // best: 4 to 16°C
    // high: 16+°C
  }

  /* add style suggestion message to DOM */
  // initialize a new paragraph element node
  let par = document.createElement("p");
  // append message to paragraph element
  par.appendChild(message);
  // append paragraph element as last child in results section
  resultsEl.appendChild(par);
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
[] show style suggestions after dew point result
[] clear previous result on click
[] FIX incorrect dew point calculation

* --- --- --- --- - * - --- --- --- --- */
