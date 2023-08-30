const isUrl = function(string) {
  let regex = /^https?:\/\/[a-zA-Z]*.[a-zA-Z]{2,5}$/;
  console.log(regex.test(string));
  return 'nice';
}
//
//isUrl('http://launchschool.com') 
//isUrl('https://example.com')       
//isUrl('https://example.com hello') 
//isUrl('   https://example.com')
//isUrl('https://hha.meaaaa');

const fields = function(string) {
  //const regex = /[a-zA-Z0-9]+\W+[a-zA-Z]*/g;
  //console.log(string.match(regex));
  return console.log(string.split(/[ \t,]+/));

}
//fields("Pete,201,Student");
//// -> ['Pete', '201', 'Student']
//
//fields("Pete \t 201    ,  TA");
//// -> ['Pete', '201', 'TA']
//
//fields("Pete \t 201");
//// -> ['Pete', '201']
//
//fields("Pete \n 201");
//// -> ['Pete', '\n', '201']

function mysteryMath(string) {
  let regex = /[+\-/\*%]/;
  console.log(string.replace(regex, '?'));
}
mysteryMath('4 + 3 - 5 = 2')
//# -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1')
//# -> '(4 ? 3 + 2) / 7 - 1 = 1'
//
function mysteriousMath(string) {
  let regex = /[+\-\*\\%]/g;
  return string.replace(regex, '?');
}

console.log(mysteriousMath('4 + 3 - 5 = 2'));           // -> '4 ? 3 ? 5 = 2'
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

function danish(string) {
  let regex = /\b(apple|blueberry|cherry|danish)\b/;
  console.log(string.replace(regex, 'danish'));
}
//danish('An apple a day keeps the doctor away');
//// -> 'An danish a day keeps the doctor away'
//
//danish('My favorite is blueberry pie');
//// -> 'My favorite is danish pie'
//
//danish('The cherry of my eye');
//// -> 'The danish of my eye'
//
//danish('apple. cherry. blueberry.');
//// -> 'danish. cherry. blueberry.'
//
//danish('I love pineapple');
// -> 'I love pineapple'
function formatDate(string) {
  let regex = /(\d{4})-(\d{2})-(\d{2})/;
  return string.replace(regex, `$3/$2/$1`);
}

//console.log(formatDate('2016-06-17')); // -> '17.06.2016'
//console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)
function formatDateMarkTwo(string) {
  let regex = /(\d{4})([-\/])(\d{2})\2(\d{2})/;
  return string.replace(regex, `$4.$3.$1`);
}

console.log(formatDateMarkTwo('2016-06-17')); // -> '17.06.2016'
console.log(formatDateMarkTwo('2017/05/03')); // -> '03.05.2017'
console.log(formatDateMarkTwo('2015/01-31')); // -> '2015/01-31' (no change)













