// problem: given a string with multiple names, return a new string in format "lastName, otherNames..."
// input: string of names
// output: string
// algorithm: using a capture group
//   capture EVERYTHING EXCEPT the last name
//     regex: //(^.*)( \w+$)
//   capture the LAST NAME
//   using replace method, return a new string '$2, $1'

function swapName(nameString) {
  const REGEX = /(^.*)( \S+$)/g
  let swapped = nameString.replace(REGEX, '$2, $1');
  return swapped;
}

console.log(swapName('Joe Roberts the Greates Man in the Universe'));
