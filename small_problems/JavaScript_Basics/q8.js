//function stringToSignedInteger(nStr) {
//    let sign = (nStr[0] === '-' ? -1 : 1);
//    nStr = nStr.replace(/[-+]/, '');
//    let scale = nStr.length
//    result = nStr.split('').reduce( function(agg, dig) {
//        scale -= 1;
//        return(agg + ((10**scale) * dig));
//    }, 0)
//    return (sign * result);
//}

function stringToInteger(nStr) {
    let scale = nStr.length
    result = nStr.split('').reduce( function(agg, dig) {
        scale -= 1;
        return(agg + ((10**scale) * dig));
    }, 0)
    return result;
}
function stringToSignedInteger(string) {
    switch(string[0]) {
        case '-': return -stringToInteger(string.slice(1));
        case '+': return stringToInteger(string.slice(1));
        default: return stringToInteger(string);
    }
}
console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));
