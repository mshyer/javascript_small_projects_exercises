let rlSync = require('readline-sync');

function multiply(n1, n2) {
    return n1 * n2; 
}

function getNumber(prompt) {
    return parseFloat(rlSync.question(prompt));
}

let num1 = getNumber("Enter the first number");
let num2 = getNumber("Enter the second number");
console.log(multiply(num1, num2));


