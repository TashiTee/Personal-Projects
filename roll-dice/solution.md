const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

function getRandomNumber() {
  return 1 + Math.floor(Math.random() * 6);
}

function showDice() {
  diceTriggerEl.addEventListener("click", function () {
    let myRandomNumber = getRandomNumber();
    diceImageEl.src = "images/dice" + myRandomNumber + ".png";
  })
}

showDice();