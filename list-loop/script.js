/* get DOM elements */
const sketchesListEl = document.getElementById("sketchesList");
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

    // if 'data-includes-tim' is true:
    if (includesTim === "true") {
      // apply a class that changes text color
      sketch.className = "includesTim";

      // render a span element to add asterisk
      let annotationSpan = document.createElement("span");
      annotationSpan.textContent = "*";
      sketch.appendChild(annotationSpan);
    }
  }
});
