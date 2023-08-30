function substr(string, start, length) {
  start = (Math.sign(start) !== -1 ? start : (string.length + start));
  length = ((Math.sign(length) !== 1) ? 0 : length);
  let result = '';
  for (let i = start; i < string.length && i < (start + length); i++) {
   result += string[i];
  }
  return result;
}

let string = 'hello world';

////console.log(substr('abcdefg', 1, 3));
//console.log(substr(string, 2, 4));
//console.log(substr(string, -3, 2));
//console.log(substr(string, 8, 20));
//console.log(substr(string, 0, -20));
//console.log(substr(string, 0, 0));
//
function invalidToZero(num) {
  sign = Math.sign(num);
  if (!(sign === 1 || sign === 0)) {
    return 0;
  } else {
    return num;
  }
}

function substring(string, start, end) {
  if (Object.is(end, undefined)) end = string.length;
  start = invalidToZero(start);
  end = invalidToZero(end);
  if (start > end) {
    [start, end] = [end, start]
  }
  //console.log(start);
  //console.log(end);
  let result = '';
  for (let i = start; i < end; i++) {
    if (i >= string.length) {
      break;
    }
    result += string[i];
  }
  return result;
}

//console.log(substring('burger', 7, NaN));

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
