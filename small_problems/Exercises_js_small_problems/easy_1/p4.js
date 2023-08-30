let rlSync = require('readline-sync');

console.log('What is the bill?');
let bill = parseFloat(rlSync.prompt(), 10);

console.log('What is the tip percentage?');
let tipPercent = parseFloat(rlSync.prompt(), 10);

let tip = bill * (tipPercent / 100);

let total = bill + tip;

console.log(`The tip is ${tip.toFixed(2)}.`);
console.log(`The total is $${total.toFixed(2)}.`);
