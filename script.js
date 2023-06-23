const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    document.getElementById("gameResult").innerHTML = "It's a draw!";
    return console.log("Draw! Both are " + playerChoice);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("gameResult").innerHTML = "You won!";
    return console.log("Win!" + playerChoice + " beats " + computerChoice);
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    document.getElementById("gameResult").innerHTML = "You lost!";
    return console.log("Lost!" + computerChoice + " beats " + playerChoice);
  }
}

//FIX GAME AND PROBABLY ADD IT TO USERSELECTION BELOW

// function game() {
//   playerScore = 0;
//   computerScore = 0;
//   //   playerSelection = "";
//   for (i = 0; ; i++) {
//     if (playerScore < 5 && computerScore < 5) {
//       //   let playerSelection = prompt("Rock, paper or scissors?");
//       if (
//         playerSelection.toLowerCase() === "rock" ||
//         playerSelection.toLowerCase() === "scissors" ||
//         playerSelection.toLowerCase() === "paper"
//       ) {
//         // playRound(playerSelection, getComputerChoice());
//         console.log(playerSelection.toLowerCase());
//         return console.log(
//           "round" + playRound(playerSelection, getComputerChoice())
//         );
//       }
//       //   else {
//       //     console.log("wrong input!");
//       //   }
//     } else {
//       return console.log("SCORE" + playerScore, computerScore);
//     }
//   }
// }

function userSelection() {
  let userChoiceAmt = document.getElementsByClassName("userChoice");
  for (i = 0; i < userChoiceAmt.length; i++) {
    userChoiceAmt[i].addEventListener("click", (e) => {
      playRound(e.target.innerHTML, getComputerChoice());
      return console.log(e.target.innerHTML);
    });
  }
}

userSelection();
