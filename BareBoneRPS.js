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

// Computer Logic
function compSelection() {
  const compChoices = ["rock", "paper", "scissors"];
  return compChoices[Math.floor(Math.random() * compChoices.length)];
}

// Check Winner Function
function checkWinner(playerSelection, compSelection) {
  if (playerSelection === compSelection) {
    displayResult("You Tied");
  } else if (rules[playerSelection].beats === compSelection) {
    displayResult("You Win");
  } else {
    displayResult("You Lose");
  }
}

// Player Choice and event listen for game
const playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
playerChoices.forEach((selection) => {
  selection.addEventListener("click", () => {
    const playerSelection = selection.id;
    const compSelection = compSelection();
    checkWinner(playerSelection, compSelection);
  });
});
