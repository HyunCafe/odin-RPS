// Rules of game
const rules = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "paper", losesTo: "rock" },
};

// Display Function
function displayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
}

// Function to play game and Game Logic
function playGame() {
  // Player Selection
  const playerChoice = this.id;

  // Computer Selection
  const compChoices = ["rock", "paper", "scissors"];
  const compSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];

  if (playerChoice === compSelection) {
    displayResult("You Tied!");
  } else if (rules[playerChoice].beats === compSelection) {
    displayResult("You Win!");
  } else {
    displayResult("You Lose!");
  }
}

// Add Event Listeners for Player Selection
const playerSelections = document.querySelectorAll("#rock, #paper, #scissors");
playerSelections.forEach((selection) => {
  selection.addEventListener("click", playGame);
});
