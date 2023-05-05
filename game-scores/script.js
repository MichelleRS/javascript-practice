/* imports */
// get data
import dataSchema from "./data-schema.js";

/* get DOM elements */
const gameForm = document.getElementById("gameForm");

/* events */
// display form elements on page load
window.addEventListener("load", () => {
  // function call to display form elements
  displayFormElements();
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

// TODO render div control element

/* display function */
function displayFormElements(item) {
  console.log("Hello!");
  // TODO render an element for maze select
  // let selectElement = renderSelectElement(item);
  // render an element for score input
  let inputElement = renderInputElement(item);
  // add the select and input elements to the game form
  gameForm.appendChild(inputElement);
}

/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
[x] - get displayFormElements on page load
[x] - get inputEl on page load

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
- [] fix input displaying twice
  - Solution: Remove loop and just render input element. The loop is not needed since there is just one input to display. It's displaying twice because there are two items in the data.
* --- --- --- --- - * - --- --- --- --- */
