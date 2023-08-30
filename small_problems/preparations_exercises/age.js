let rlSync = require('readline-sync');
let age = Number(rlSync.question('what\'s ur age bruh'));

console.log(`You are ${age} years old.`);
console.log('In 10 years, you will be ' + `${age + (1 * 10)}` + ' years old.');
console.log('In 20 years, you will be ' + `${age + (2 * 10)}` + ' years old.');
console.log('In 30 years, you will be ' + `${age + (3 * 10)}` + ' years old.');
console.log('In 40 years, you will be ' + `${age + (4 * 10)}` + ' years old.');

