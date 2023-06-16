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
  console.log(
    "I am displaying component one on page load! Component two is hidden"
  );
}

function handleButtons() {
  handleComponentOneButton();
  handleComponentTwoButton();
}

function handleComponentOneButton() {
  // get button
  const componentOneButton = document.getElementById("componentOneButton");
  console.log("componentOneButton", componentOneButton);
  // listen for click
  componentOneButton.addEventListener("click", async () => {
    console.log("I clicked component one button");
    // hide component one and display component two
    toggleComponents();
    console.log("Hide component one and display component two");
  });
}

function handleComponentTwoButton() {
  // get button
  const componentTwoButton = document.getElementById("componentTwoButton");
  console.log("componentTwoButton", componentTwoButton);
  // listen for click
  componentTwoButton.addEventListener("click", async () => {
    console.log("I clicked component two button");
    // hide component two and display component one
    toggleComponents();
    console.log("Hide component two and display component one");
  });
}

function toggleComponents() {
  componentOneDiv.classList.toggle("hidden");
  componentTwoDiv.classList.toggle("hidden");
}
