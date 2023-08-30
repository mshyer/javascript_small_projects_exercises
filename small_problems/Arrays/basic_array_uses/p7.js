const lastNOf = function(arr, count) {
  let idx = arr.length - count;

  if (idx < 0) {
    idx = 0;
  }

  return arr.slice(idx);
}

//passing a count greater than length of array will generate a slice counting backwards from the last array index.
let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 7));
