'use strict';

const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

dice.style.display = 'none';
let activePlayer = 1;
let currentScore = 0;
let totalScore = [0, 0];

btnRoll.addEventListener('click', function () {
  let rollRand = Math.trunc(Math.random() * 6) + 1;

  dice.src = `dice-${rollRand}.png`;
  dice.style.display = 'block';

  currentScore += rollRand;

  if (rollRand === 1) {
    activePlayer = swtichPlayer(activePlayer);
  } else {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

btnHold.addEventListener('click', function () {
  let playerIndex = activePlayer - 1;
  totalScore[playerIndex] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[playerIndex];

  if (totalScore[playerIndex] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    activePlayer = swtichPlayer(activePlayer);
  }
});

function swtichPlayer(activePlayer) {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 1 ? 2 : 1;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');

  return activePlayer;
}
