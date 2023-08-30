// Problem: Find the INDEX of the first fib number that has length N
//   NOTE: first index is 1 NOT 0
//     I could start my fib sequence with 0 instead, right?
//   init a counter to 1
//   use a while loop
//     let prev = 0
//     let current = 1
//     let next = prev + current
//     prev = current 
//     current = next
//   every time you find a fib number,
//     1. increment counter by 1
//     2. check if its length is the same as N
//     3. if it is, return the counter

function findFibonacciIndexByLength(bigN) {
  let index = 1n;
  let prev = 0n;
  let current = 1n;
  let next;

  while (String(current).length < Number(bigN)) {
    next = prev + current;
    prev = current;
    current = next;
    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
