/* get DOM elements */
const sketchesListEl = document.getElementById("sketchesList");
const button = document.getElementById("showSketches");

/* button click event listener */
button.addEventListener("click", () => {
  // make a for of loop to iterate through the sketches
  for (let sketch of sketchesListEl.children) {
    // get attribute for data including tim
    let includesTim = sketch.getAttribute("data-includes-tim");

    // remove sketch from list if includesTim is false
    if (includesTim === "false") {
      sketchesListEl.removeChild(sketch);
    }
  }
});
