import { tileWidth, tileHeight, ctx } from "./snakeGame.js";

//snakeFood
let appleX = 7;
let appleY = 7;

//Apple on canvas
export const drawApple = () => {
  ctx.fillStyle = "red";
  ctx.fillRect(
    appleX * tileWidth - tileWidth / 2,
    appleY * tileHeight - tileHeight / 2,
    tileWidth,
    tileHeight
  );
};
