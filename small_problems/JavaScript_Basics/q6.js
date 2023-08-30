let rlSync = require('readline-sync');
let answer = rlSync.question('Say a phrase!');

console.log(`There are ${answer.length} characters in ${answer}`);
let nwLength = answer.replace(/[^a-zA-Z]/g, '').length;
console.log(`There are ${nwLength} characters in ${answer}`);
