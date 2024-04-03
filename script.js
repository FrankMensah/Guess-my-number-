'use strict';

// document.querySelector('.score').textContent = '5';

// document.querySelector('.number').textContent = '6';

// document.querySelector('.message').textContent = '🥳 Correct Number!🏆';

const rand = Math.random();
const secretNumber = Math.trunc(rand * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!🏆');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High !' : '📉Too Low !');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥Game Over😭');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High !';
  //     score--;
  //     // highscore = score;
  //     // document.querySelector('.highscore').textContent = highscore;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥Game Over😭';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥Game Over😭';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
