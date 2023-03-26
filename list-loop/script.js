/* get DOM elements */
const sketchesListEl = document.getElementById("sketchesList");
const annotationSpan = document.querySelector(".annotation");
const button = document.getElementById("showSketches");

/* button click event listener */
button.addEventListener("click", () => {
  // get the number of sketches
  const numOfSketches = sketchesListEl.children.length;

  // make a loop to iterate through the sketches
  for (i = 0; i < numOfSketches; ++i) {
    // get sketch element
    let sketch = sketchesListEl.children[i];
    // get data attribute for tim
    let includesTim = sketch.getAttribute("data-includes-tim");

    // if 'data-includes-tim' is true: (1) add class of includesTim, (2) add asterisk to annotationSpan
    if (includesTim === "true") {
      sketch.className = "includesTim";
      annotationSpan.textContent = "*";
    }
  }
});
