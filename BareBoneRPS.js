// Define enum for RPS options
const RPS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

// Define rules object
const RULES = {
  [RPS.ROCK]: { beats: RPS.SCISSORS, losesTo: RPS.PAPER },
  [RPS.PAPER]: { beats: RPS.ROCK, losesTo: RPS.SCISSORS },
  [RPS.SCISSORS]: { beats: RPS.PAPER, losesTo: RPS.ROCK },
};

// Define displayResult function
const displayResult = (result) => {
  document.getElementById("result").textContent = result;
};

// Define compSelection function
const getCompSelection = () => {
  return Object.values(RPS)[
    Math.floor(Math.random() * Object.values(RPS).length)
  ];
};

// Define checkWinner function
const checkWinner = (playerSelection, compSelection) => {
  if (playerSelection === compSelection) {
    displayResult("You Tied");
  } else if (RULES[playerSelection].beats === compSelection) {
    displayResult("You Win");
  } else {
    displayResult("You Lose");
  }
};

// Define function to playGame
const playGame = (choice) => {
  const playerSelection = choice.id;
  const compSelection = getCompSelection();
  checkWinner(playerSelection, compSelection);
};

// Add event listeners to player choices
const playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
playerChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice);
  });
});

// Add enum to window object for easy access during testing
window.RPS = RPS;
