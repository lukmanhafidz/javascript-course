'use strict';

const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

dice.style.display = 'none';
let activePlayer = 1;
let currentScore = 0;

btnRoll.addEventListener('click', function () {
  let rollRand = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${rollRand}.png`;
  dice.style.display = 'block';

  currentScore += rollRand;

  if (rollRand === 1) {
    // document.querySelector(`score--${activePlayer}`).textContent = score;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;

    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  } else {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
