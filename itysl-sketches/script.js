/* imports */
import sketchData from "./sketch-data.js";
import { renderCard } from "./render-utils.js";

/* get DOM elements */
const buttonShowTim = document.getElementById("showTimSketches");
const buttonShowAll = document.getElementById("showAllSketches");
const season1 = document.getElementById("season1");
const season2 = document.getElementById("season2");
const season3 = document.getElementById("season3");

/* get data */
// initialize a variable to hold sketch data
const sketches = await sketchData;

/* events */
window.addEventListener("load", async () => {
  await fetchAndDisplaySketches();
});

buttonShowTim.addEventListener("click", async () => {
  // TODO if includesTim is false, hide sketch card element
});

// TODO show all sketches

/* display functions */
async function fetchAndDisplaySketches() {
  // loop, render, append: create a card for each sketch and append to season container
  for (let sketch of sketches) {
    // season 1 list
    if (sketch.season === 1) {
      const card = renderCard(sketch);
      season1.append(card);
    }
    // season 2 list
    if (sketch.season === 2) {
      const card = renderCard(sketch);
      season2.append(card);
    }
    // season 3 list
    if (sketch.season === 3) {
      const card = renderCard(sketch);
      season3.append(card);
    }
  }
}
