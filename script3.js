//  Computer can choose randomly from an array of game choice for rock paper or scissors
// play game function which compares choices made for player and computer
// based on outcome a win or loss display will result
// Counter for keeping track of winnings that loops and resets at 10 games ultimately displaying final score

const elements = document.querySelectorAll("#rock, #paper, #scissors");
elements.forEach(function (element) {
  element.addEventListener("click", playGame);
});

function displayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = result;
}

const choices = ["rock", "paper", "scissors"];

const rules = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "paper", losesTo: "rock" },
};

function checkWinner(playerChoice, computerChoice) {
  if (rules[playerChoice]["beats"] === computerChoice) {
    return "You Won!";
  } else if (rules[computerChoice]["beats"] === playerChoice) {
    return "You Lost!";
  } else {
    return "It's a Tie!";
  }
}

function playGame() {
  let playerChoice = this.id;
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = checkWinner(playerChoice, computerChoice);
  displayResult(result);
}
