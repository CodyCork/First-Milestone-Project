import { snakeSpeed } from './snake.js'

let lastTimeRendered = 0

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastTimeRendered) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    
    lastTimeRendered = currentTime
    console.log(secondsSinceLastRender)

    snakePosition()
    renderSnake()
}

const snakePosition = () => {

}

const renderSnake = () => {

}   

window.requestAnimationFrame(main)