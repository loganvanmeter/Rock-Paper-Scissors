/*
"use strict";
const genRandomNumber = function () {
	return Math.floor(Math.random() * 4);
};

const computerPlay = function () {
	let randomNum = genRandomNumber();
	let answer = "";
	if (randomNum === 1) {
		answer = "Rock";
	} else if (randomNum === 2) {
		answer = "Paper";
	} else {
		answer = "Scissors";
	}
	return answer;
};

let options = ["rock", "paper", "scissors"];
let score = [];
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
	const winningConditions =
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock");

	if (computerSelection === playerSelection) {
		return "It's a draw!";
	} else if (options.indexOf(playerSelection) === -1) {
		return "That's not an option.";
	} else if (winningConditions) {
		score.push("player");
		playerScore++;
		console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
		return "You win this round!";
	} else {
		score.push("computer");
		computerScore++;
		console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
		return "You lose this round!";
	}
}

function game() {
	for (let i = 0; score.length < 5; i++) {
		let playerSelection = "";
		const computerSelection = computerPlay().toLowerCase();
		console.log(playRound(playerSelection, computerSelection));
		if (playerScore === 3) {
			console.log("You won the game!");
			break;
		} else if (computerScore === 3) {
			console.log("The computer won the game");
			break;
		}
	}
}

game();
*/
