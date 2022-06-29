
var canvas = document.getElementById('gameBoard')
var ctx = canvas.getContext('2d')
// snake speed
let snakeSpeed = 7
//canvas size
let tileCount = 30
let tileSize = canvas.width / tileCount - 2;

let headX = 15
let headY = 15

//snake game loop
const drawGame = () => {
    clearScreen()
    drawSnake()
    setTimeout(drawGame, 1000 / snakeSpeed)
}

const clearScreen = () => {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const drawSnake = () => {
    ctx.fillStyle = 'red'
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}

drawGame()