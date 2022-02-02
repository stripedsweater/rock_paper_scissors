//declare array of choices
const choices = ['rock', 'paper', 'scissors'];

//generate random choice by computer
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
};

//start score at 0 for accumulate total by end of game
let playerScore = 0;
let computerScore = 0;

//create function for possible outcomes of game
function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return "You lose! Paper beats rock";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock beats scissors";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            return "You win! Paper beats rock";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            return "You win! Scissors beats paper";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            return "You win! Rock beats scissors";
        }
    };

//create function with 5 total rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You won! Final Score: ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
};

//call function game() to start playing
game();