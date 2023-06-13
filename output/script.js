/* get DOM elements */
// get form
const form = document.getElementById("form");
// get checkboxes
const checkboxes = document.querySelectorAll("input");
// get output
let output = document.querySelector("[name='currentTotal']");

/* state */
// FIXED: by moving row total out of loop
let rowTotal = 0;

/* events */
window.addEventListener("load", () => {
  for (let i = 0; i < checkboxes.length; i++) {
    // initialize variable for checkbox input
    let checkbox = checkboxes[i];
    // oninput event listener
    checkbox.addEventListener("input", () => {
      // if checkbox is checked
      if (checkbox.checked) {
        // add checkbox value to rowTotal
        rowTotal += parseInt(checkbox.value);
        // update output element to display rowTotal
        output.textContent = "" + rowTotal;
      }
    });
  }
});
