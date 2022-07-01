import {
  canvas,
  ctx,
  snakeParts,
  tileWidth,
  tileHeight,
  SnakePart,
  headX,
  headY,
  tailLength,
} from "./snakeGame.js";

//Snake on canvas
export const drawSnake = () => {
  snakeParts.forEach((snakePart) => {
    ctx.fillStyle = "darkgreen";
    snakeParts.forEach((snakePart) => {
      let part = snakePart;
      ctx.fillRect(
        part.x * tileWidth - tileWidth / 2,
        part.y * tileHeight - tileHeight / 2,
        tileWidth,
        tileHeight
      );
    });
  });
  //Puts an item in the snakeParts array at the end of the list next to the head of the snake
  snakeParts.push(new SnakePart(headX, headY));
  while (snakeParts.length > tailLength) {
    snakeParts.shift();
  }
  ctx.fillRect(
    headX * tileWidth - tileWidth / 2,
    headY * tileHeight - tileHeight / 2,
    tileWidth,
    tileHeight
  );
};

export const clearTile = () => {
  ctx.fillStyle = "lightgreen";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
