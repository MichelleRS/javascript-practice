/* imports */
// get data
import dataSchema from "./data-schema.js";

/* get DOM elements */
const gameForm = document.getElementById("gameForm");

/* state */
let savedData = [];

let storeScore;

/* events */
// display form elements on page load
window.addEventListener("load", () => {
  // function call to display form elements
  displayFormElements(dataSchema);
});

// save
gameForm.addEventListener("submit", (e) => {
  console.log("hello");
  // prevent form from submitting itself
  e.preventDefault();

  // get the score of the data being saved
  let score = getElementValue("score");

  // initialize a variable to find the index position of the score to save
  let pos = findDataPos(score);

  // if the index doesn't exist, get the position
  if (isNaN(pos)) {
    pos = savedData.length;
  }

  // store the data at position
  storeData(pos);
});

/* function */
function saveDataStore() {
  let storeJson = JSON.stringify(savedData);

  localStorage.setItem(storeScore, storeJson);
}

/* render functions */
// render a select element
function renderSelectElement(element) {
  // create a select element
  let selectEl = document.createElement("select");
  // add id to select element
  selectEl.setAttribute("id", element.id);
  // get array of maze values from select object
  let myArray = element.value;
  // loop through maze values
  for (let index in myArray) {
    // create option element
    let optionEl = document.createElement("option");
    // add text value
    let optionText = document.createTextNode(myArray[index]);
    // append text value to option element
    optionEl.appendChild(optionText);
    // append option to select element
    selectEl.appendChild(optionEl);
  }
  // return select element
  return selectEl;
}

// render an input element
function renderInputElement(element) {
  element = dataSchema;
  // create an input element
  let inputEl = document.createElement("input");
  // add attributes to input element
  inputEl.setAttribute("id", element.id);
  inputEl.setAttribute("type", "number");
  // return input element
  return inputEl;
}

// render div control element to contain a label and element tag
function renderDivElement(element) {
  /* parent element */
  // create a div element
  let divEl = document.createElement("div");
  // assign class of control
  divEl.className = "control";

  /* create label element */
  let labelEl = document.createElement("label");
  // set attribute value
  labelEl.setAttribute("for", element.id);
  // create text node for label
  let text = document.createTextNode(element.label);
  // append text node to label
  labelEl.appendChild(text);
  // append label to div element
  divEl.appendChild(labelEl);

  /* get form control by element type */
  // initialize a variable for form control element
  let formCtrlEl = null;

  switch (element.id) {
    case "maze":
      formCtrlEl = renderSelectElement(element);
      break;

    case "score":
      formCtrlEl = renderInputElement(element);
      break;
  }

  if (formCtrlEl == null) {
    return null;
  }

  // set attributes
  formCtrlEl.setAttribute("id", element.id);
  // append label and its form control to div element
  divEl.appendChild(formCtrlEl);
  // return div element
  return divEl;
}

/* display function */
function displayFormElements(schema) {
  // work through each of the object elements in the data schema
  for (let objectEl of schema) {
    // make a div element for the item
    let divEl = renderDivElement(objectEl);
    // add the div element to form
    // gameForm.append(divEl);
    gameForm.insertBefore(divEl, gameForm.firstChild);
  }
}

/* helper functions */
// get element value
function getElementValue(id) {
  // get the id
  let element = document.getElementById(id);
  // return the value of the id
  return element.value;
}
// get position
function findDataPos(score) {
  // loop through each item in the savedData array
  for (let pos = 0; pos < savedData.length; pos++) {
    // initialize variable for score
    let savedScore = savedData[pos].score;
    // check if stored item matches score being search
    if (savedScore == score) {
      // if score match found, return position in array
      return pos;
    }
  }
  // if score match not found, return NaN
  return NaN;
}

// store data
function storeData(pos) {
  // create an empty data item
  let newData = {};

  // work through the data schema
  for (let property of dataSchema) {
    // get the data out of the HTML element
    let itemData = getElementValue(property.id);
    // create a property to store that data
    newData[property.id] = itemData;
  }
  // put the new data in the saved data array
  savedData[pos] = newData;

  // save the data store
  saveDataStore();
}

/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
- [x] get displayFormElements
- [x] get gameForm
- [x] get inputEl
- [x] get divEl
- [x] get selectEl and optionEl

tasks
initial rendering (mvp)
- [x] get renderInputElement() to display in form
- [x] get renderSelectElement() to display in form
- [x] get input and select to display before button

local storage (mvp)
- [] save to local storage on form submit
  - [x] get input values stored in savedData

stretch goal ideas
- [] renderFormElement()
- [] renderButtonElement()
- [] renderRadioElement() for includesMagicPumpkin boolean value
- [] display scores
- [] add style

debugging
- [x] fix input element displaying twice
  - Solution: Remove loop and just render input element. The loop is not needed since there is just one input to display. It was displaying twice because there are two items in data-schema.js.
* --- --- --- --- - * - --- --- --- --- */
