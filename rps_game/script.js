

function getComputerChoice() {
    const rpsChoice = ['Rock','Paper','Scissors']
    const randomNumber = Math.floor(Math.random()*3)
    return rpsChoice[randomNumber]
}


function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice == computerChoice) {
        score = 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    } else {
        score = -1
    }

    return score
}

function showResult(score, playerChoice, computerChoice){

    let result = document.getElementById('result')
    switch (score) {
        case -1:
            result.innerText = 'You Lose!'
            break;
        case 0:
            result.innerText = 'Its a Draw!'
            break;
        case 1:
            result.innerText = 'You Win!'
            break;
    }

    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
    // console.log({playerChoice});
    const computerChoice = getComputerChoice()
    // console.log(computerChoice);
    const score = getResult(playerChoice.value, computerChoice)
    // console.log(score);
    showResult(score, playerChoice.value, computerChoice)
}


function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}


function playGame()  {
    const rpsButtons = document.querySelectorAll('.rpsButton')

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })  

    let endButton = document.getElementById('endGameButton')

    endButton.onclick = () => endGame()
}

playGame()