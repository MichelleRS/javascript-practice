/* get DOM elements */
const resultsEl = document.getElementById("results");
const formEl = document.getElementById("formCalc");
const tempScaleEl = document.getElementById("tempScale");
const tempNumEl = document.getElementById("tempNum");
const humidityNumEl = document.getElementById("humidityNum");
const calcBtn = document.getElementById("calcBtn");

/* events */
// calculate dew point on form submit
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // convert input elements to numbers
  let temp = Number(tempNumEl.value);
  let humidity = Number(humidityNumEl.value);

  // initialize empty string for dew point
  let dwpt = "";

  /* initialize DOM elements for results message */
  // initialize an empty string for message
  let resultsMsg = "";
  // initialize a new paragraph element node
  let resultsPar = document.createElement("p");

  /* if user selects fahrenheit */
  if (tempScaleEl.value === "Fahrenheit") {
    // convert temp to celsius
    let celsius = (temp - 32) / 1.8;
    // calculate dew point
    dwpt = celsius - (100 - humidity) / 5;
    // convert dewpoint to fahrenheit
    dwpt = dwpt * 1.8 + 32;

    // set message to a text node with calculation results
    resultsMsg = document.createTextNode(
      "The dew point is approximately " +
        dwpt.toFixed(1) +
        " " +
        tempScaleEl.value
    );
    // append text node to paragraph element
    resultsPar.appendChild(resultsMsg);
    // add paragraph element to DOM; show in results section
    resultsEl.insertBefore(resultsPar, resultsEl.firstChild);
  } else {
    /* if user selects celsius */
    // convert temp to celsius
    let celsius = (temp - 32) / 1.8;
    // calculate dew point
    dwpt = celsius - (100 - humidity) / 5;

    // set message to a text node with calculation results
    resultsMsg = document.createTextNode(
      "The dew point is approximately " +
        dwpt.toFixed(1) +
        " " +
        tempScaleEl.value
    );
    // append text node to paragraph element
    resultsPar.appendChild(resultsMsg);
    // add paragraph element to DOM; show in results section
    resultsEl.insertBefore(resultsPar, resultsEl.firstChild);
  }

  // render style suggestion message
  doStyleSuggestion(dwpt);

  // remove calculate dew point button
  calcBtn.remove();

  /* render reset button after messages */
  renderResetBtn();

  // clear form on reset button click
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
});

/* functions */
// get message with style suggestion based on dew point
function doStyleSuggestion(dwpt) {
  // initialize an empty string for message
  let message = "";

  /* messages: style suggestion */
  // fahrenheit
  if (tempScaleEl.value === "Fahrenheit") {
    // dry: 15 to 30°F
    if (between(dwpt, 15, 30)) {
      message = document.createTextNode("Dry");
    }
    // mid-range: 30 to 40°F
    if (between(dwpt, 30, 40)) {
      message = document.createTextNode("Mid-range");
    }
    // best: 40 to 60°F
    if (between(dwpt, 40, 60)) {
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
    if (between(dwpt, -1, 4)) {
      message = document.createTextNode("Mid-range");
    }
    // best: 4 to 16°C
    if (between(dwpt, 4, 16)) {
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

// render a button to clear results and form
function renderResetBtn() {
  // create button element
  const resetBtn = document.createElement("button");

  // add attributes to button element
  resetBtn.setAttribute("type", "button");
  resetBtn.setAttribute("id", "resetBtn");

  // add button text
  resetBtn.textContent = "Clear Results and Form";

  // append reset button to results element
  resultsEl.appendChild(resetBtn);
}

/* helper function */
// return condition for temp ranges in doStyleSuggestion()
function between(dwpt, min, max) {
  return dwpt >= min && dwpt <= max;
}
/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
[x] get form and its child elements
[x] get input elements as numbers
[x] get dew point
[x] get calculate button
[x] get reset button

tasks
[x] calculate dew point
[x] show dew point result
[x] show dew point result with temperature scale selection
[x] show initial style message after dew point result
[x] clear messages above form on calculate button click: 
  [x] remove calculate button
  [x] render clear results button after message
  [x] add event listener to results button to clear messages and inputs
  [x] move rendering clear results button to its own function
  [x] refactor render resetBtn in a function
[x] calculate dew point based on temperature scale selection
[] fix overlapping ranges
[x] refactor doStyleSuggestion() with helper function
  (see top answer):
  https://stackoverflow.com/questions/6454198/check-if-a-value-is-within-a-range-of-numbers
[] add to style message

* --- --- --- --- - * - --- --- --- --- */
