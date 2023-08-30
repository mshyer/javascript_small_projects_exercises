let rlSync = require('readline-sync');
//console.log(`Hello, ${first_name} ${last_name}!`);
function get_name() {
    let first_name = rlSync.question('What is your first name? ');
    let last_name = rlSync.question('What is your last name? ');
    return `${first_name} ${last_name}`
}

function greet() {
    let name = get_name();
    console.log(`Welcome to the machine ${name}!`);
}

greet();

