/* set up canvas */

// get DOM element for canvas
const canvas = document.querySelector("canvas");
// get object for drawing area
const ctx = canvas.getContext("2d");
// set width and height equal to the browser viewport
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

/* events */

// test draw method
window.addEventListener("load", () => {
  const testBall = new Ball(30, 90, 4, 4, "blue", 10);
  testBall.x;
  testBall.size;
  testBall.color;
  testBall.draw();
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

/* ball object properties and methods */

class Ball {
  // properties
  constructor(x, y, velX, velY, color, size) {
    // x, y: where the ball starts on screen
    this.x = x;
    this.y = y;
    // velX, velY: velocity
    this.velX = velX;
    this.velY = velY;
    // color: assigned a random rgb
    this.color = color;
    // size: radius in pixels
    this.size = size;
  }

  // method for drawing ball
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}
