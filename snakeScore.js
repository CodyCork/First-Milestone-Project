import { ctx, snakeScore, canvas } from "./snakeGame.js";

export const drawSnakeScore = () => {
  ctx.fillStyle = "black";
  ctx.font = "9px Verdana";
  ctx.fillText("Score " + snakeScore, canvas.width - 300, 148);
};
