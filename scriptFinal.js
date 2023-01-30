// Rules
const rules = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "paper", losesTo: "rock" },
};
const compSelection = ["rock", "paper", "scissors"];
const playerSelection = document.querySelectorAll("#rock, #paper, #scissors");

// Game Logic
function checkWinner(playerChoice, compChoice) {
  if (rules[playerChoice].beats === compChoice) {
    return "Player Wins!";
  } else if (playerChoice === compChoice) {
    return "It's a Tie!";
  } else {
    return "Computer Wins!";
  }
}
// Display Results Logic
function displayResult(result) {
  setTimeout(() => {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
    if (result === "Player Wins!") {
      resultElement.style.color = "green";
    } else if (result === "Computer Wins!") {
      resultElement.style.color = "red";
    } else {
      resultElement.style.color = "blue";
    }
    // setTimeout(function() {
    //     resultElement.textContent = ""; // bug here causing shifting of container cards when playing game
    // }, 900);
  }, 200);
}

// Play game function
let gamesPlayed = 0;

function playGame() {
  const playerChoice = this.id;
  const compChoice =
    compSelection[Math.floor(Math.random() * compSelection.length)];
  let result = checkWinner(playerChoice, compChoice);
  displayResult(result);

  gamesPlayed++;
  if (gamesPlayed === 5) {
    // reset game here, for example resetting gamesPlayed to 0
    gamesPlayed = 0;
  }
}

// Event Listener
playerSelection.forEach((playerChoice) => {
  playerChoice.addEventListener("click", playGame);
});

// Rotate Card on Click Animation
function rotateCard(card) {
  card.classList.toggle("rotate");
}

// Play a special animation/video/gif for each individual win
