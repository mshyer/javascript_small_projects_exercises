//Problem: double only consonant letters in a string, leave all other characters along
// Input: string
// Output: new string with consonants repeated
// I wonder if I can use regex capture groups here...
// Data structure: regex capture group
// Algorithm:
//   use string.replace to replace the matched regex with the capture group doubled.
function doubleConsonants(string) {
  const REGEX = /([^aeiou\d\W_])/gi;
  let doubled = string.replace(REGEX, '$1$1');
  return doubled;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));
