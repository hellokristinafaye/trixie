console.log("skinny legend")


const hand = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * hand.length)
    console.log(choice);
    console.log(hand[choice]);
    return hand[choice]
}

getComputerChoice();