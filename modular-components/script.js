/* imports */
import { renderComponentOne, renderComponentTwo } from "./render-utils.js";

/* get DOM elements */
const modularComponentSection = document.getElementById("modularComponent");

/* events */
window.addEventListener("load", async () => {
  doModularComponents();
});

/* functions */
function doModularComponents() {
  // initialize variables to store components
  let componentOne = renderComponentOne();
  let componentTwo = renderComponentTwo();
  // display component one elements
  modularComponentSection.append(componentOne);
  // listen for button clicks to toggle between component one and two
  doListenForButtonClicks(componentOne, componentTwo);
}

function doListenForButtonClicks(componentOne, componentTwo) {
  // get component one button
  let componentOneButton = document.getElementById("componentOneButton");
  // listen for component one button click
  componentOneButton.addEventListener("click", async () => {
    // remove component one elements from DOM
    modularComponentSection.removeChild(componentOne);
    // append component two elements to modularComponentSection
    modularComponentSection.append(componentTwo);
    // get component two button
    let componentTwoButton = document.getElementById("componentTwoButton");
    console.log("componentTwoButton", componentTwoButton);
    // listen for component two button click
    componentTwoButton.addEventListener("click", async () => {
      // remove component two elements from DOM
      modularComponentSection.removeChild(componentTwo);
      // append component one elements to modularComponentSection
      modularComponentSection.append(componentOne);
    });
  });
}
