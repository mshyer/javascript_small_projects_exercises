function slice(array, begin, end) {
  //initialize an empty array
  // iterate through the input array from start to finish
  // add each item to the empty array (push)
  let output = [];
  for (let idx = begin; idx < end; idx += 1) {
    output.push(array[idx]);
  }

  return output;
}

//console.log(slice([1, 2, 3, 4, 5], 1, 3));

function splice(array, start, deleteCount, ...args) {
  // initialize a new array
  // pop out all the elements from array to start positiomn and shift to the new array 
  // calculate the end position
  //   (original array length - (start + 1 + delete count)
  //   if end position is greater than length, set to length
  // pop out the last items from the NEW array until the end position to another new array.
  //
  // THEN: if there are additional args:
  //   iterate through the arguments and push them to the original array
  // THEN
  //   iterate through the new new array and pop all the values out, pushing them to the original array
  // RETURN the new array (with the deleted elements) OR empty array.
  //
  let deleted_elements = [];
  let original_length = array.length;

  for (let idx = array.length - 1; idx >= start; idx--) {
    deleted_elements.unshift(array.pop());
  }
  let end_position = Math.min(deleteCount, deleted_elements.length);
  let placeholder = [];

  for (let idx = deleted_elements.length - 1; idx > end_position; idx--) {
    placeholder.push(deleted_elements.pop());
  }

  if (args) {
    args.forEach(arg => array.push(arg));
  }

  for (let idx = 0; idx < placeholder.length; idx += 1) {
    array.push(placeholder.pop());
  }

  return deleted_elements;
}

let test = [1, 2, 3, 4, 5];
console.log(splice(test, 1, 2));
console.log(test);

test = [1, 2, 3, 4, 5];
console.log(splice(test, 1, 2, 'a', 'b', 'c', 'd', 'e'));
console.log(test);
