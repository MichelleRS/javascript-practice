/* imports */
import { renderComponentOne, renderComponentTwo } from "./render-utils.js";

/* get DOM elements */
const modularComponentSection = document.getElementById("modularComponent");
const componentOneDiv = renderComponentOne();
const componentTwoDiv = renderComponentTwo();

/* events */
window.addEventListener("load", async () => {
  handleComponents();
  handleButtons();
});

/* functions */
function handleComponents() {
  // render components
  modularComponentSection.append(componentOneDiv, componentTwoDiv);
  // hide component two
  componentTwoDiv.classList.add("hidden");
}

function handleButtons() {
  handleComponentOneButton();
  handleComponentTwoButton();
}

function handleComponentOneButton() {
  // get button
  const componentOneButton = document.getElementById("componentOneButton");
  // listen for click
  componentOneButton.addEventListener("click", async () => {
    // hide component one and display component two
    toggleComponents();
  });
}

function handleComponentTwoButton() {
  // get button
  const componentTwoButton = document.getElementById("componentTwoButton");
  // listen for click
  componentTwoButton.addEventListener("click", async () => {
    // hide component two and display component one
    toggleComponents();
  });
}

function toggleComponents() {
  componentOneDiv.classList.toggle("hidden");
  componentTwoDiv.classList.toggle("hidden");
}
