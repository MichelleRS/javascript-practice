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
// define player sprite class
class Player extends Sprite {
  constructor(game, url) {
    super(game, url);
    // set width and height of player
    this.width = game.canvasWidth / 15;
    this.height = game.canvasWidth / 15;
  }
  // update player
  update() {
    super.update();
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

// TODO define item sprite class

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
