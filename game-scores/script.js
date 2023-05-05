/* imports */
// get data
import dataSchema from "./data-schema.js";

/* get DOM elements */
const gameForm = document.getElementById("gameForm");

/* events */
// TODO display form elements on page load
window.addEventListener("load", () => {
  // function call to display form elements
  displayFormElements();
});

/* TODO render functions */
// renderInputElement()
// renderSelectElement()

/* display function */
function displayFormElements() {
  console.log("Hello!");
  /*
  // work through each of the items in the data schema
  for (let item of dataSchema) {
    // render an element for input
    let inputElement = renderInputElement(item);
    // render an element for select
    let selectElement = renderSelectElement(item);
    // add the input and select elements to the game form
    gameForm.appendChild(inputElement, selectElement);
  }
  */
}

/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
[x] - get displayFormElements on page load

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

* --- --- --- --- - * - --- --- --- --- */
