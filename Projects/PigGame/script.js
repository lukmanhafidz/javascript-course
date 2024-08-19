'use strict';
//init variable
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 1;
let currentScore = 0;
let totalScore = [0, 0];
let gameOver = true;

dice.style.display = 'none'; //hide dice img

//Roll Dice Function
btnRoll.addEventListener('click', function () {
  let rollRand = Math.trunc(Math.random() * 6) + 1;

  dice.src = `dice-${rollRand}.png`;
  dice.style.display = 'block';

  if (rollRand === 1) {
    activePlayer = swtichPlayer(activePlayer);
  } else {
    currentScore += rollRand; //calculate score per roll if not 1
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

//Hold Score Function
btnHold.addEventListener('click', function () {
  let playerIndex = activePlayer - 1;
  totalScore[playerIndex] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[playerIndex];

  if (totalScore[playerIndex] >= 10) {
    //check if score above max then win
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    dice.style.display = 'none';

    gameOver = true;
    isGameOver(gameOver);
  } else {
    activePlayer = swtichPlayer(activePlayer);
  }
});

function swtichPlayer(activePlayer) {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 1 ? 2 : 1; //switching current player number

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');

  return activePlayer;
}

function isGameOver(status) {
  //button status when game over
  btnRoll.disabled = status;
  btnHold.disabled = status;
}
