const uniqueElements = function(arr) {
  // iterate through the input array.
  // add each item to a new array if it is not already in the array
  //   use array find method. returns undefned if not found.
  let uniqArr = [];
  for (let item of arr) {
    //if (!(uniqArr.find(element => element === item))) {
    //  uniqArr.push(item);
    //}
    if (uniqArr.indexOf(item) === -1) {
      uniqArr.push(item);
    }
  }
  return uniqArr;
}

let someArr = [1, 2, 4, 3, 4, 1, 5, 4];

console.log(uniqueElements(someArr));
