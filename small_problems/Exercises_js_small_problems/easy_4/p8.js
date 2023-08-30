// Problem: take a number and break it up into digits, returning all the digits in an array.
//   Algorithm: convert the number into a string using (num).toString(10)
//   break the string into digits
//   return that array

const digitList = function(number) {
  let digitString = (number).toString(10);
  return digitString.split('').map(string => Number(string));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
