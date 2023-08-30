let rlSync = require('readline-sync');

function verify(int) {
  return !!int && !/[\D]/.test(int) && Number(int) > 0;
}

let int;
while (!verify(int)) {
  console.log('Please enter an integer greater than 0:');
  int = rlSync.prompt();
}

let operation;
while (operation !== 's' && operation !== 'p') {
  console.log('Please enter operation (s to sum, p to product');
  operation = rlSync.keyIn();
}
int = Number(int);

let range = Array.from({length: int}, (_, idx) => idx + 1);

function sum(range) {
  return range.reduce((acc, ele) => acc + ele);
}

function product(range) {
  return range.reduce((acc, ele) => acc * ele);
}

if (operation === 's') {
  console.log(`The sum of the integers is ${sum(range)}.`);
}

if (operation === 'p') {
  console.log(`The sum of the integers is ${product(range)}.`);
}
