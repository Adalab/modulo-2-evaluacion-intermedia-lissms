"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
const playButton = document.querySelector(".js-button");
const message = document.querySelector(".js-clue");

const numberString = document.querySelector(".js-number");

console.log("el numero aleatorio es", randomNumber);
/* const number = parseInt(numberString.value); */
/* no me fuenciona el parseInt, queria hacer una constante number string y luego pasarle a number con parse int, pero no me funciona */

function getAMessage() {
  let number = parseInt(numberString.value);
  if (number === randomNumber) {
    message.innerHTML = "Has ganado campeon!!!";
  } else if (number > randomNumber < 100) {
    message.innerHTML = "Demasiado alto.";
  } else if (number < randomNumber) {
    message.innerHTML = "Demasiado bajo..";
  } else if (number > 100) {
    message.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (number < 1) {
    message.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (number === NaN) {
    message.innerHTML = "El número debe estar entre 1 y 100.";
  }
  console.log("number.value", number);
}

playButton.addEventListener("click", getAMessage);

/* funcion de intentos */
const attemp = document.querySelector(".js-attemp");
let initial = 0;
let nextTry = 1;

function getNumberAttemp() {
  initial = initial + nextTry;
  return (attemp.innerHTML = initial);
}

playButton.addEventListener("click", getNumberAttemp);
