/* set up canvas */

// get DOM element for canvas
const canvas = document.querySelector("canvas");
// get object for drawing area
const ctx = canvas.getContext("2d");
// set width and height equal to the browser viewport
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

/* events */

// functions test
window.addEventListener("load", () => {
  random(2, 50);
  randomRGB();
});

/* functions */

// generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("num", num);
  return num;
}

// use random number to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}
