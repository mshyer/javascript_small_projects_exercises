function isNegZero(num) {
    return ((num === 0) && ((1 / num) === -Infinity));
}
//    if (typeof num !== 'number') return false;
//    if ((10 / num) === -Infinity) {
//        return true
//    } else {
//        return false
//    }
//}

console.log(isNegZero(4));
console.log(isNegZero(0));
console.log(isNegZero(-0));
console.log(isNegZero('jah'));
