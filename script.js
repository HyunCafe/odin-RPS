
/*
There is a list of 3 options that are clickable
player can click a choice between rock paper and scissors
Player will click RPS
computer will then choose between rock paper and scissors at random after player chooses
outcome will be displayed if won or loss 
win or loss will pop up 
There will be a counter to keep track of wins and losses
Reset the choices back to default and wait for player to choose again
loop 
*/
// let playerChoice = rock || paper || scissors;
// let computerChoice = rock || paper || scissors;

function playGame(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();

    if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Lose, paper beats rock');
    } 
        else if (computerChoice === 'scissors') {
        console.log('You Win, rock beats scissors');
        }

    if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You Lose, scissors beats paper'); 
    } 
        else if (computerChoice === 'rock') {
        console.log ('You Win, paper beats rock')
        }
    
    if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You Lose, rock beats scissors');
    } 
        else if (computerChoice === 'paper') {
        console.log ('You Win, scissors beats paper')
        }

    if (playerChoice === computerChoice) {
        console.log('You tied');
        }
}

function getComputerChoice() {
    const compChoices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*3)
    const compChoice = compChoices[randomIndex];
    return compChoice
}