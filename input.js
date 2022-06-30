// Snake direction x and y variables
export let xInputDirection = 0;
export let yInputDirection = 0;

//This code is partially from stackoverflow, but it allows me to use the arrow keys or the w,a,s,d keys to move the snake on the canvas
export const keyDown = event => {
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
  }

