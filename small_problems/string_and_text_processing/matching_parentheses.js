// Problem: check if every parentheses opens with left and closes with right
// Input: string
// Output: t/f
// algorithm:
//   initialize a counter to 0
//   iterate through array of chars
//     break return false if counter < 0
//   if the character is ( add one to counter ) subtract one
// if the counter is not zero, return false

const isBalanced = function(string) {
  let counter = 0;
  let chars = [...string];
  chars.forEach(function(char) {
  //for (let idx = 0; idx < string.length; idx += 1) {
    //if (counter < 0) {
    //  break;
    //
    if (counter < 0) {
      counter = -Infinity;
      return undefined;
    }
    if (char === '(') {
      counter += 1;
    } else if (char === ')') {
      counter -= 1;
    }
  });

  return counter === 0;
};


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
