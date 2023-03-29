/* get DOM elements */
const sketchesListEl = document.getElementById("sketchesList");
const buttonShowTim = document.getElementById("showTimSketches");
const buttonShowAll = document.getElementById("showAllSketches");

/* button event listeners */

buttonShowTim.addEventListener("click", () => {
  // make a for of loop to iterate through the sketches
  for (let sketch of sketchesListEl.children) {
    // get attribute for data including tim
    let includesTim = sketch.getAttribute("data-includes-tim");

    // remove sketch from list if includesTim is false
    if (includesTim === "false") {
      sketchesListEl.removeChild(sketch);
    }
  }

  buttonShowAll.addEventListener("click", () => {
    // TODO display all sketches (if includesTim is true or false)
  });
});
