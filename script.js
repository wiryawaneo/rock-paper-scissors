const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

let playerSelection = prompt("Rock, paper or scissors?");

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw! Both are " + playerChoice;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "Win!" + playerChoice + " beats " + computerChoice;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Win!" + playerChoice + " beats " + computerChoice;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "Win!" + playerChoice + " beats " + computerChoice;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "Lost!" + computerChoice + " beats " + playerChoice;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "Lost!" + computerChoice + " beats " + playerChoice;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "Lost!" + computerChoice + " beats " + playerChoice;
  } else if (
    playerChoice != "rock" ||
    playerChoice != "paper" ||
    playerChoice != "scissors"
  ) {
    return "Player has sent a wrong input";
  }
}

if (
  playerSelection.toLowerCase() === "rock" ||
  playerSelection.toLowerCase() === "scissors" ||
  playerSelection.toLowerCase() === "paper"
) {
  console.log(playRound(playerSelection, getComputerChoice()));
  console.log(playerSelection.toLowerCase());
} else {
  console.log("wrong input!");
}
