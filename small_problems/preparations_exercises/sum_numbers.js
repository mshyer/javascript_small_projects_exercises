let rlSync = require('readline-sync');

let number1 = parseInt(rlSync.question('Enter the first number\n'));
let number2 = parseInt(rlSync.question('Enter the second number\n'));
let product = number1 * number2;

console.log(`The numbers ${number1} and ${number2} multiply to ${product}`);
