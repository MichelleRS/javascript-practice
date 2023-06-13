/* imports */
import { renderComponentOne } from "./render-utils.js";

/* get DOM elements */
const modularComponentSection = document.getElementById("modularComponent");

/* events */
window.addEventListener("load", async () => {
  // initialize a variable to store component one elements
  let componentOne = renderComponentOne();
  // append component one elements to modularComponentSection
  modularComponentSection.append(componentOne);
});
