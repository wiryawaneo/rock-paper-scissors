//Get computer choice for the game
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//Create game to see who wins/lose (single round)
function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === computerChoice) {
    document.getElementById("gameResult").innerHTML = "It's a draw!";
    return (result = "draw");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("gameResult").innerHTML = "You won!";
    return (result = "won");
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    document.getElementById("gameResult").innerHTML = "You lost!";
    return (result = "lost");
  }
}

//Game to calculate score up to 5
let winCount = 0;
let loseCount = 0;

function game() {
  let userChoiceAmt = document.getElementsByClassName("userChoice");
  for (i = 0; i < userChoiceAmt.length; i++) {
    userChoiceAmt[i].addEventListener("click", (e) => {
      playRound(e.target.innerHTML, getComputerChoice());
      if (result === "won") {
        winCount++;
        document.getElementById("userScore").innerHTML = winCount;
      } else if (result === "lost") {
        loseCount++;
        document.getElementById("computerScore").innerHTML = loseCount;
      }
      if (winCount === 5 || loseCount === 5) {
        if (winCount === 5) {
          document.getElementById("gameResult").innerHTML =
            "You Won! Play Again?";
        } else if (loseCount === 5) {
          document.getElementById("gameResult").innerHTML =
            "You Lost, Play Again?";
        }
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        for (j = 0; j < userChoiceAmt.length; j++) {
          userChoiceAmt[j].disabled = true;
        }
      }
    });
  }
}

game();

//playAgain to reset score and game
function playAgain() {
  document.getElementById("gameResult").innerHTML = "Select an option below!";
  let userChoiceAmt = document.getElementsByClassName("userChoice");
  for (j = 0; j < userChoiceAmt.length; j++) {
    userChoiceAmt[j].disabled = false;
  }
  document.getElementById("playAgain").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  document.getElementById("userScore").innerHTML = 0;
  document.getElementById("computerScore").innerHTML = 0;
  winCount = 0;
  return (loseCount = 0);
}
