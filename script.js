// console.log("skinny legend")


// const hand = ['rock', 'paper', 'scissors'];

// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * hand.length)
//     console.log(choice);
//     console.log(hand[choice]);
//     return hand[choice]
// }

// getComputerChoice();

const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("computer-score");

const hand = ['rock', 'paper', 'scissors'];
let humanScore = 12;
let computerScore = 12;
let humanChoice;
let computerChoice;

humanScoreText.innerHTML = humanScore;
computerScoreText.innerHTML = computerScore;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * hand.length);
    console.log(hand[choice]);
    let computerChoice = hand[choice];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = window.prompt("Enter your weapon: rock, paper or scissors")
    console.log(humanChoice)
    return humanChoice;
}

// console.log(humanChoice);

function playRound(humanChoice, computerChoice) {
    getHumanChoice();
    // humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
};

function playGame() {
    for (var i = 0; i < 3; i++) {
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        return "You win the game!"
    } else {
        return "You lose the game!"
    }
}

// playGame()