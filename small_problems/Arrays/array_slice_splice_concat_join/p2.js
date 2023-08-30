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



const unshift = function(array, value) {
  for (let idx = array.length; idx > 0; idx--) {
    array[idx] = array[idx - 1];
  }
  array[0] = value;
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

//console.log(slice([1, 2, 3, 4, 5], 0, 2));
//console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));

const splice = function(array, start, slice_length) {
  //in order to splice the array correctly, you must return a NEW array with the middle sliced elements
  //The original array must be MUTATED minus the slice
  //new length = length - segment length
  //  pop all of the values to the start of the original array
  //  push to a NEW array the sliced array values that should be in the original array
  //    Determine this by: i (set to sliced array length) > slice_length
  //  push to the ORIGINAL array the popped values from the new array
  //  return the SHIFTED array
  let end_values = [];
  let slice_array = [];

  for (let i = array.length - 1; i >= start; i--) {
    unshift(slice_array, pop(array));
  }

  for (let i = slice_array.length; i > slice_length; i--) {
    push(end_values, pop(slice_array));
  }
  
  for (let idx = end_values.length - 1; idx >= 0; idx--) {
    push(array, pop(end_values));
  }

  return slice_array;
}


let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
console.log(count);
