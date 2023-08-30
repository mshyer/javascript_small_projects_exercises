const swapFirstLastCharacters = function(string) {
  if (string.length === 1) {
    return string;
  }
  let first = string[0];
  let last = string[string.length - 1];
  let middle = string.slice(1, -1);
  return last + middle + first;
}

const swap = function(string) {
  let words = string.split(' ');
  return words.map(word =>swapFirstLastCharacters(word));
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
