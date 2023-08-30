function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  //const numString = String(num);
  //return (numString === numString.split('').reverse().join(''));
  console.log(String(num));
  num = parseInt(String(num), 10);
  return (isPalindrome(String(num)));
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(00123321));
