// problem: given a starting number, return an array containing COUNT multiples of that number
//   input: COUNT, starting number
//   output: array of multiples
// algorithm:
//   init a counter to 0
//   use a for loop starting at 1 ending at the COUNT
//   add NUM * idx to the counter
//   add the counter to an output array
//   return the output array

function sequence(count, num) {
  let multiples = [];

  for (let idx = 1; idx <= count; idx += 1) {
    multiples.push(num * idx);
  }

  return multiples;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []{
