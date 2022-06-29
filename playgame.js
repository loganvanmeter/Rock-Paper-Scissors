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

console.log(computerPlay());
