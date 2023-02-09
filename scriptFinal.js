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

    setTimeout(function () {
      resultElement.textContent = "";
    }, 600);
  }, 400);
}

// Play game function
let gamesPlayed = 0;

function playGame() {
  const playerChoice = this.id;
  const compChoice =
    compSelection[Math.floor(Math.random() * compSelection.length)];
  let result = checkWinner(playerChoice, compChoice);
  displayResult(result);
  winTracker(result);

  gamesPlayed++;
  if (gamesPlayed === 10) {
    // reset game here, for example resetting gamesPlayed to 0
    gamesPlayed = 0;
    wins = 0;
    losses = 0;
    ties = 0;
  }
}

// Event Listener
playerSelection.forEach((playerChoice) => {
  playerChoice.addEventListener("click", playGame);
});

// Display Win Tracker
let wins = 0;
let losses = 0;
let ties = 0;

function winTracker(result) {
  if (result === "Player Wins!") {
    wins++;
  } else if (result === "Computer Wins!") {
    losses++;
  } else {
    ties++;
  }

  document.getElementById("tracker_wins").textContent = `Wins: ${wins}`;
  document.getElementById("tracker_losses").textContent = `Losses: ${losses}`;
  document.getElementById("tracker_ties").textContent = `Ties: ${ties}`;
}

// Rotate Card on Click Animation
function rotateCard(card) {
  card.classList.toggle("rotate");
}

// Play a special animation/video/gif for each individual win



// Bug 1: need work around for the delay in result when spamming games played

// Feat 1: Add feature when 10 games are completed, overall Winner or Loser or tie will be displayed