let rlSync = require('readline-sync');
const METERS_TO_FEET = 10.7639;

console.log('Please enter the length(m):');
let length = parseInt(rlSync.prompt(), 10);
console.log('Please enter the width (m):');
let width = parseInt(rlSync.prompt(), 10);

let m2 = (length * width).toFixed(2);
let f2 = (m2 * METERS_TO_FEET).toFixed(2);

console.log(`Area in sq m: ${m2}`);
console.log(`Area in sq f: ${f2}`);
