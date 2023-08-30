// Bannerizer
// if the string length is greater than MAX_WIDTH
// split into an array of multiple strings
// 
// function logStrings(strings) {
//   strings.forEach(string => {
//     console.log(`| ${string} |`);
//   });
// }

const MAX_WIDTH = 75;
const invalidWidth = width => width <= 0 || width > 200;

function getLines(string, maxWidth) {
  let strings = [];

  while (string.length > maxWidth) {
    strings.push(string.slice(0, maxWidth));
    string = string.slice(maxWidth);
  }
  strings.push(string.padEnd(maxWidth, ' '));
  return strings;
}

function logInBox(string, maxWidth = MAX_WIDTH) {
  if (invalidWidth(maxWidth)) {
    maxWidth = MAX_WIDTH;
  }

  let lines = getLines(string, maxWidth);
  const horizontalRule = '+' + '-'.repeat(lines[0].length + 2) + '+';
  const emptyLine = '|' + ' '.repeat(lines[0].length + 2) + '|';
  console.log(horizontalRule);
  console.log(emptyLine);
  lines.forEach(line => console.log(`| ${line} |`));
  console.log(emptyLine);
  console.log(horizontalRule);
}

// let alphabetSoup = 'abcdefghijklmnopqrstuvwxyz'.repeat(50);
// console.log(getLines(alphabetSoup, 75));
// logInBox('');
// logInBox('To boldly go where no one has gone before.', 7);
// logInBox(alphabetSoup);
// logInBox(alphabetSoup, 0);
// logInBox(alphabetSoup, 20);
