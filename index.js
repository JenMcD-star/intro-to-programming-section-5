//added innerHML to messages that need to be displayed
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high').innerHTML;
const tooLowMessage = document.getElementById('too-low').innerHTML;
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('num-of-guesses');
const correctMessage = document.getElementById('correct').innerHTML;
const messageDisplay = document.getElementById('messageDisplay');
let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  if (guess < 1 || guess > 99){
    alert("please pick a number between 1 and 99");
    attempts += 0;
  } else {
  //bug 4 reassign const
  attempts = attempts + 1;

  hideAllMessages();
  const remainingAttempts = maxNumberOfAttempts - attempts;
  if (guess === targetNumber) {
    messageDisplay.style.display = '';
    if (attemps = 1){
    messageDisplay.innerHTML = `${correctMessage} You made ${attempts} guess`;
    } else {
      messageDisplay.innerHTML = `${correctMessage} You made ${attempts} guesses`;
    }
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      messageDisplay.style.display = '';
    messageDisplay.innerHTML = `${tooLowMessage} You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    } else {
      //bug 5 tooLow twice instead of tooHigh
      messageDisplay.style.display = '';
    messageDisplay.innerHTML = `${tooHighMessage} You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
    }

}
//bug 1, too many = 
  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = '';

  resetButton.style.display = '';
}}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex <= messages.length; elementIndex++) {
    //bug 6?? gave the div an id in the html
    messageDisplay.style.display = 'none';
  }
}
//bug 2, misspelling 
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  //bug 3, reassign const
  maxNumberOfAttempts = 5;
  //bug 7reset attemps after reset button
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false;
  //spelling mistake
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
  
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
