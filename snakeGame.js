import { keyDown, xInputDirection, yInputDirection } from "./input.js";
import { clearTile, drawSnake } from "./snake.js";
// import { drawSnakeScore, gameOver } from "./snakeScore.js";
//canvas
export const canvas = document.getElementById("gameBoard");
export const ctx = canvas.getContext("2d");

// snake speed
let snakeSpeed = 7;

let snakeScore = 0;

//snakeFood
export let appleX = 7;
export let appleY = 7;

export let inputsXVelocity = 0;
export let inputsYVelocity = 0;

export let xVelocity = 0;
export let yVelocity = 0;

//canvas size
export let tileCount = 30;
export let tileWidth = canvas.width / tileCount;
export let tileHeight = canvas.height / tileCount;

export class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

//snake head and body
export let headX = 15;
export let headY = 15;
export const snakeParts = [];
export let tailLength = 2;

export const drawSnakeScore = () => {
  ctx.fillStyle = "black";
  ctx.font = "9px Verdana";
  ctx.fillText("Score " + snakeScore, canvas.width - 300, 148);
};

const snakeDirection = () => {
  headX += xInputDirection;
  headY += yInputDirection;
};

const drawApple = () => {
  ctx.fillStyle = "red";
  ctx.fillRect(
    appleX * tileWidth - tileWidth / 2,
    appleY * tileHeight - tileHeight / 2,
    tileWidth,
    tileHeight
  );
};

function gameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }

  //walls
  if (headX < 0) {
    gameOver = true;
  } else if (headX === tileCount) {
    gameOver = true;
  } else if (headY < 0) {
    gameOver = true;
  } else if (headY === tileCount) {
    gameOver = true;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }
  return gameOver;
}
//snake game loop
const drawGame = () => {
  xVelocity = inputsXVelocity;
  yVelocity = inputsYVelocity;

  let result = gameOver();
  if (result) {
    return;
  }

  if (appleX === headX && appleY == headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    snakeScore++;
    //   gulpSound.play();
  }

  clearTile();

  drawSnake();
  drawApple();
  //   checkAppleCollision();
  drawSnakeScore();

  snakeDirection();

  setTimeout(drawGame, 1000 / snakeSpeed);
};

document.body.addEventListener("keydown", keyDown);

drawGame();
