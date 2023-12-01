// install "prompt-sync" to use the line below
const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0

console.log("Let's play!")

while(true){
    const playerInput = prompt("Enter rock, paper, or scissors (q to quit): ")
    // Checks if the player chooses to quit
    if (playerInput.toLowerCase() === "q") {
        break;
    }
    
    // Checks for valid input
    if (
        playerInput != "rock" && 
        playerInput != "paper" && 
        playerInput != "scissors"
        ) {
        console.log("Please enter a valid input");
        continue;
        }

    // Sets up computer's choice
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    // Checks for draw, then wins, and losses
    if (playerInput === computerChoice) {
        console.log("Draw!");
        ties++;
    } else if (
        (playerInput === "rock" && computerChoice === "scissors") ||
        (playerInput === "paper" && computerChoice === "rock") ||
        (playerInput === "scissors" && computerChoice === "paper")) {
        
        console.log("You Win!");
        wins++;
    } else {
        console.log("You lost!");
        losses++;
    }
}

// Calculates total games played 
let totalGames = wins + losses + ties;

// End message after quitting the game
console.log("======================");
console.log("Summary of games");
console.log("======================");
console.log("You played a total amount of ",totalGames, " game(s)");
console.log("| Wins:", wins, "| Losses:", losses, "| Draws:", ties, "|");
