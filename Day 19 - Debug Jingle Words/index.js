const data = [
  'santa',
  'reindeer',
  'mistletoe',
  'snowflake',
  'ornament',
  'gingerbread',
  'stocking',
  'jinglebells',
  'candle',
  'nutcracker',
  'wreath',
  'sleigh',
  'elf',
  'gift',
  'carol',
  'decorations',
];

const word = data[Math.floor(Math.random() * data.length)];
const wordArr = word.toLowerCase().split('');
const wordDisplay = document.getElementById('word-display');
const youWinDisplay = document.querySelector('.you-win');
const guessesEl = document.getElementById('guesses');

document.addEventListener('submit', handleGuess);

function renderSpaces() {
  const wordHtml = wordArr.map(() => {
    return `<span class="letter">-</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join('');
}
renderSpaces();

function renderGuess(arr) {
  const wordHtml = arr.map((letter) => {
    return `<span class="letter">${letter}</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join('');
}

function handleGuess(e) {
  e.preventDefault();

  let currentState = [];
  let input = document.getElementById('user-input');
  let guess = input.value.toLowerCase();
  const guessArr = guess.split('');

  wordArr.forEach((letter, index) => {
    if (letter === guessArr[index]) {
      currentState.push(letter);
    } else {
      currentState.push('-');
    }
  });

  renderGuess(currentState);
  checkWin(currentState.join(''));
  input.value = '';
}

function checkWin(guess) {
  if (word === guess) {
    youWinDisplay.classList.remove('hidden');
  }
}
