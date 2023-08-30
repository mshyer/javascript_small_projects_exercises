const rlSync = require('readline-sync');
//function letterForGrade(n) {
//  range = Math.floor(n / 10) * 10;
//  switch (range) {
//    case 100:
//      return 'A';
//    case 90:
//      return 'A';
//    case 80:
//      return 'B';
//    case 70:
//      return 'C';
//    case 60:
//      return 'D';
//    default:
//      return 'F';
//  }
//}

function letterForGrade(n) {
  if (n >= 90) {
    return 'A';
  } else if (n >= 70) {
    return 'B';
  } else if (n >= 50) {
    return 'C';
  } else if (n < 50) {
    return 'F';
  }
  return 'NA';
}

function calculateAverage(scores) {
  return (Math.ceil((scores.reduce((a, i) => a + i)) / scores.length));
}

function calculateGrade(scores) {
  let average = calculateAverage(scores);
  console.log(average);
  return letterForGrade(average);
}

function getGrade() {
  //let s1 = Number(rlSync.question('Enter score 1: '));
  //let s2 = Number(rlSync.question('Enter score 2: '));
  //let s3 = Number(rlSync.question('Enter score 3: '));
  let scores = [];
  let input = '';
  while (input !== 'x') {
    if (input) {
      scores.push(Number(input));
    }
    input = rlSync.question('Please enter a grade. Press \'x\' to exit');
  }
  return console.log(`Based on the average of your 3\
  scores, your letter grade is ${calculateGrade(scores)}`);
}

getGrade();

