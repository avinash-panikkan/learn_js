console.log('Hello')

let title = document.getElementById('title')

console.log(title.innerText)

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(sqaure => {
    sqaure.onclick = () => {
    timesClicked[sqaure.value] += 1
    sqaure.innerText = timesClicked[sqaure.value]
} 
})

function clearScores() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(sqaure => {
        sqaure.innerText = ''
    } )
}

const clearScoresBtn = document.getElementById('clear-button')
clearScoresBtn.onclick = () => clearScores()