// Problem: reverse a string
// Input: string
// Output: string
// alg: cmon now son

const reverse = function(string) {
  return [...string].reverse().join('');
};

console.log(reverse('hello'));
