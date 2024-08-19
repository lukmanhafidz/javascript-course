'use strict';

const totalScoreP1 = document.getElementById('score--0');
const currentScoreP1 = document.querySelector('current--0');

const totalScoreP2 = document.getElementById('score--1');
const currentScoreP2 = document.querySelector('current--0');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

dice.style.display = 'none';

btnRoll.addEventListener('click', function () {
  dice.style.display = 'block';
  let rollRand = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${rollRand}.png`;
});
