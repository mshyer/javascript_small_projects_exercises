'use strict';
let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');

let story = `The ${noun} went up to his ${adjective} boss and ${verb}.`;
console.log(story);

