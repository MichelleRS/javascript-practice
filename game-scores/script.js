/* imports */
// get data
import dataSchema from "./data-schema.js";

/* get DOM elements */
const gameForm = document.getElementById("gameForm");

/* events */
// display form elements on page load
window.addEventListener("load", (dataSchema) => {
  // function call to display form elements
  displayFormElements(dataSchema);
});

/* render functions */
// TODO render a select element

// render an input element
// WIP: move some code to renderDivCtrlElement()
function renderInputElement(element) {
  element = dataSchema;
  // create an input element
  let inputEl = document.createElement("input");
  console.log("inputEl", inputEl);
  // TODO add attributes to input element
  inputEl.setAttribute("id", element.id);
  inputEl.setAttribute("type", "text");

  // return input element
  return inputEl;
}

// render div control element to contain a label and element tag for data scheme
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

  /* get form control by element type */
  // initialize a variable for form control element
  let formCtrlEl = null;

  switch (element.type) {
    case "input":
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
function displayFormElements(item) {
  console.log("Hello!");
  let divEl = renderDivElement(item);
  // TODO render an element for maze select
  // let selectElement = renderSelectElement(item);
  // render an element for score input
  // let inputElement = renderInputElement(item);
  // add the select and input elements to the game form
  gameForm.appendChild(divEl);
}

/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
- [x] get displayFormElements
- [x] get gameForm
- [x] get inputEl
- [] get divEl

tasks
initial rendering (mvp)
- [] get renderInputElement() to display in form
- [] get renderSelectElement() to display in form

local storage (mvp)
- [] save to local storage on form submit

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
