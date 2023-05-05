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
function renderInputElement(element) {
  // create an input element
  let inputEl = document.createElement("input");
  console.log("inputEl", inputEl);
  // TODO add attributes to input element
  //   inputEl.setAttribute("id", element.id);
  inputEl.setAttribute("type", "text");

  // return input element
  return inputEl;
}

/* display function */
function displayFormElements() {
  console.log("Hello!");

  // work through each of the items in the data schema
  for (let item of dataSchema) {
    // TODO render an element for maze select
    // let selectElement = renderSelectElement(item);
    // render an element for score input
    let inputElement = renderInputElement(item);
    // add the input and select elements to the game form
    gameForm.appendChild(inputElement);
  }
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
* --- --- --- --- - * - --- --- --- --- */
