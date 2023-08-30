function generateCharArray(len, ascPos) {
  return Array.from({length: len}, (x, i) => String.fromCharCode(ascPos + i));
}

function rot13(text) {
  const ALPHABET_LENGTH = 26;
  const UPPERCASE_START = 65;
  const LOWERCASE_START = 97;
  const UPPER_LETTERS = generateCharArray(ALPHABET_LENGTH, UPPERCASE_START); 
  const LOWER_LETTERS = generateCharArray(ALPHABET_LENGTH, LOWERCASE_START);
  const ROTATION = 13;

  let result = '';
  for (let chr of text) {
    if (/[a-z]/.test(chr)) {
      let chr_idx = LOWER_LETTERS.indexOf(chr);
      result += LOWER_LETTERS[(chr_idx + ROTATION) % ALPHABET_LENGTH];
    } else if (/[A-Z]/.test(chr)) {
      let chr_idx = UPPER_LETTERS.indexOf(chr);
      result += UPPER_LETTERS[(chr_idx + ROTATION) % ALPHABET_LENGTH];
    } else {
      result += chr;
    }
  }
  
  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
console.log(rot13('abcdefg'));
console.log(rot13('ABCDEFG'));
console.log(rot13('ZXYWVUP'));
console.log(rot13(rot13('ZXYWVUP')));
