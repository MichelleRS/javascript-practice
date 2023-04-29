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
// TODO get message with style suggestion based on dew point
function doStyleSuggestion(dwpt) {
  // initialize an empty string for message
  let message = "";

  /* messages: style suggestion */
  // fahrenheit
  if (tempScaleEl.value === "Fahrenheit") {
    // dry: 15 to 30°F
    if (dwpt >= 15 && dwpt <= 30) {
      message = document.createTextNode("Dry");
    }
    // mid-range: 30 to 40°F
    if (dwpt >= 30 && dwpt <= 40) {
      message = document.createTextNode("Mid-range");
    }
    // best: 40 to 60°F
    if (dwpt >= 40 && dwpt <= 60) {
      message = document.createTextNode("Best");
    }
    // high: 61+°F
    if (dwpt >= 61) {
      message = document.createTextNode("High");
    }
  }
  // celsius
  else {
    // dry: -1°C
    if (dwpt <= -1) {
      message = document.createTextNode("Dry");
    }
    // mid-range: -1 to 4°C
    if (dwpt >= -1 && dwpt <= 4) {
      message = document.createTextNode("Mid-range");
    }
    // best: 4 to 16°C
    if (dwpt >= 4 && dwpt <= 16) {
      message = document.createTextNode("Best");
    }
    // high: 16+°C
    if (dwpt >= 16) {
      message = document.createTextNode("High");
    }
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
[] show initial style message after dew point result
[] clear previous result on click
[] FIX incorrect dew point calculation
[] FIX overlapping ranges
[] refactor doStyleSuggestion() with helper function
[] add to style message

* --- --- --- --- - * - --- --- --- --- */
