/* a game of RPS
    player can click on 1 of 3 choices R P S
    Computer chooses 1 of 3 choices at random R P S
    Values of player choice and computer choice will be compared with pre determined values of strength
    a prompt will come up telling the player if they won or lost
    There will be a counter to keep tracks of wins and losses
    */

const gameChoices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function playGame() {
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");

  rockButton.addEventListener("click", () => {
    compareSelection("rock");
  });
  paperButton.addEventListener("click", () => {
    compareSelection("paper");
  });
  scissorsButton.addEventListener("click", () => {
    compareSelection("scissors");
  });

  function compareSelection(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
      displayResult("It's a tie!");
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      displayResult("You Lose! Paper beats Rock!");
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      displayResult("You Win! Rock beats Scissors!");
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      displayResult("You Lose! Scissors beats Paper!");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      displayResult("You Win! Paper beats Rock!");
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      displayResult("You Lose! Rock beats Scissors!");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      displayResult("You Win! Scissors beats Paper!");
    }

    function displayResult(result) {
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = result;
    }
  }
}
window.onload = function () {
  playGame();
};
