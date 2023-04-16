/* imports */
import sketchData from "./sketch-data.js";
import { renderCard } from "./render-utils.js";

/* get DOM elements */
const season1 = document.getElementById("season1");
const season2 = document.getElementById("season2");

/* events */
window.addEventListener("load", async () => {
  // initialize a variable to hold sketches data
  const sketches = await sketchData;

  // create a card for each sketch and append to season container
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
});
