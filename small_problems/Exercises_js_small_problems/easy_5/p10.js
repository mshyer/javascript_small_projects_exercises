// for this problem, we need to reverse any words in a string that are longer than length 5
// input: sentence string
// output: string
// data structure: array of words
// algorithm:
//   split the sentence into words
//   map the array with another function that reverses greater than 5 length words
//     split the word into char array
//       reverse than rejoin ;)
//

const reverseWord = function(word) {
  if (word.length >= 5) {
    let chars = word.split('');
    return chars.reverse().join('');
  } else {
    return word;
  }
}

//function reverseWords(string) {
//  let words = string.split(' ');
//  words = words.map(word => reverseWord(word));
//  return words.join(' ');
//}
//

function reverseWords(string) {
  const REGEX = /\b[a-z]{5,}\b/gi;
  return string.replace(REGEX, match => reverseWord(match));
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"{
