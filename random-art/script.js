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

/* events */
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

// helper function: rules for drawing a line
function drawLine(startX, startY, endX, endY, color, thickness) {
  // start path
  context.beginPath();
  // move to the start of line
  context.moveTo(startX, startY);
  // connect start of line to end of line
  context.lineTo(endX, endY);
  // set line color
  context.strokeStyle = color;
  // set line thickness
  context.lineWidth = thickness;
  // draw line
  context.stroke();
}

// function to draw a random circle
function drawRandomCircle() {
  let radius = getRandomInt(5, 100);
  let x = getRandomInt(radius, width - radius);
  let y = getRandomInt(radius, height - radius);
  let color = getRandomColor();
  drawCircle(x, y, radius, color);
}

// function to draw random line
function drawRandomLine() {
  // get random line start x
  let startX = getRandomInt(0, width);
  // get random line start y
  let startY = getRandomInt(0, height);
  // get random line end x
  let endX = getRandomInt(0, width);
  // get random line end y
  let endY = getRandomInt(0, height);
  // get random color
  let color = getRandomColor();
  // get random thickness
  let thickness = getRandomInt(1, 10);
  // draw random line
  drawLine(startX, startY, endX, endY, color, thickness);
}

// function to draw random art
function doDrawArt() {
  if (canvas.getContext) {
    for (let i = 0; i < 100; i++) {
      // draws 100 random circles
      drawRandomCircle();
      // draws 100 random lines
      drawRandomLine();
    }
  }
}
