"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log("el numero aleatorio es", Math.ceil(Math.random() * 100));

let randomNumber = getRandomNumber(100);
const playButton = document.querySelector(".js-button");
const message = document.querySelector(".js-clue");

const number = document.querySelector(".js-number");

/* const number = parseInt(numberString.value); */
/* no me fuenciona el parseInt, queria hacer una constante number string y luego pasarle a number con parse int, pero no me funciona */

function getAMessage() {
  if (number.value === randomNumber) {
    message.innerHTML = "Has ganado campeon!!!";
  } else if (number.value > randomNumber) {
    message.innerHTML = "Demasiado alto.";
  } else if (number.value < randomNumber) {
    message.innerHTML = "Demasiado bajo..";
  } else if (number.value > 100) {
    message.innerHTML = "El número debe estarentre 1 y 100.";
  } else if (number.value < 1) {
    message.innerHTML = "El número debe estarentre 1 y 100.";
  } else if (number.value === "") {
    message.innerHTML = "El número debe estarentre 1 y 100.";
  }
}

playButton.addEventListener("click", getAMessage);
