const rlSync = require('readline-sync');
let age = -1;
while(!(age >= 0 && age <= 200)) {
  age = Number.parseInt(rlSync.question('What is your age? '));
}

let retireTarget = -1;
while(!(retireTarget >= 0 && retireTarget <= 200)) {
  retireTarget = Number.parseInt(rlSync.question('What age would you like to retire? '));
}

let today = new Date;
let year = today.getFullYear();
let retirement = year + (retireTarget - age);

console.log(`It's ${year}. You will retire in ${retirement}`);
console.log(`You only have ${retireTarget - age} years to go!`);
