function toLowerCase(string) {
  let result = '';
  for (let char of string) {
   // if (/[A-Z]/.test(char)) {
   //   let ascii = char.charCodeAt(0);
   //   result += String.fromCharCode(ascii + 32);
    if (char >= 'A' && char <= 'Z') {
      let ascii = char.charCodeAt(0);
      result += String.fromCharCode(ascii + 32);
    } else {
      result += char;
    }
  }
  return result;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));
