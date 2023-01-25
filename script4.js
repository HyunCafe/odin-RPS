// Play Game Main Function
function playGame() {
  // Rules of the game
  const rules = {
    rock: { beats: "scissors", losesTo: "paper" },
    paper: { beats: "rock", losesTo: "scissors" },
    scissors: { beats: "paper", losesTo: "rock" },
  };

  // Computer Logic for RPS
  const compChoices = ["rock", "paper", "scissors"];
  const randomSelect =
    compChoices[Math.floor(Math.random() * compChoices.length)];

  // Listen for Event
  let playerChoices = document.querySelectorAll(".rock, .paper, .scissors");
  playerChoices.forEach((playerChoice) => {
    playerChoice.addEventListener("click", playGame);
  });
  // Display Result of Game
  function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
  }

  // Play a special animation/video/gif for each individual win

  // Keep track of Score, up to 7 Games, then Display final result and reset
} // end of playGame function
