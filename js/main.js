/*----- constants -----*/
const colors = {
    null: 'white',
    1: 'yellow',
    '-1': 'pink',
}

const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]


/*----- state variables -----*/
let currentPlayer
let winner
let boardArray




/*----- cached elements  -----*/
const gameBoardEl = document.querySelector("#board")
const gameTileEls = document.querySelectorAll(".square")
const btn = document.querySelector("button")
const messageEl = document.querySelector("#messages")


/*----- event listeners -----*/
gameBoardEl.addEventListener('click', handleClick)
btn.addEventListener('click', init)


/*----- functions -----*/

function init() {
    currentPlayer = 1
    boardArray = [null, null, null, null, null, null, null, null, null]
    winner = null
    render()

}

function render() {

    renderBoard()
    renderMessage()


}

function renderMessage() {
    if (winner === null) {
    messageEl.textContent = `${colors[currentPlayer].toUpperCase()}'s turn to play.`
    } else if (winner === 't') {
    messageEl.textContent = "Tie game!"
    } else if (winner){
        messageEl.textContent = `The winner is ${colors[winner].toUpperCase()}`
    }



}

function renderBoard() {
    /// loop over 9 elements of the board tiles, and for each one, check the board array at that index to determine if a mark should be placed, then place that color if so
    gameTileEls.forEach(function (tile) {

        tile.style.backgroundColor = colors[boardArray[tile.id]]})
}


function handleClick(evt) {
        if (evt.target.tagName !== "DIV") {
            return
        }
        console.log([boardArray[8]])
        if (boardArray[evt.target.id]) {
            return
        }
        if (winner) {
            return
        }
        boardArray[evt.target.id] = currentPlayer
        advanceTurn()
        checkWin()
        render()

    }

function advanceTurn() {
        if (currentPlayer === 1) {
            currentPlayer = -1
        } else if (currentPlayer === -1) {
            currentPlayer = 1
        }
}

function checkWin() {
    winConditions.forEach(function(combo) {
        combo.forEach(function(index) {
            let positionsTotal = 0
            positionsTotal = positionsTotal + boardArray[index]

        }))
    })
}

init()