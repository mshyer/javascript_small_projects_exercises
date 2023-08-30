// Input: integer representing year
// Output: string with two parts, the number and suffix
//
// Algorithm:
// 1. Find the century:
//   a. Math.ceil(year / 100)
// 2. find the suffix
//   - if the century ends in:
//    1: st
//    2: nd
//    3: rd
//    4-19: th
//    % 10: th
//    DATA STRUCTURE: conditional logic and numbers
// 3. Combine both into string and return it
//


function suffix(century) {
  if (century % 10 === 0) {
    return 'th';
  } else if (century % 100 < 20 && century % 100 > 3) {
    return 'th';
  } else if (century % 10 === 1) {
    return 'st';
  } else if (century % 10 === 2) {
    return 'nd';
  } else if (century % 10 === 3) {
    return 'rd';
  }
  return 'oops';
}

function century(year) {
  let cent = Math.ceil(year / 100);
  let sufx = suffix(cent);
  return `${cent}${sufx}`;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
