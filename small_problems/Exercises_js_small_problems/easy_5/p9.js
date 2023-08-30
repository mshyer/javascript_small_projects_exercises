// Problem: given a string of words separated by spaces, return a new string with all the words in opposite order
const reverseSentence = function(sentence) {
  let words = sentence.split(' ');
  return words.reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
