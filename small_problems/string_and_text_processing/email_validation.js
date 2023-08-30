// Problem: validate an email address.
//   Must have a local part at least one letter a-z0-9, no other characters
//   Then 1 @ sign
//   Then domain part which is 2 parts a-z only separated by .
//
//   Input: string
//   Output: Boolean t/f
//   Algorithm: Can I do this with one regex? Let's see
//     ^[a-z0-9]+@{1}[a-z]+\.{1}[a-z]+
function isValidEmail(email) {
  let regx = /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i;
  return regx.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));
console.log(isValidEmail('Foo@mx.baz.com.ph'));
console.log(isValidEmail('foo@baz.com'));
console.log(isValidEmail('foo@baz.ph'));
console.log(isValidEmail('HELLO123@baz'));
console.log(isValidEmail('foo.bar@baz.to'));
console.log(isValidEmail('foo@baz.'));
console.log(isValidEmail('foo_bat@baz'));
console.log(isValidEmail('foo@bar.a12'));
console.log(isValidEmail('foo_bar@baz.com'));
console.log(isValidEmail('foo@bar.....com'));
