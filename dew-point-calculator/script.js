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

  /* style suggestion messages */
  // TODO use switch construction, one for each temp scale
  // fahrenheit
  if (tempScaleEl.value === "Fahrenheit") {
    if (dwpt === 51) {
      message = document.createTextNode(
        "Dew point is 51" + " " + tempScaleEl.value
      );
      console.log("message", message);
    } else {
      message = document.createTextNode("Dew point is not 51");
      console.log("message", message);
    }
  }
  // celsius
  else {
    message = document.createTextNode("You've selected Celsius");
    console.log("message", message);
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

* --- --- --- --- - * - --- --- --- --- */
