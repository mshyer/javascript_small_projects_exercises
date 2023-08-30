const rlSync = require('readline-sync');

//const guessPassword = function check(password) {
//  let attempts = 0;
//  while (attempts < 3) {
//    response = rlSync.question('Please enter the password ');
//    if (response === password) {
//      return (console.log('You have successfully logged in.'));
//    } else {
//      attempts += 1;
//    }
//  }
//  return console.log('You have been denied access! We are calling the po po');
//}
//
////guessPassword('abcde');
//
//
//let password = 'abcde';
//
//let publicInterface = function(password) {
//  return function() {
//    return guessPassword(password);
//  }
//}
//let guessInstance = guesser(password);
//
//guessInstance();
//
//

function correctPassword(sysPass, IOPass) {
  return (!!(sysPass === IOPass));
}

function guessPassword(sysPass) {
  let tries = 0;
  while (tries < 3) {
    let response = rlSync.question('Please enter the password: ');
    if (correctPassword(sysPass, response)) {
      return(console.log('Logged in Successfully.'));
    }
    tries += 1;
  }
  return (console.log('Access Denied'));
}

function safeGuess(sysPass) {
  return (function() {
    return guessPassword(sysPass);
  });
}

let password = 'very_secure';
let safeGuesser = safeGuess(password);

safeGuesser();
