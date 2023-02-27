/*----- constants -----*/


/*----- state variables -----*/
let currentPlayer
let winner



/*----- cached elements  -----*/
const gameBoardEl = document.querySelector("#board")
const gameTileEls = document.querySelectorAll(".square")
const btn = document.querySelector("button")


/*----- event listeners -----*/
gameBoardEl.addEventListener('click', handleClick)
btn.addEventListener('click', init)


/*----- functions -----*/

function init() {
    currentPlayer = 1
    render()

}

function render() {
    gameTileEls.forEach(function (tile) {
        tile.innerText = ""
    })

}

function renderMarks(evt) {
    if (currentPlayer === 1) {
        evt.target.innerText = "X"
        currentPlayer = 2
    } else if (currentPlayer === 2) {
        evt.target.innerText = "O"
        currentPlayer = 1
    }
}

function handleClick(evt) {
    if (evt.target.tagName !== "DIV") {
        return
    }
    if (evt.target.innerText) {
        return
    } else {
        renderMarks(evt)

    }
}



init()