'use strict';

console.log(document.querySelector('.message').textContent); //DOM example in javascript
// Select the first element in the document with the class name 'message'.
// Access the text content of this element.
// Log this text content to the console.

// document.querySelector('.score').textContent = 10; //DOM Manipulation
// document.querySelector('.number').textContent = 30;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const numberInput = Number(document.querySelector('.guess').value);

  switch (true) {
    case numberInput === 0:
      document.querySelector('.message').textContent =
        '⛔️ Number Cant be Empty or Zero ⛔️';
      break;

    case numberInput > secretNumber:
      score = loseScore(score, '🚀 Number is too high 🚀');
      break;

    case numberInput < secretNumber:
      score = loseScore(score, '🎢 Number is too low 🎢');
      break;

    default:
      winGame();
      setHighscore(score, highscore);
      break;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //   location.reload(); //easier and faster way :), it'll reload the page
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  return score, secretNumber;
});

function loseScore(score, message) {
  if (score === 1) {
    document.querySelector('.message').textContent =
      '💥 You have lost the game 💥';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#b82525';
  } else {
    document.querySelector('.message').textContent = `${message}`;
  }

  score--;
  document.querySelector('.score').textContent = score;

  return score;
}

function winGame() {
  document.querySelector('.message').textContent =
    '🎉 You have won the game 🎉';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

function setHighscore(score, highscore) {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  return score, highscore;
}
