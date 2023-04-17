/* imports */
import sketchData from "./sketch-data.js";
import { renderCard } from "./render-utils.js";

/* get DOM elements */
const buttonShowTim = document.getElementById("showTimSketches");
const buttonShowAll = document.getElementById("showAllSketches");
const season1 = document.getElementById("season1");
const season2 = document.getElementById("season2");

/* events */
window.addEventListener("load", async () => {
  await fetchAndDisplaySketches();
});

// TODO button click events: show sketches with Tim, show all sketches

// TODO doShowIncludesTim()

/* display functions */
async function fetchAndDisplaySketches() {
  // initialize a variable to hold sketch data
  const sketches = await sketchData;

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
  }
}
