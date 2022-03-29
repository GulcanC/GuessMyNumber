'use strict';

// for random number use Math.random() method and for integer number (tam sayı) use Math.trunc() method
console.log(Math.random() * 20);
console.log(Math.trunc(Math.random() * 20 + 1));

// define  random number, this is our secret number
// initial score is 20, initial high score is 0, they must be let not const because const is immutable, but we will change them after

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// do not write the same code again and again instead of this use a function and call this function

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const myNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const myNumberStyle = function (border) {
  document.querySelector('.number').style.borderRadius = border;
};

const bodyStyle = function (bodyColor) {
  document.querySelector('body').style.background = bodyColor;
};

const myScore = function (score) {
  document.querySelector('score').textContent = score;
};
const footerStyle1 = function (footer) {
  document.querySelector('footer').style.fontSize = footer;
};
const footerStyle2 = function (footer2) {
  document.querySelector('footer').style.marginBottom = footer2;
};

// footer functions for CSS style
footerStyle1('16px');
footerStyle2('25px');

// use event handler for check button, event type is click
document.querySelector('.check').addEventListener('click', function () {
  // input values are string, first convert thiş to number by using Number() function
  const guess = Number(document.querySelector('.guess').value);
  // If there is no input
  if (!guess) {
    displayMessage('⛔️ Enter a number!');
  }
  // When player finds correct number
  else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!');
    myNumber(secretNumber);
    bodyStyle('rgb(173, 109, 241)'); // pink
    document.querySelector('button').style.borderRadius = '10px';
    myNumberStyle('10px');
    document.querySelector('input').style.borderRadius = '10px';
    document.querySelector('.check').style.borderRadius = '10px';
    document.querySelector('h1').textContent =
      '🎉 Correct Number !' + '  ' + 'Your score: ' + score;

    // high score

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high' : '⬇️ Too low');
      score--;
      myScore(score);
    } else {
      displayMessage('🧨 You lost the game!');
      myScore(0);
    }
  }
});

// all initial conditions for again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('💭 Start guessing...');
  myScore(score);
  myNumber('?');
  document.querySelector('.guess').textContent = '';
  bodyStyle('rgb(17, 114, 81)'); //green
  document.querySelector('h1').textContent = ' ❓ Guess My Number! ❓';
  document.querySelector('input').value = '';
  myNumberStyle('50%');
});

//😇😇😇😇 KODUN AÇIKLAMALI UZUN HALİ BURADA 😇😇😇😇
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// 5 select our secret number

document.querySelector('.check').addEventListener('click', function () {
  // Store value into a variable
  const guess = Number(document.querySelector('.guess').value);
  // If there is no guess
  // We set the initial score as 20, so it can not be const, it should be let
  // const is immutable, değişmez.

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a number!';
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = 'rgb(173, 109, 241)';
    document.querySelector('button').style.borderRadius = '10px';
    document.querySelector('.number').style.borderRadius = '10px';
    document.querySelector('input').style.borderRadius = '10px';
    document.querySelector('.check').style.borderRadius = '10px';
    document.querySelector('h1').textContent =
      'Correct Number !' + '  ' + 'Your score: ' + score;

    // high score

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// all initial conditions for again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.background = 'rgb(17, 114, 81)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('input').value = '';
});
*/
