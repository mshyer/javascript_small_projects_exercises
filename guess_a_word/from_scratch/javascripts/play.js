let gamestate;
const spaces = document.getElementById('spaces');
const guesses = document.getElementById('guesses');
const message = document.getElementById('message');
const playAgain = document.getElementById('play_again');

function drawSpans(word) {
  let numSpans = word.length;
  for (let idx = 0; idx < numSpans; idx += 1) {
    let span = document.createElement('span');
    spaces.append(span);

  }
}
function resetSpans() {
  spaces.replaceChildren();
  guesses.replaceChildren();
}

const gameLost = () => gamestate.guesses > 3;
const gameWon = () => gamestate.word.split('').every(letter => gamestate.letters.includes(letter));

const playAgainButtonHandler = function(event) {
  event.preventDefault();
  gamestate.nextGame();
  playAgain.style = 'display: none;';
  message.style = 'display: none;';
  document.body.className = '';
};

const nextGameOptions = function(won) {
  document.removeEventListener('keydown', handleKeydown);
  if (won) {
    message.textContent = 'You win!';
    document.body.classList.add('win');
  } else {
    message.textContent = 'You lose :(';
    document.body.classList.add('lose');
  }
  if (gamestate.getWords().length > 0) {
    playAgain.textContent = 'Play again';
    playAgain.addEventListener('click', playAgainButtonHandler);
  } else {
    playAgain.textContent = 'No more words to play with'
    playAgain.href = '';
  }
  
  playAgain.style = 'display: block;';
};

const revealLetter = function(letter) {
  let word = gamestate.word;
  if (!gamestate.letters.includes(letter)) {
    gamestate.letters.push(letter);

    for (let idx = 0; idx < word.length; idx += 1) {
      if (word[idx] === letter) {
        let span = [...spaces.querySelectorAll('span')][idx];
        span.textContent = letter;
      }
    }
  }
};

const incrementGuesses = function(letter) {
  if (!gamestate.letters.includes(letter)) {
    gamestate.letters.push(letter);
    gamestate.guesses += 1;
    let span = document.createElement('span');
    span.textContent = letter;
    guesses.append(span);
  }

};

function processGuess(key) {
  if (gamestate.word.includes(key)) {
    revealLetter(key);
  } else {
    incrementGuesses(key);
  }
}

function handleKeydown(event) {
  let key;
  if (/^[a-z]$/i.test(event.key)) {
    key = event.key.toLowerCase();
    console.log(key);
    processGuess(key);
    if (gameLost()) {
      nextGameOptions(false);
    } else if (gameWon()) {
      nextGameOptions(true);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (function game() {
    let words = ['happy', 'tree', 'sovereignty'];
    gamestate = {
      getWords() {
        return words;
      },
      nextGame() {
        this.guesses = 0;
        this.letters.length = 0;
        this.word = words.pop();
        resetSpans();
        drawSpans(this.word);
        document.addEventListener('keydown', handleKeydown);
      },
      guesses: 0,
      letters: [],
      word: '',
      
      init() {
        this.guesses = 0;
        this.letters.length = 0;
        this.word = words.pop();
        drawSpans(this.word);

        document.addEventListener('keydown', handleKeydown);

      },
    };

  })();

  gamestate.init();

});
