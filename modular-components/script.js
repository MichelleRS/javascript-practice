/* imports */
import { renderComponentOne, renderComponentTwo } from "./render-utils.js";

/* get DOM elements */
const modularComponentSection = document.getElementById("modularComponent");
const componentOneDiv = renderComponentOne();
const componentTwoDiv = renderComponentTwo();

/* events */
window.addEventListener("load", async () => {
  displayComponentOne();
  handleComponentOneButton();
});

/* functions */
function displayComponentOne() {
  // display component one
  modularComponentSection.append(componentOneDiv);
  console.log("I am displaying component one on page load!");
}

function handleComponentOneButton() {
  // get component one button
  let componentOneButton = document.getElementById("componentOneButton");
  // listen for click
  componentOneButton.addEventListener("click", async () => {
    console.log("I clicked component one button");
    // remove component one elements from DOM
    modularComponentSection.removeChild(componentOneDiv);
    console.log("I removed component one div");
    // append component two elements to modularComponentSection
    modularComponentSection.append(componentTwoDiv);
    console.log("I am displaying component two div");
    // function call to handle component two button
    handleComponentTwoButton();
  });
}

function handleComponentTwoButton() {
  // get component two button
  let componentTwoButton = document.getElementById("componentTwoButton");
  // listen for click
  componentTwoButton.addEventListener("click", async () => {
    console.log("I clicked component two button");
    // remove component two elements from DOM
    modularComponentSection.removeChild(componentTwoDiv);
    console.log("I removed component two div");
    // append component one elements to modularComponentSection
    modularComponentSection.append(componentOneDiv);
    console.log("I am displaying component one");
    // function call to handle component one button
    handleComponentOneButton();
  });
}
