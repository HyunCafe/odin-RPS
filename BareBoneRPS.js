// Rules
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

// Player Choice and event listen for game
const playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
playerChoices.forEach((selection) => {
  selection.addEventListener("click", playGame);
});

// Play Game function
function playGame() {
  const playerSelection = this.id;

  // Computer Logic
  const compChoices = ["rock", "paper", "scissors"];
  const compSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];

  // Check Winner Function
  function checkWinner() {
    if (playerSelection === compSelection) {
      displayResult("You Tied");
    } else if (rules[playerSelection].beats === compSelection) {
      displayResult("You Win");
    } else {
      displayResult("You Lose");
    }
  }
  checkWinner();
}
