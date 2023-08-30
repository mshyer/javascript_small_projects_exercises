function join(arr, str) {
  //loop through the array and get the value of each element as a string plus the input string
  //if the index is less than the last index, add the above to the output string
  //  otherwise add the original array element coerced to string to the output string
  let result = '';

  for (let idx = 0; idx < arr.length; idx++) {
    let element_to_str = String(arr[idx]);
    if (idx < (arr.length - 1)) {
      element_to_str += str;
    }
    result += element_to_str;
  }
  
  return result;
}


console.log(join(['bri', 'tru', 'wha'], 'ck '));
console.log(join([1, 2, 3], ' and '));
