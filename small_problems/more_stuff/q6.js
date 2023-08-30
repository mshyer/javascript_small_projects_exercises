let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];
//
//function allMatches(stringArr, rgx) {
//    let res = [];
//    for (let str of stringArr) {
//        if (rgx.test(str)) {
//            res.push(str);
//        }
//    }
//    return res;
//}
function allMatches(stringArr, rgx) {
    return stringArr.filter(str => rgx.test(str));
}
console.log(allMatches(words, /lab/));


