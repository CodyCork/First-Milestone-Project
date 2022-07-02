import { keyDown, xInputDirection, yInputDirection } from "./input.js";
import { drawApple } from "./snakeFood.js";
import { clearTile, drawSnake } from "./snake.js";
import { drawSnakeScore, gameOver } from "./snakeScore.js";
//canvas
export const canvas = document.getElementById("gameBoard");
export const ctx = canvas.getContext("2d");

// snake speed
let snakeSpeed = 7;

export let inputsXVelocity = 0;
export let inputsYVelocity = 0;

export let xVelocity = 0;
export let yVelocity = 0;

//canvas size
let tileCount = 30;
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

const snakeDirection = () => {
  headX += xInputDirection;
  headY += yInputDirection;
};

//snake game loop
const drawGame = () => {
  xVelocity = inputsXVelocity;
  yVelocity = inputsYVelocity;

  let result = gameOver();
  if (result) {
    return;
  }

  clearTile();

  drawSnake();
  drawApple();

  drawSnakeScore();

  snakeDirection();
  gameOver();

  setTimeout(drawGame, 1000 / snakeSpeed);
};

document.body.addEventListener("keydown", keyDown);

drawGame();
