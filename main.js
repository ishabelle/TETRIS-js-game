window.onload = () => {
    for (let i = 0; i < 200; i++) {
        let tile = document.createElement('div')
        tile.setAttribute("class", "tile")
        document.querySelector(".gameGrid").appendChild(tile)
    }

    const tileWidth = 20
    const tileHeight = 20
    const gridWidth = 10
    let tiles = Array.from(document.querySelectorAll(".tile"))
    const scoreDisplay = document.querySelector("#scoreDisplay")
    const startButton = document.querySelector("#startStopButton")

    const lTetrimino = [
        [1, gridWidth + 1, gridWidth * 2 + 1, 2],
        [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 2],
        [gridWidth * 2, 1, gridWidth + 1, gridWidth * 2 + 1],
        [gridWidth, gridWidth * 2, gridWidth * 2 + 1, gridWidth * 2 + 2]
    ]

    const sTetrimino = [
        [gridWidth * 2, gridWidth + 1, gridWidth * 2 + 1, gridWidth + 2],
        [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
        [gridWidth * 2, gridWidth + 1, gridWidth * 2 + 1, gridWidth + 2],
        [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1]
    ]

    const tTetrimino = [
        [1, gridWidth, gridWidth + 1, gridWidth + 2],
        [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth + 2],
        [gridWidth, gridWidth + 1, gridWidth + 2, 2],
        [gridWidth, 1, gridWidth + 1, gridWidth * 2 + 1]
    ]

    const oTetrimino = [
        [0, 1, gridWidth, gridWidth + 1],
        [0, 1, gridWidth, gridWidth + 1],
        [0, 1, gridWidth, gridWidth + 1],
        [0, 1, gridWidth, gridWidth + 1]
    ]

    const iTetrimino = [
        [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
        [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3],
        [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
        [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3]
    ]

    const theTetriminos = [lTetrimino, sTetrimino, tTetrimino, oTetrimino, iTetrimino]

    let currentPosition = 4
    let currentRotation = 0

    let randomTetrimino = Math.floor(Math.random() * theTetriminos.length)
    let currentBlock = theTetriminos[randomTetrimino][currentRotation]

    const draw = () => {
        currentBlock.forEach((el) => {
            tiles[currentPosition + el].classList.add("tetrimino")
        })
    }

    const undraw = () => {
        currentBlock.forEach((el) => {
            tiles[currentPosition + el].classList.remove("tetrimino")
        })
    }

    const moveDown = () => {
        undraw()
        currentPosition += gridWidth
        draw()
    }


    // LOGIC GAME

    draw()
    let timerId = setInterval(moveDown, 1000)

}

