// Create right triangles of n lengt
// Data structure: strings
// Input: number
// Output: log to console strings representing triangle
// Algorithm:
//   1. Num starts init to 1
//   2. While num stars <= num
//     a. output (' '.repeat(num - numstars) plus stars

function triangle(num) {
  let numStars = 1;
  while (numStars <= num) {
    console.log(' '.repeat(num - numStars) + '*'.repeat(numStars));
    numStars += 1;
  }
}

triangle(5);

triangle(9);
