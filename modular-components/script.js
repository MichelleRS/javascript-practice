/* imports */
import { renderComponentOne, renderComponentTwo } from "./render-utils.js";

/* get DOM elements */
const modularComponentSection = document.getElementById("modularComponent");

/* events */
// TODO refactor with function calls
window.addEventListener("load", async () => {
  // initialize a variable to store component one elements
  let componentOne = renderComponentOne();
  // append component one elements to modularComponentSection
  modularComponentSection.append(componentOne);
  // get component one button element
  let componentOneButton = document.getElementById("componentOneButton");
  // listen for component one button click
  componentOneButton.addEventListener("click", async () => {
    // remove component one elements from DOM
    modularComponentSection.removeChild(componentOne);
    // initialize variable to store component two elements
    let componentTwo = renderComponentTwo();
    // append component two elements to modularComponentSection
    modularComponentSection.append(componentTwo);
    // get component two button element
    let componentTwoButton = document.getElementById("componentTwoButton");
    // listen for component two button click
    componentTwoButton.addEventListener("click", async () => {
      // remove component two elements from DOM
      modularComponentSection.removeChild(componentTwo);
      // append component one elements to modularComponentSection
      modularComponentSection.append(componentOne);
    });
  });
});

/* functions */
