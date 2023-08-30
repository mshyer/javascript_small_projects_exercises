const concat = function(arr, value) {
  let result = [...arr];
  if (!Array.isArray(value)) {
    result[result.length - 1] = value;
    return result;
  }

  for (let item of value) {
    result.push(item);
  }
  return result;
}

console.log(concat([1, 2, 3], [5, 4, 6]));
console.log(concat([2, 3], ['two', 'three']));

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);

console.log(newArray);
obj.a = 'two';

console.log(newArray);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2)

console.log(arr3);
obj.b = 'three';
console.log(arr3);

arr3[5].b = 3;
console.log(obj);
