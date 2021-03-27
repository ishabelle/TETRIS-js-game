window.onload = () => {
    for (let i = 0; i < 200; i++) {
        let tile = document.createElement("div")
        tile.setAttribute("class", "tile")
        document.querySelector(".gameGrid").appendChild(tile)
    }

    for (let i = 0; i < 10; i++) {
        let tile = document.createElement("div")
        tile.classList.add("taken")
        document.querySelector(".gameGrid").appendChild(tile)
    }

    const tileWidth = 20
    const tileHeight = 20
    const gridWidth = 10
    let tiles = Array.from(document.querySelectorAll(".gameGrid div"))
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
        freeze()
    }

    const freeze = () => {
        if (currentBlock.some(el => tiles[currentPosition + el + gridWidth].classList.contains('taken'))) {
            currentBlock.forEach((el) => {
                tiles[currentPosition + el].classList.add('taken')
            })
            randomTetrimino = Math.floor(Math.random() * theTetriminos.length)
            currentBlock = theTetriminos[randomTetrimino][currentRotation]
            currentPosition = 4
            draw()
        }
    }

    const moveLeft = () => {
        undraw()
        const isAtLeftEdge = currentBlock.some(el => (currentPosition + el) % gridWidth === 0)
        if (!isAtLeftEdge) {
            currentPosition -= 1
        }
        if (currentBlock.some(el => tiles[currentPosition + el].classList.contains('taken'))) {
            currentPosition += 1
        }
        draw()
    }

    const control = (e) => {
        if (e.keyCode === 37) {
            moveLeft()
        }
    }


// LOGIC GAME
    document.addEventListener('keyup', control)
    draw()
    let timerId = setInterval(moveDown, 500)

}

