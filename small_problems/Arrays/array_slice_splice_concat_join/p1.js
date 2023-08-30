const pop = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  
  let last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

function shift(arr) {
  let first = arr[0];
  if (arr.length === 0) {
    return undefined;
  } 

  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
  }

  arr.length -= 1;
  return first;
}

const push = function(array, value) {
  array[array.length] = value;
  return array.length;
} 

function slice(array, start, finish) {
  //create a duplicate array using push
  //using for loop, pop until idx 0 equal to length  equals the length - last
  //using shift, loop idx 0 until equal to start.
  let array_dup = [];
  for (let idx = 0; idx < array.length; idx++) {
    push(array_dup, array[idx]);
  }

  for (let idx = 0; idx < array.length - finish; idx++) {
    pop(array_dup);
  }

  for (let idx = 0; idx < start; idx += 1) {
    shift(array_dup);
  }

  return array_dup;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));
