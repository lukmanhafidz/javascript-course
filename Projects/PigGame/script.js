'use strict';
//init variable
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const playerAll = document.querySelectorAll('.player');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let activePlayer, currentScore, totalScore, gameOver;

function init() {
  activePlayer = 1;
  currentScore = 0;
  totalScore = [0, 0];
  gameOver = true;

  dice.style.display = 'none'; //hide dice img
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`current--2`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`score--2`).textContent = 0;

  playerAll.forEach(player => {
    player.classList.remove('player--winner');
  });

  player1.classList.add('player--active');
  player2.classList.remove('player--active');

  btnRoll.disabled = false;
  btnHold.disabled = false;
}
init();

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

btnNew.addEventListener('click', init);

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
