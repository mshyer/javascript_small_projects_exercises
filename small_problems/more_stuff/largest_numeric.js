let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

//function findMaxNum(arr) {
//    let max = -Infinity;
//    for (let num of arr) {
//        if (num > max) {
//            max = num;
//        }
//    }
//    return max;
//}

function findMaxNum(arr) {
    return Math.max(...arr);
}
console.log(findMaxNum(list1));
console.log(findMaxNum(list2));
console.log(findMaxNum(list3));

