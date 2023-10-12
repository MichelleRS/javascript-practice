/* events */
window.addEventListener("load", () => {
  //   doLoadImage();
  doGame();
});

/* classes */

// define all sprites
class Sprite {
  constructor(game, url) {
    // store the game the sprite is part of
    this.game = game;
    // store path to sprite image
    this.url = url;
  }
  // reset sprite for new game
  reset() {
    // set x draw coordinate to 0
    this.x = 0;
    // set y draw coordinate to 0
    this.y = 0;
  }
  // manage multiple image loads with a promise to perform image initialization
  getInitializePromise() {
    return new Promise((resolve, reject) => {
      // initialize a new image object
      this.image = new Image();
      // set src property to location of image
      this.image.src = this.url;
      // on load
      this.image.onload = () => {
        // reset sprite when image loads
        this.reset();
        // resolve load promise
        resolve(true);
      };
      // connect the onerror event to the broken parameter
      this.image.onerror = () => reject(new Error("Could not load" + this.url));
    });
  }
  // update sprite
  update() {}
  // draw sprite
  draw() {
    this.game.context.drawImage(this.image, this.x, this.y);
  }
}
// define item sprite class
class Item extends Sprite {
  constructor(game, url) {
    super(game, url);
    // set width and height of item
    this.width = game.canvasWidth / 20;
    this.height = game.canvasWidth / 20;
  }
  // helper function: get a random number
  getRandomInt(min, max) {
    let range = max - min + 1;
    let result = Math.floor(Math.random() * range) + min;
    return result;
  }
  // on reset, display at random coordinates
  reset() {
    this.x = this.getRandomInt(0, this.game.canvasWidth - this.width);
    this.y = this.getRandomInt(0, this.game.canvasHeight - this.height);
  }
  // draw item
  draw() {
    this.game.context.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

// define player sprite class
class Player extends Sprite {
  constructor(game, url) {
    super(game, url);
    // set width and height of player
    this.width = game.canvasWidth / 15;
    this.height = game.canvasWidth / 15;
    // set overall speed
    this.speed = 5;
    // set current x speed
    this.xSpeed = 0;
    // set current y speed
    this.ySpeed = 0;
    // listen for key down messages to move player on update
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          // decrease x to move to the left
          this.xSpeed = -this.speed;
          break;
        case "ArrowRight":
          // increase x to move to the right
          this.xSpeed = this.speed;
          break;
        case "ArrowUp":
          // decrease y to move up
          this.ySpeed = -this.speed;
          break;
        case "ArrowDown":
          // increase y to move down
          this.ySpeed = this.speed;
          break;
      }
    });
    // listen for key up messages to stop player from moving on update
    window.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          // set x speed to 0
          this.xSpeed = 0;
          break;
        case "ArrowRight":
          // set x speed to 0
          this.xSpeed = 0;
          break;
        case "ArrowUp":
          // set y speed to 0
          this.ySpeed = 0;
          break;
        case "ArrowDown":
          // set y speed to 0
          this.ySpeed = 0;
          break;
      }
    });
  }
  // on reset, place player sprite in middle of canvas
  reset() {
    this.x = (this.game.canvasWidth - this.width) / 2.0;
    this.y = (this.game.canvasHeight - this.height) / 2.0;
  }
  // update player to move
  update() {
    super.update();
    // update coordinate value of x
    this.x = this.x + this.xSpeed;
    // update coordinate value of y
    this.y = this.y + this.ySpeed;
    // set any x coordinate less than 0 to 0
    if (this.x < 0) this.x = 0;
    // prevent player from moving off screen (left/right)
    if (this.x + this.width > this.game.canvasWidth) {
      this.x = this.game.canvasWidth - this.width;
    }
    // set any y coordinate less than 0 to 0
    if (this.y < 0) this.y = 0;
    // prevent player from moving off screen (top/bottom)
    if (this.y + this.height > this.game.canvasHeight) {
      this.y = this.game.canvasHeight - this.height;
    }
  }
  // draw player
  draw() {
    this.game.context.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

// TODO define enemy sprite class

// define game object class
class ChaseGame {
  // method to update game
  gameUpdate(timeStamp) {
    // loop through sprites to update all
    for (let sprite of this.sprites) {
      sprite.update();
    }
    // loop through sprites to draw all
    for (let sprite of this.sprites) {
      sprite.draw();
    }
    // request the next update
    window.requestAnimationFrame(this.gameUpdate.bind(this));
  }
  // method to reset game
  gameReset() {
    // loop through sprites to reset all
    for (let sprite of this.sprites) {
      sprite.reset();
    }
  }
  // create and initialize the game object
  constructor() {
    // get a reference to the game canvas
    // solution note: querySelector method was not getting a reference to canvas
    this.canvas = document.getElementById("canvas");
    // get object for drawing area
    this.context = canvas.getContext("2d");
    // set canvas width and height
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    // initialize an empty sprite array
    this.sprites = [];
    // initialize a background sprite and add to sprites array
    this.background = new Sprite(this, "./assets/background.png");
    this.sprites[this.sprites.length] = this.background;
    // initialize item sprites and add 30 to sprites array
    for (let i = 0; i < 30; i++) {
      this.sprites[this.sprites.length] = new Item(
        this,
        "./assets/cracker.png"
      );
    }
    // initialize a player sprite and add to sprites array
    this.player = new Player(this, "./assets/cheese.png");
    this.sprites[this.sprites.length] = this.player;
  }
  // method to load all sprite images
  async gameInitialize() {
    // initialize an empty promises array
    let promiseList = [];
    // loop through sprites in the game
    for (let sprite of this.sprites) {
      promiseList[promiseList.length] = sprite.getInitializePromise();
    }
    // wait for sprites to finish loading
    await Promise.all(promiseList);
  }
  // method to start the game
  gameStart() {
    // reset the game
    this.gameReset();
    // start game animation
    window.requestAnimationFrame(this.gameUpdate.bind(this));
  }
}

/* functions */

// manage multiple image loads
function getImageLoadPromise(url) {
  return new Promise((resolve, reject) => {
    // create a new image object
    let image = new Image();
    // set src property to location of image
    image.src = url;
    // connect the onload event to the kept parameter
    image.onload = () => resolve(image);
    // connect the onerror event to the broken parameter
    image.onerror = () => reject(new Error("Could not load" + url));
  });
}

// handle multiple image promises
async function getImages(imageUrls) {
  // initialize an empty promise list
  let promiseList = [];

  // loop through list of image urls
  for (let url of imageUrls) {
    // create image load promise and add to promise list
    promiseList[promiseList.length] = getImageLoadPromise(url);
  }

  // wait for all promises to be fulfilled
  let result = await Promise.all(promiseList);
  // return list of images
  return result;
}

async function doLoadImage() {
  // get DOM element for canvas
  const canvas = document.querySelector("canvas");

  if (canvas.getContext) {
    // get object for drawing area
    const context = canvas.getContext("2d");
    // get array of image urls
    let imageUrls = [
      "./assets/cheese.png",
      "./assets/cracker.png",
      "./assets/tomato.png",
      "./assets/background.png",
    ];

    // get images
    let images = await getImages(imageUrls);

    // set x draw coordinate to 0
    let x = 0;
    // set y draw coordinate to 0
    let y = 0;

    // loop through the images
    for (let image of images) {
      // draw the image
      context.drawImage(image, x, y);
      // move x across by the width of the image
      x = x + image.width;
      // move y down by the height of the image
      y = y + image.height;
    }
  }
  // error handling
  else {
    alert("Graphics not supported");
  }
}

async function doGame() {
  // initialize a new game
  let activeGame = new ChaseGame();
  // get game sprites
  await activeGame.gameInitialize();
  // start the new game
  activeGame.gameStart();
}
