const rules = {
    rock: { beats: "scissors", losesTo: "paper" },
    paper: { beats: "rock", losesTo: "scissors" },
    scissors: { beats: "paper", losesTo: "rock" },
};

const compChoices = ["rock", "paper", "scissors"]; 
const playerChoices = document.querySelectorAll("#rock, #paper, #scissors"); 
playerChoices.forEach((playerChoice) => {
    playerChoice.addEventListener("click", playGame);
});

function checkWinner(playerChoice, compChoice) {
    if (rules[playerChoice]['beats'] === compChoice) {   
        return "Player Wins!";
    } else if (playerChoice === compChoice) {
        return "It's a Tie!";
    } else {
        return "Computer Wins!";
    }
}
function displayResult(result) {
    setTimeout(function() {
        const resultElement = document.getElementById("result");
        resultElement.textContent = result;
        setTimeout(function() {
            resultElement.textContent = "";
        }, 1000);
    }, 300);
}

function playGame() {
    const playerChoice = this.id;
    const compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    let result = checkWinner(playerChoice, compChoice);
    displayResult(result);
} 

// Play a special animation/video/gif for each individual win
// Keep track of Score, up to 7 Games, then Display final result and reset
