function shift(array) {
  let first = array[0];
  //let last = array[array.length - 1];
  if (array.length === 0) {
    return undefined;
  } //else if (array.length === 1) {
    //array.length -= 1;
    //return last;
  //}
  //array[0] = last;
  for (let idx = 0; idx < array.length - 1; idx += 1) {
    [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
  }

  array.length -= 1;
  return first;
}

let arr = [1, 2, 3, 4, 5];
console.log(shift(arr));
console.log(arr);

let count = [1, 2];
console.log(shift(count));
console.log(count);

count = [1];
console.log(shift(count));
console.log(count);

console.log(shift(count));
