/* imports */
import sketchData from "./sketch-data.js";
import { renderCard } from "./render-utils.js";

/* get DOM elements */
const buttonShowTim = document.getElementById("showTimSketches");
const buttonShowAll = document.getElementById("showAllSketches");
const season1 = document.getElementById("season1");
const season2 = document.getElementById("season2");
// initialize a variable to hold sketch data
const sketches = await sketchData;

/* events */
window.addEventListener("load", async () => {
  await fetchAndDisplaySketches();
});

// TODO button click events: show sketches with Tim, show all sketches
buttonShowTim.addEventListener("click", async () => {
  await doShowIncludesTim();
});

// TODO doShowIncludesTim()
async function doShowIncludesTim() {
  const includesTim = sketches.filter((sketch) => sketch.includesTim != false);
  console.log("includesTim", includesTim);
  return includesTim;
}

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
  }
}

/* --- * --- * --- NOTES --- * --- * --- *

clo checklist
[x] get season 1 list
[x] get season 2 list
[x] get buttonShowTim
[x] get includesTim


* --- --- --- --- - * - --- --- --- --- */
