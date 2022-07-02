import { ctx, canvas, yVelocity, xVelocity, headX, headY } from "./snakeGame.js";
//Score variable

export let snakeScore = 0;

export const drawSnakeScore = () => {
  ctx.fillStyle = "black";
  ctx.font = "9px Verdana";
  ctx.fillText("Score " + snakeScore, canvas.width - 300, 148);
};

export function gameOver() {
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
  
    // if (gameOver) {
    //   ctx.fillStyle = "white";
    //   ctx.font = "50px Verdana";
  
    //   if (gameOver) {
    //     ctx.fillStyle = "white";
    //     ctx.font = "50px Verdana";
  
        // var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        // gradient.addColorStop("0", " magenta");
        // gradient.addColorStop("0.5", "blue");
        // gradient.addColorStop("1.0", "red");
        // // Fill with gradient
        // ctx.fillStyle = gradient;
  
    //     ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    //   }
  
    //   ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
//     }
  
    return gameOver;
    }
