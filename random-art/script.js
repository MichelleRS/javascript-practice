/* global variables */
// get DOM element for canvas
const canvas = document.querySelector("canvas");
// get object for drawing area
const context = canvas.getContext("2d");
// set width and height equal to the browser viewport
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
// define colors
colors = [
  // red
  "#ff5050",
  "#ff0066",
  "#ff3300",
  //orange
  "#ff9900",
  "#ff9966",
  "#ff9933",
  // yellow
  "#ffcc66",
  "#ffff99",
  "#ffcc00",
  // green
  "#006666",
  "#669999",
  "#009999",
  // blue
  "#003366",
  "#336699",
  "#3366cc",
  // purple
  "#6600ff",
  "#9900cc",
  "#ccccff",
];

window.addEventListener("load", () => {
  doDrawArt();
});

/* functions */

// helper function: get random number
function getRandomInt(min, max) {
  let range = max - min + 1;
  let result = Math.floor(Math.random() * range + min);
  return result;
}

// helper function: get random color
function getRandomColor() {
  return colors[getRandomInt(0, colors.length)];
}

// helper function: rules for drawing a circle
function drawCircle(x, y, radius, color) {
  context.beginPath();
  // draw a circle
  context.arc(x, y, radius, 0, 2 * Math.PI);
  // set the fill style to color
  context.fillStyle = color;
  // fill in the circle
  context.fill();
}

// function to draw a random circle
function drawRandomCircle() {
  let radius = getRandomInt(5, 100);
  let x = getRandomInt(radius, width - radius);
  let y = getRandomInt(radius, height - radius);
  let color = getRandomColor();
  drawCircle(x, y, radius, color);
}

// function to draw art
function doDrawArt() {
  if (canvas.getContext) {
    for (let i = 0; i < 100; i++) {
      // draws 100 random circles
      drawRandomCircle();
    }
  }
}
