// list of variables
let playerScores = 0,
  computerScores = 0;
const playerButtons = document.querySelectorAll(".player-button");
const result = document.querySelector(".result");
const p = document.createElement("p");
const playerScoresResult = document.querySelector(".playerScores");
const computerScoresResult = document.querySelector(".computerScores");
const h2 = document.createElement("h2");
const gameOverOutcome = document.querySelector(".gameOver");

// a function for the computer to select a weapon on random basis
function computerPlay() {
  let randomWeapons = ["rock", "paper", "scissors"];
  return randomWeapons[Math.floor(Math.random() * randomWeapons.length)];
}

// a function for a human to select a weapon on his choice
function getPlayerSelection(event) {
  const playerSelection = event.target.textContent;
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  checkForTheWinner(playerScores, computerScores);
}

// to invoke above function when an event is triggered aka a weapon is selected.
playerButtons.forEach((button) => {
  button.addEventListener("click", getPlayerSelection);
});

// to return the result on each click and accumulate the score accordingly
function playRound(playerSelection, computerSelection) {
  // Player Chooses Rock
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      p.innerText = "Tie!";
      result.appendChild(p);
    } else if (computerSelection === "paper") {
      p.innerText = "You lose! Paper beats Rock";
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = "Computer: " + computerScores;
    } else {
      p.innerText = "You win! Rock beats Scissors";
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = "Player: " + playerScores;
    }
  } else if (playerSelection === "paper") {
    // Player Chooses Paper
    if (computerSelection === "rock") {
      p.innerText = "You win! Paper beats Rock";
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = "Player: " + playerScores;
    } else if (computerSelection === "paper") {
      p.innerText = "Tie!";
      result.appendChild(p);
    } else {
      p.innerText = "You lose! Scissors beats Paper";
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = "Computer: " + computerScores;
    }
  } else if (playerSelection === "scissors") {
    // Player Chooses Scissors
    if (computerSelection === "rock") {
      p.innerText = "You lose! Rock beats Scissors";
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = "Computer: " + computerScores;
    } else if (computerSelection === "paper") {
      p.innerText = "You win! Scissors beats Paper";
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = "Player: " + playerScores;
    } else {
      p.innerText = "Tie!";
      result.appendChild(p);
    }
  }
}

// to return the final result when either the computer or the player has reached 5 scores.
function checkForTheWinner(playerScores, computerScores) {
  if (playerScores === 5) {
    h2.classList.add("playerWon");
    h2.innerText = `You won ${playerScores} to ${computerScores} great job beating the computer!`;
    result.appendChild(h2);
    gameOver();
  } else if (computerScores === 5) {
    h2.classList.add("computerWon");
    h2.innerText = `You lose ${playerScores} to ${computerScores} please try again!`;
    result.appendChild(h2);
    gameOver();
  }
}

// to stop the game and tell that the game is over
function gameOver() {
  const h2 = document.createElement("h2");
  playerButtons.forEach((button) =>
    button.removeEventListener("click", getPlayerSelection)
  );
  h2.innerText = "The Game is Over!";
  gameOverOutcome.appendChild(h2);
}
