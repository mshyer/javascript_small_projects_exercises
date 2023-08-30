// Problem: double each character in a string
// Input: string
// Output: new String with every char doubled
//   Notes: empty strings are left along
// Data structure: string iteration
// Algorithm: iterate through each character in the string using for...of
//   add "chrchr" to the output string
// Return the output string
function repeater(string) {
  let repeatedString = '';
  for (let chr of string) {
    repeatedString += `${chr}${chr}`;
  }
  
  return repeatedString;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));
