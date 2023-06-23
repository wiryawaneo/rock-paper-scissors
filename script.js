const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw! Both are " + playerChoice;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore += 1;
    document.getElementById("userScore").innerHTML = playerScore;
    return "Win!" + playerChoice + " beats " + computerChoice;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore += 1;
    document.getElementById("computerScore").innerHTML = computerScore;
    return "Lost!" + computerChoice + " beats " + playerChoice;
  } else if (
    playerChoice != "rock" ||
    playerChoice != "paper" ||
    playerChoice != "scissors"
  ) {
    return "Player has sent a wrong input";
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;
  //   playerSelection = "";
  for (i = 0; ; i++) {
    if (playerScore < 5 && computerScore < 5) {
      //   let playerSelection = prompt("Rock, paper or scissors?");
      if (
        playerSelection.toLowerCase() === "rock" ||
        playerSelection.toLowerCase() === "scissors" ||
        playerSelection.toLowerCase() === "paper"
      ) {
        // playRound(playerSelection, getComputerChoice());
        console.log(playerSelection.toLowerCase());
        return console.log(
          "round" + playRound(playerSelection, getComputerChoice())
        );
      }
      //   else {
      //     console.log("wrong input!");
      //   }
    } else {
      return console.log("SCORE" + playerScore, computerScore);
    }
  }
}

// game();

let userChoiceAmt = document.getElementsByClassName("userChoice");
for (i = 0; i<userChoiceAmt.length; i++) {
    userChoiceAmt[i].addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
    })
}
