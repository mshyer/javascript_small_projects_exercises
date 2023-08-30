// Problem: make an acronym out of a string of words
// Input: string of words. Some separated by dashes
// Output: all caps single string acronym
// Algorithm:
//   1. Sanitize the string: remove non-space, non-letter characters
//        regex: /[^ a-z]/gi
//   2. Match the first letter of each word with regex
//        regex: /\b[a-zA-Z]/g
//   2. return the Joined  matches and capitalize them

function acronym(string) {
  let cleanString = string.replace(/[^ a-z,]/gi, ' ').replace(/,/, '');
  let firstLetters = cleanString.match(/\b[a-zA-Z]/g);
  return firstLetters.join('').toUpperCase();
}

console.log(acronym('Portable Network Graphics'));
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));
