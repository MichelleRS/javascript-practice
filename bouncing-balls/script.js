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

  // method for moving ball
  update() {
    /* check if ball reaches edge of canvas */
    // if x coordinate is greater than width of canvas (ball going off right edge)
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }
    // if x coordinate is smaller than 0 (ball going off left edge)
    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
    // if y coordinate is grater than height of canvas (ball going off bottom edge)
    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }
    // if y coordinate is smaller than 0 (ball going off top edge)
    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }
    // add velocity values to coordinates
    this.x += this.velX;
    this.y += this.velY;
  }

  // method for collision detection
  collisionDetect() {
    for (const ball of balls) {
      // if current ball is not itself, get values
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // if the balls overlap, change ball color
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

// storage for balls
const balls = [];

// create an instance for 25 random balls
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // to avoid drawing errors, ball position drawn at least one ball width away from the edge of the canvas
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  // add ball to balls array
  balls.push(ball);
}

function loop() {
  // slight transparency creates a trail behind moving ball
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  // prevents long snakes
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }
  // calling function repeatedly creates smooth animation
  requestAnimationFrame(loop);
}

loop();
