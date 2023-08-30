function areArraysEqual2(array1, array2) {
  // you could first sort the array and then compare the arrays by index
  if (array1.length !== array2.length) {
    return false;
  }

  let firstCopy = [...array1];
  let secondCopy = [...array2];
  firstCopy.sort();
  secondCopy.sort();
  
  for (let idx = 0; idx < firstCopy.length; idx++) {
    if (firstCopy[idx] !== secondCopy[idx]) {
      return false;
    }
  }
  
  return true;
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let array2Copy = array2.slice();
  for (let i = 0; i < array1.length; i += 1) {
    let index = array2Copy.indexOf(array1[i]);
    if (index >= 0) {
      array2Copy.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}
