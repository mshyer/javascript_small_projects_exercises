//function upCaseTenPlus (str) {
//    result = str.length >= 10;
//    if (result) {
//        return str.toUpperCase()
//    }  else {
//        return str
//    }
//}
//

function upCaseTenPlus (str) {
    return str.length > 10 ? str.toUpperCase() : str;
}
console.log(upCaseTenPlus('haha'));
console.log(upCaseTenPlus('hhskjdhfkjsdhfkdshfsdhf'));

