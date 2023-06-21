const choices = ["rock", "paper", "scissors"];

function getComputerChoice(options) {
  return console.log(options[Math.floor(Math.random() * options.length)]);
}

getComputerChoice(choices);

let playerSelection = prompt("Rock, paper or scissors?");

if (
  playerSelection.toLowerCase() === "rock" ||
  playerSelection.toLowerCase() === "scissors" ||
  playerSelection.toLowerCase() === "paper"
) {
  console.log(playerSelection.toLowerCase());
} else {
  console.log("wrong input!");
  playerSelection = "";
}
