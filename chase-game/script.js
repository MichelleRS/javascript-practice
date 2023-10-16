// start game screen on page load
window.addEventListener("load", () => {
  doGame();
});

/* classes */

// define all sprites as a class
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
  // method to check if sprites collide
  collidesWith(sprite) {
    if (this.x + this.width < sprite.x) return false;
    if (this.y + this.height < sprite.y) return false;
    if (this.x > sprite.x + sprite.width) return false;
    if (this.y > sprite.y + sprite.width) return false;
    return true;
  }
  // update sprite
  update() {}
  // draw sprite
  draw() {
    this.game.context.drawImage(this.image, this.x, this.y);
  }
}
// define item sprite subclass
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
  // update
  update() {
    // if item sprite collides with player sprite
    if (this.collidesWith(this.game.player)) {
      // increase game score by 10
      this.game.score = this.game.score + 10;
      // remove item sprite from display
      this.reset();
    }
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
// define enemy sprite subclass
class Enemy extends Sprite {
  constructor(game, url, entryDelay) {
    super(game, url);
    // store entry delay in enemy
    this.entryDelay = entryDelay;
    // set width and height of enemy
    this.width = game.canvasWidth / 12;
    this.height = game.canvasWidth / 12;
    // give each enemy a different acceleration
    this.acceleration = 0.1 + entryDelay / 10000;
    // set enemy friction
    this.friction = 0.99;
  }
  // reset enemy coordinates, entry count, and speed
  reset() {
    this.x = -this.width;
    this.y = -this.height;
    this.entryCount = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
  // update enemy movement
  update() {
    // delay entry of enemy
    this.entryCount = this.entryCount + 1;
    if (this.entryCount < this.entryDelay) {
      return;
    }
    // if player is to right of enemy
    if (this.game.player.x > this.x) {
      // move enemy right
      this.xSpeed = this.xSpeed + this.acceleration;
    }
    // if player is to left of enemy
    else {
      // move enemy left
      this.xSpeed = this.xSpeed - this.acceleration;
    }
    // if player is above enemy
    if (this.game.player.y > this.y) {
      // move enemy up
      this.ySpeed = this.ySpeed + this.acceleration;
    }
    // if player is below enemy
    else {
      // move enemy down
      this.ySpeed = this.ySpeed - this.acceleration;
    }
    // apply friction to prevent enemy from continuously accelerating
    this.xSpeed = this.xSpeed * this.friction;
    this.ySpeed = this.ySpeed * this.friction;
    // apply conditional speed to enemy
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    // if enemy collides with player, end game
    if (this.collidesWith(this.game.player)) {
      this.game.gameEnd();
    }
  }
  // draw enemy
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
// define player sprite subclass
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

// define game object class
class ChaseGame {
  // method to update game
  gameUpdate(timeStamp) {
    // loop through sprites to update all
    for (let sprite of this.sprites) {
      sprite.update();
    }
    // if game over, display start screen
    if (!this.gameRunning) {
      this.drawStartScreen();
      // display score on start screen
      this.displayMessage("Recent score: " + this.score, 530);
      return;
    }
    // loop through sprites to draw all
    for (let sprite of this.sprites) {
      sprite.draw();
    }
    // set font and size for game play score
    this.context.font = "2.5rem Courier New";
    // use fillStyle method to set the color of the text game play score
    this.context.fillStyle = "black";
    // use fillText method to draw the game play score on canvas at chosen coordinates
    this.context.fillText("Score: " + this.score, 10, 40);
    // request the next update
    window.requestAnimationFrame(this.gameUpdate.bind(this));
  }
  // method to reset game
  gameReset() {
    // loop through sprites to reset all
    for (let sprite of this.sprites) {
      sprite.reset();
    }
    // set game score to 0
    this.score = 0;
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
    // set game score to 0
    this.score = 0;
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
    // initialize up to 5 enemy sprites in a game with entry delays
    for (let enemyCount = 0; enemyCount < 5; enemyCount++) {
      // start first enemy at 5 seconds, then 10 second delay for subsequent enemies
      let entryDelay = 300 + enemyCount * 600;
      // add to sprites array
      this.sprites[this.sprites.length] = new Enemy(
        this,
        "./assets/tomato.png",
        entryDelay
      );
    }
    // initialize a player sprite and add to sprites array
    this.player = new Player(this, "./assets/cheese.png");
    this.sprites[this.sprites.length] = this.player;
    // set initial high score to 0
    this.highScore = 0;
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
  // helper function: positioning and styling text
  displayMessage(text, yPos) {
    // measure the size of the text message
    let textSize = this.context.measureText(text);
    // calculate an offset to center text
    let x = (this.canvasWidth - textSize.width) / 2.0;
    // set background text to white
    this.context.fillStyle = "white";
    // draw text background
    this.context.fillText(text, x, yPos);
    // set top layer text to black
    this.context.fillStyle = "black";
    // draw slightly offset from background text
    this.context.fillText(text, x + 2, yPos + 2);
  }
  // method to draw start screen text
  drawStartScreen() {
    this.background.draw();
    this.context.font = "3rem Courier New";
    this.displayMessage("Chase Game", 70);
    // game directions
    this.context.font = "2rem Courier New";
    this.displayMessage("Steer cheese to collect crackers.", 140);
    this.displayMessage("It's game over if the tomato gets you!", 190);
    this.displayMessage("Use arrow keys to move.", 260);
    this.displayMessage("Press G to start.", 310);
    // game scores
    this.context.font = "2.5rem Courier New";
    this.displayMessage("Game Scores", 430);
    this.context.font = "2rem Courier New";
    this.displayMessage("High score: " + this.highScore, 480);
    // note: recent score text is found in gameUpdate method of ChaseGame class
  }
  // method to start the game
  gameStart() {
    // draw start screen
    this.drawStartScreen();
    // listen for player to start game
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyG":
          // if the game is not running when player presses G
          if (!this.gameRunning) {
            // run the game
            this.gameRun();
          }
          break;
      }
    });
  }
  // method to run game
  gameRun() {
    // reset game
    this.gameReset();
    // start game by setting game running value to true
    this.gameRunning = true;
    // request the next update
    window.requestAnimationFrame(this.gameUpdate.bind(this));
  }
  // method to end game
  gameEnd() {
    // set game running value to false
    this.gameRunning = false;
    // if game score is greater than high score, set as high score
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
  }
}

// function to start game
async function doGame() {
  // initialize a new game
  let activeGame = new ChaseGame();
  // get game sprites
  await activeGame.gameInitialize();
  // start the new game
  activeGame.gameStart();
}
