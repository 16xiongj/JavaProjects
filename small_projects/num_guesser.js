// install "prompt-sync" to use the line below
const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);
// console.log(target)  // Uncomment to check what the target is for testing

let guesses = 0;
const guess = Number(prompt("Guess the number (0-100): "));

while(true) {
    if (guess > target) {
        console.log("Your guess is too high.")
    } else if (guess < target) {
        console.log("Your guess is too low.")
    } else {
        console.log("You got it right!")
        break;
    }
}
console.log("It took you ", guesses, " guesses!")