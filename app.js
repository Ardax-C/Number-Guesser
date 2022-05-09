/* 
Game function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum,
  totalGuesses,
  timesGuessed = 0;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  resetBtn = document.querySelector('#reset-btn'),
  guessInput = document.querySelector('#guess-input'),
  totalGuessesDisplay = document.querySelector('.total-guesses-number');
remainingGuessDisplay = document.querySelector('.remaining-guesses-number');
(message = document.querySelector('.message')),
  (difficultyList = document.querySelector('#difficulty-options'));

// Establish event listeners
difficultyList.addEventListener('change', setDifficulty);
guessBtn.addEventListener('click', evaluateInput);
resetBtn.addEventListener('click', clearItems);

// Assign UI min & default max
minNum.textContent = min;
maxNum.textContent = max;

// Set default select option, winning number, & total guesses
difficultyList.value = 'easy';
totalGuesses = 10;
totalGuessesDisplay.textContent = 10;
winningNum = Math.floor(Math.random() * 10 + 1);

// Set max based on user selection
function setDifficulty() {
  switch (difficultyList.value) {
    case 'easy':
      message.textContent = '';
      remainingGuessDisplay.textContent = '';
      totalGuesses = 10;
      timesGuessed = 0;
      totalGuessesDisplay.textContent = totalGuesses;
      winningNum = Math.floor(Math.random() * 10 + 1);
      maxNum.textContent = max;
      break;
    case 'hard':
      message.textContent = '';
      remainingGuessDisplay.textContent = '';
      totalGuesses = 8;
      timesGuessed = 0;
      totalGuessesDisplay.textContent = totalGuesses;
      winningNum = Math.floor(Math.random() * 100 + 1);
      maxNum.textContent = max * 10;
      break;
    case 'challenging':
      message.textContent = '';
      remainingGuessDisplay.textContent = '';
      totalGuesses = 6;
      timesGuessed = 0;
      totalGuessesDisplay.textContent = totalGuesses;
      winningNum = Math.floor(Math.random() * 1000 + 1);
      maxNum.textContent = max * 100;
      break;
  }
}

function evaluateInput() {
  if (timesGuessed < totalGuesses) {
    if (guessInput.value < winningNum) {
      message.textContent = 'Too low!';
      timesGuessed++;
      remainingGuessDisplay.textContent = totalGuesses - timesGuessed;
    } else if (guessInput.value > winningNum) {
      message.textContent = 'Too high!';
      timesGuessed++;
      remainingGuessDisplay.textContent = totalGuesses - timesGuessed;
    } else {
      message.textContent = 'You guessed it!';
    }
  } else {
    message.textContent = `Sorry, you lose. The number was ${winningNum}`;
  }
}

function clearItems() {
  difficultyList.value = 'easy';
  maxNum.textContent = 10;
  totalGuesses = 10;
  totalGuessesDisplay.textContent = 10;
  timesGuessed = 0;
  remainingGuessDisplay.textContent = '';
  guessInput.value = '';
  message.textContent = '';
}
