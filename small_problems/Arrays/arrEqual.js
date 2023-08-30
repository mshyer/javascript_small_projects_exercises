function arrEqual(a1, a2) {
    return a1.every((v,i)=> v === a2[i]);
}

let arr1 = [1, 2];
let arr2 = [1,2];
let arr3 = [4, 5];

console.log(arrEqual(arr1, arr2));
console.log(arrEqual(arr1, arr3));

function arrForEqual(a1, a2) {
    if (a1.length !== a2.length) return false;

    for (let i = 0; i < a1.length; ++i) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
}

console.log(arrForEqual(arr1, arr2));
console.log(arrForEqual(arr1, arr3));

