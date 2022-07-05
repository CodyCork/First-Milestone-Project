//canvas
const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

// snake speed
let snakeSpeed = 10;
// snake score
let snakeScore = 0;

// snakeFood
let appleX = 7;
let appleY = 7;

//snake velocity variable
let xVelocity = 0;
let yVelocity = 0;

//canvas size
let tileCount = 27;
let tileSize = canvas.width / tileCount;
//game over sound
const gameOverSound = new Audio("./sound/game-over.mp3");
//munching sounds
const munch1 = new Audio("./sound/munch1.mp3");
const munch2 = new Audio("./sound/munch2.mp3");
const munch3 = new Audio("./sound/munch3.mp3");
//array of sounds
const randomSoundArray = [munch1, munch2, munch3];
//Random sound generator
function randomSound() {
  for (let i = 0; i < randomSoundArray.length; i++) {
    let randomMath = Math.floor(Math.random() * 1000) % randomSoundArray.length;
    randomSoundArray[randomMath].play();
  }
}
//snake part class
class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

//snake head and body
let headX = 15;
let headY = 15;
const snakeParts = [];
let tailLength = 3;

//snake score function
const drawSnakeScore = () => {
  ctx.fillStyle = "black";
  ctx.font = "20px verdana";
  ctx.fillText("SCORE " + snakeScore, canvas.width - 725, 720);
};

//Snake on canvas
const drawSnake = () => {
  snakeParts.forEach((snakePart) => {
    let part = snakePart;
    ctx.fillStyle = "gray";
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  });
  //Puts an item in the snakeParts array at the end of the list next to the head of the snake
  snakeParts.push(new SnakePart(headX, headY));
  while (snakeParts.length > tailLength) {
    snakeParts.shift();
  }
  ctx.fillStyle = "black";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
};
//game board background
const canvasBackground = () => {
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

//snake direction function for moving snake
const snakeDirection = () => {
  headX = headX + xInputDirection;
  headY = headY + yInputDirection;
};
//snake food on canvas gameboard
const drawApple = () => {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
};

// Snake direction x and y variables
let xInputDirection = 0;
let yInputDirection = 0;

//This code is partially from stackoverflow,
//but it allows me to use the arrow keys or the w,a,s,d keys
//to move the snake on the canvas
const keyDown = (event) => {
  //up
  if (event.keyCode == 38 || event.keyCode == 87) {
    //87 is w key
    if (yInputDirection == 1) return;
    yInputDirection = -1;
    xInputDirection = 0;
  }

  //down
  if (event.keyCode == 40 || event.keyCode == 83) {
    // 83 is s key
    if (yInputDirection == -1) return;
    yInputDirection = 1;
    xInputDirection = 0;
  }

  //left
  if (event.keyCode == 37 || event.keyCode == 65) {
    // 65 is a key
    if (xInputDirection == 1) return;
    yInputDirection = 0;
    xInputDirection = -1;
  }

  //right
  if (event.keyCode == 39 || event.keyCode == 68) {
    //68 is d key
    if (xInputDirection == -1) return;
    yInputDirection = 0;
    xInputDirection = 1;
  }

  if (event.keyCode == 32) {
    window.location.reload();
  }
};
//checks if game is over
function isGameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }

  //boundaries
  if (headX < 0) {
    gameOver = true;
    gameOverSound.play();
  } else if (headX === tileCount) {
    gameOver = true;
    gameOverSound.play();
  } else if (headY < 0) {
    gameOver = true;
    gameOverSound.play();
  } else if (headY === tileCount) {
    gameOver = true;
    gameOverSound.play();
  }
  //snake tail collision
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      gameOverSound.play();
      break;
    }
  }
  //game over on screen
  if (gameOver) {
    if (gameOver) {
      ctx.fillStyle = "black";
      ctx.font = "75px Verdana";

      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop("0", "black");
      // Fill with gradient
      ctx.fillStyle = gradient;

      ctx.fillText("GAME OVER", canvas.width / 5.5, canvas.height / 2);
    }
    ctx.fillStyle = "black";
    ctx.font = "30px Verdana";
    ctx.fillText(
      "PRESS SPACE TO RESTART",
      canvas.width / 4.7,
      canvas.height / 1.8
    );
  }

  return gameOver;
}
//snake game loop
const drawGame = () => {
  xVelocity = xInputDirection;
  yVelocity = yInputDirection;
  //apple collision and snake tail growth
  if (appleX === headX && appleY == headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    randomSound();
    tailLength++;
    snakeScore++;
  }
  canvasBackground();
  drawApple();
  drawSnake();
  drawSnakeScore();
  snakeDirection();
  let result = isGameOver();
  if (result) {
    return;
  }

  setTimeout(drawGame, 1000 / snakeSpeed);
};

document.body.addEventListener("keydown", keyDown);
//invokes game
drawGame();
