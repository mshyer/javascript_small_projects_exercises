rlSync = require('readline-sync');
let add = (a, b) => a + b;
a = add(1, 2);
console.log(a);

function sum(a, b) {
    a + b;
}
b = sum(5, 3);
console.log(sum(a));

let getNumber = (text) => {
    let input = rlSync.question(text);
    return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));
