import { keyDown, xInputDirection, yInputDirection } from "./input.js";
import { drawApple } from "./snakeFood.js";
import { clearTile, drawSnake } from "./snake.js";
import { drawSnakeScore } from "./snakeScore.js";
//canvas
export const canvas = document.getElementById("gameBoard");
export const ctx = canvas.getContext("2d");

// snake speed
let snakeSpeed = 7;

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
export let tailLength = 1;

const snakeDirection = () => {
  headX += xInputDirection;
  headY += yInputDirection;
};

//Score variable
export let snakeScore = 0;

//snake game loop
const drawGame = () => {
  clearTile();

  drawSnake();
  drawApple();

  drawSnakeScore();

  snakeDirection();

  setTimeout(drawGame, 1000 / snakeSpeed);
};

document.body.addEventListener("keydown", keyDown);

drawGame();
