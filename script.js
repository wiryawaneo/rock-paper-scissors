const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    document.getElementById("gameResult").innerHTML = "It's a draw!";
    return (result = "draw");
    // return console.log("Draw! Both are " + playerChoice);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("gameResult").innerHTML = "You won!";
    return (result = "won");
    // return console.log("Win!" + playerChoice + " beats " + computerChoice);
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    document.getElementById("gameResult").innerHTML = "You lost!";
    return (result = "lost");
    // return console.log("Lost!" + computerChoice + " beats " + playerChoice);
  }
}

// FIX GAME AND PROBABLY ADD IT TO USERSELECTION BELOW

// function game() {
//   playerScore = 0;
//   computerScore = 0;
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

function game() {
  let winCount = 0;
  let loseCount = 0;
  let userChoiceAmt = document.getElementsByClassName("userChoice");
  for (i = 0; i < userChoiceAmt.length; i++) {
    userChoiceAmt[i].addEventListener("click", (e) => {
      playRound(e.target.innerHTML, getComputerChoice());
      console.log(result);
      if (result === "won") {
        winCount++;
        document.getElementById("userScore").innerHTML = winCount;
      } else if (result === "lost") {
        loseCount++;
        document.getElementById("computerScore").innerHTML = loseCount;
      }
      if (winCount === 5 || loseCount === 5) {
        const playAgainBtn = document.getElementById("playAgain");
        playAgainBtn.style.display = "block";
      }
      console.log(winCount, loseCount)
    });
  }
}

game();

//add a game lost and reset game feature (win/lost ==== 5, button modal pop and click to reset?)

function playAgain() {
  const playAgainBtn = document.getElementById("playAgain");
  playAgainBtn.style.display = "none";
  let winCount = 0;
  return loseCount = 0;
//   document.getElementById("userScore").innerHTML = winCount;
//   document.getElementById("computerScore").innerHTML = loseCount;
}
