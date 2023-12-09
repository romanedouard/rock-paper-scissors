function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function startRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! ${playerSelection} draws with ${computerSelection}!`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}

const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
console.log(startRound(playerSelection, computerSelection));

