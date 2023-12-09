function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function startRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! ${playerSelection} draws with ${computerSelection}!`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Play a best of five. Choose rock, paper, or scissors").toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        let winner = startRound(playerSelection, computerSelection);
        console.log(winner);
        if (winner.substr(0, 7) === 'You win') {
            userScore += 1;
        } else if (winner.substr(0, 8) === 'You lose') {
            computerScore += 1;
        }
        console.log(`Your score: ${userScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('');


    }
    if (userScore === computerScore) {
        console.log("It's a draw!");
    } else if (userScore > computerScore) {
        console.log("You won the match! Computer loses!");
    } else {
        console.log("Game over. You lose.");
    }
}

game();