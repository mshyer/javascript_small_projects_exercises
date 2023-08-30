let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0, 'haha'];

function isEven(num) {
   if (typeof num !== 'number') return false;
   return ((num & 1) === 0 ? true : false);
}

function logEven(arr) {
    arr.forEach(element => {
        if (isEven(element)) {
            console.log(element);
        }
    });
}

//logEven(myArray);

myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

//myArray.forEach(function(arr) {
//    logEven(arr);
//});

myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let stringArr = [];
//for (let i = 0; i < myArray.length; ++i) {
//    if (isEven(myArray[i])) {
//        stringArr.push('even');
//    } else {
//        stringArr.push('odd');
//    }
//}
//console.log(stringArr);

stringArr = myArray.map(function(element) {
    if (isEven(element)) {
        return 'even';
    } else {
        return 'odd';
    }
});
console.log(stringArr);
