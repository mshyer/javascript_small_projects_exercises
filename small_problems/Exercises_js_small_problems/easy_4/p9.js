// Problem: given an array, count how many times each element occurs in the array
//   Then, for each element, log the element alongside the number of occurances
// Algorithm:
//   Store each array value as a key in an object
//   If a key is repeated, increment its value by 1
//   Once the object is made, iterate through the keys of the object using for...in
//     log the key plus the value (obj[key])

function countOccurrences(items) {
  let itemCounts = {};
  for (let key of items) {
    itemCounts[key] = itemCounts[key] ? itemCounts[key] + 1 : 1;
  }
  
  for (let key in itemCounts) {
    let str = `${key} => ${itemCounts[key]}`;
    console.log(str);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

ountOccurrences(vehicles);
