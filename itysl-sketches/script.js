/* imports */
import sketchData from "./sketch-data.js";
import { renderCard } from "./render-utils.js";

/* get DOM elements */
const buttonShowTim = document.getElementById("showTimSketches");
const buttonShowAll = document.getElementById("showAllSketches");
const season1 = document.getElementById("season1");
const season2 = document.getElementById("season2");

/* get data */
// initialize a variable to hold sketch data
const sketches = await sketchData;
// initialize a variable to hold array of sketches that include tim
const includesTim = sketches.filter((sketch) => sketch.includesTim != false);

/* events */
window.addEventListener("load", async () => {
  await fetchAndDisplaySketches();
});

// TODO button click events: show sketches with Tim, show all sketches
buttonShowTim.addEventListener("click", async () => {
  // delete current list of sketches
  season1.remove();
  season2.remove();

  // TODO show sketches with tim
  console.log("includesTim", includesTim);
});

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
