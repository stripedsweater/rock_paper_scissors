const buttons = document.getElementById("buttons");
const rock = document.getElementById("btn1");
const paper = document.getElementById("btn2");
const scissors = document.getElementById("btn3");
const results = document.getElementById("results");
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click",function(){
    playRound("rock");
});

paper.addEventListener("click",function(){
    playRound("paper");
});

scissors.addEventListener("click",function(){
    playRound("scissors");
});

//generate random choice by computer
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
};

//create function for possible outcomes of game
function playRound(playerSelection) {
    const computerSelection = computerPlay();
        if (playerSelection === computerSelection) {
            results.innerHTML = "It's a tie!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            results.innerHTML = "You lose! Paper beats rock";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            results.innerHTML = "You lose! Scissors beats paper";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            results.innerHTML = "You lose! Rock beats scissors";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            results.innerHTML = "You win! Paper beats rock";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            results.innerHTML = "You win! Scissors beats paper";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            results.innerHTML = "You win! Rock beats scissors";
        }
        game();
    };


//create function with 5 total rounds

function game() {
    score.innerHTML = (playerScore + " " + computerScore);
    if (playerScore == 5) {
        winner.innerHTML = (`You won! Final Score: ${playerScore} to ${computerScore}`)
        setTimeout(() => {
            playerScore = 0;
            computerScore = 0;
            results.innerHTML = "";
            winner.innerHTML = "";
            game();
        }, 5000);
    } else if (computerScore == 5) {
        winner.innerHTML = (`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
        setTimeout(() => {
            playerScore = 0;
            computerScore = 0;
            results.innerHTML = "";
            winner.innerHTML = "";
            game();
        }, 5000);
    };
};