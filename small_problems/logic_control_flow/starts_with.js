//function startsWith(string, searchString) {
//  let match = string.match(new RegExp(searchString));
//  if (match) {
//    return (match.index == 0);
//  }
//  return false;
//}

function startsWith(string, searchString) {
  const LENGTH = searchString.length;
  if (LENGTH === 0) return true;
  for (let i = 0; i < LENGTH; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }
  return true;
}

console.log(startsWith('haha', ''));
console.log(startsWith('We put comprehension', 'put'));
console.log(startsWith('We put comprehension', 'We'));
let str = 'We put comprehension and mastery above all else';
let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));
console.log(startsWith(longerString, str));

