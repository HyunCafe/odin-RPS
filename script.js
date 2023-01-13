/*
There is a list of 3 options that are clickable
player can click a choice between rock paper and scissors
Player will click RPS
computer will then choose between rock paper and scissors at random after player chooses
outcome will be displayed if won or loss 
win or loss will pop up 
There will be a counter to keep track of wins and losses
Reset the choices back to default and wait for player to choose again
loop 
*/
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", function () {
  playGame("rock");
});

paperButton.addEventListener("click", function () {
  playGame("paper");
});

scissorsButton.addEventListener("click", function () {
  playGame("scissors");
});

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    displayResult("You tied");
  }

  if (playerChoice === "rock" && computerChoice === "paper") {
    displayResult("You Lose, paper beats rock");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    displayResult("You Win, rock beats scissors");
  }

  if (playerChoice === "paper" && computerChoice === "scissors") {
    displayResult("You Lose, scissors beats paper");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    displayResult("You Win, paper beats rock");
  }

  if (playerChoice === "scissors" && computerChoice === "rock") {
    displayResult("You Lose, rock beats scissors");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    displayResult("You Win, scissors beats paper");
  }
}

function displayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = result;
}

function getComputerChoice() {
  const compChoices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const compChoice = compChoices[randomIndex];
  return compChoice;
}