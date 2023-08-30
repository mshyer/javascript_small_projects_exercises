let rlSync = require('readline-sync');

let counter = 1;
let numArr = [];

function numString(num) {
  switch (num) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    case 4:
      return '4th';
    case 5:
      return '5th';
    default:
      return 'last';
  }
}
//  if (num === 1) {
//    return '1st';
//  } else if (num === 2) {
//    return '2nd';
//  } else if (num === 3) {
//    return '3rd';
//  } else if (num === 4) {
//    return '4th';
//  } else if (num === 5) {
//    return 'last';
//  }

while (counter < 6) {
  let num = Number.parseInt(rlSync.question(`Enter the ${numString(counter)} number: `));
  if (Number.isInteger(num)) {
    numArr.push(num);
  }
  counter += 1;
}

let checkValue = Number.parseInt(rlSync.question(`Enter the ${numString(counter)} number: `));

//if (numArr.includes(tester)) {
//  console.log(`The number ${tester} appears in [${numArr.join(', ')}].`);
//} else {
//  console.log(`The number ${tester} does not appear in ${numArr}.`);
//}
let condition = (element) => element > checkValue;
function isIncluded(arr, val) {
  return arr.some(condition);
}

if (isIncluded(numArr, checkValue)) {
 console.log(`There is a number in [${numArr.join(', ')}] greater than ${checkValue}`); 
} else {
  console.log(`There is no number in [${numArr.join(', ')}] greater than ${checkValue}`);
}

