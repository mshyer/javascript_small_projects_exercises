function indexOf(str1, str2) {
  //let reg = new RegExp(str2);
  //return (str1.match(reg).index);
  
  //for each index of the array until the array length - substring length + 1
  //  check if a slice of the array of the appropriate length is equal to the substring.
  //  if it is, return the index.
//
//  for (let i = 0; i <= str1.length - str2.length; i++) {
//    if (str1.slice(i, i + str2.length) === str2) {
//      return i;
//    }
//  }
  return str1.indexOf(str2);
}

console.log(indexOf("A trying time", "trying"));
//console.log(indexOf('haja', 'ja'));
//console.log(indexOf('brat', 'cheese'));
console.log(indexOf('brat', 'ta'));

function lastIndexOf(str1, str2) {
  //create a result variable to store index
  //keep looping until loop index is greater than str1 length minus str2 length
  //Check if slice of str1 from loop index to loop index plus str2 length matches the substring
  //If it does, update the index result variable.
  //finally, return the index result variable.

//  let result;
//  for(let i = 0; i <= (str1.length - str2.length); i++) {
//    if (str1.slice(i, (i + str2.length)) === str2) {
//      result = i;
//    }
//  }
//  return result;
//}

  return str1.lastIndexOf(str2);
}
console.log(lastIndexOf('hahaha', 'ha'));
