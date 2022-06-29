//canvas
const canvas = document.getElementById('gameBoard')
const ctx = canvas.getContext('2d')

// snake speed
let snakeSpeed = 7

//canvas size
let tileCount = 30
let tileSize = canvas.width / tileCount;

//snake head and body
let headX = 15
let headY = 15
const snakeParts = []
let tailLength = 1

//snake game loop
const drawGame = () => {
    drawSnake()
    setTimeout(drawGame, 1000 / snakeSpeed)
}
//Snake on canvas
const drawSnake = () => {
    ctx.fillStyle = 'red'
    ctx.fillRect = (15, 15, tileSize, tileSize )
}

drawGame()