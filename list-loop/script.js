/* get DOM elements */
const sketchesListEl = document.getElementById("sketchesList");
const button = document.getElementById("showSketches");

/* button click event listener */
button.addEventListener("click", () => {
  // make a for of loop to iterate through the sketches
  for (let sketch of sketchesListEl.children) {
    // get data attribute for tim
    let includesTim = sketch.getAttribute("data-includes-tim");

    // if 'data-includes-tim' is true:
    if (includesTim === "true") {
      // apply a class that changes text color
      sketch.className = "includesTim";

      // render a span element
      let spanEl = document.createElement("span");
      // add asterisk to span element
      let asterisk = document.createTextNode("*");
      // add to the DOM tree
      spanEl.appendChild(asterisk);

      // add span element to sketch element
      sketch.append(spanEl);
    }
  }
});
