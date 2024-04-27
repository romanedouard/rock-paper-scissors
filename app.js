let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p');
    if (playerSelection === computerSelection) {
        p.innerText = `You tied! You both chose ${playerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        p.innerText = 'You lost! Rock crushes scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        p.innerText = 'You won! Scissors cuts paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        p.innerText = 'You lost! Paper covers rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        p.innerText = 'You won! Rock crushes scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        p.innerText = 'You lost! Scissors cuts paper!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        p.innerText = 'You won! Paper covers rock!';
    }
    outcomeDiv.appendChild(p);
}

const checkForWinner = (playerScore, computerScore) => {
    const h2 = document.createElement('h2');
    if (playerScore === 5) {
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${computerScore}! Great job beating the computer!`
    }

    if (computerScore === 5) {
        h2.classList.add('computer-won');
        h2.innerText = `You lost ${playerScore} to ${computerScore}!`
    }
    outcomeDiv.append(h2);
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score:${playerScore}`;
    computerScoreSpan.innerText = `Computer Score:${computerScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors').toLowerCase();
//         const computerSelection = computerPlay();
//         playRound(playerSelection, computerSelection);
//     }

//     if (playerScore > compScore) {
//         return 'You beat the computer! You are a genius!';
//     } else if (playerScore < compScore) {
//         return 'You got beat by the computer! Practice your throws!';
//     } else {
//         return 'You tied with the computer! Not too shabby!';
//     }
// }
//
// console.log(game());