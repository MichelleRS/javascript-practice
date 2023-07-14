/* imports */
import data from "./data.js";
import { renderElement } from "./render-utils.js";

/* get data */
const dataSchema = data;

/* events */
window.addEventListener("load", () => {
  fetchAndDisplayForm();
});

/* functions */
async function fetchAndDisplayForm() {
  // get form element
  const form = document.getElementById("contactsForm");
  // loop, render, append: for each item in data schema, create a containing element and append to form
  for (let item of dataSchema) {
    // make a containing element for item
    let itemElement = renderElement(item);
    // append containing element to form
    form.appendChild(itemElement);
  }
}
