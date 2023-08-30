const concat = function(arr1, arr2) {
  //duplicate arr1 to a NEW ARRAY
  //  for each element in the array, NEW array equals original. 
  //set i equal to 0
  //until i is equal to the length of arr2 - 1:
  //  arr1[length + i] = arr2[i]
  //  return the new array.
  let join_array = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    join_array[idx] = arr1[idx];
  }
  
  for (let idx = 0; idx < arr2.length; idx += 1) {
    join_array[arr1.length + idx] = arr2[idx];
  }
  

  return join_array;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
