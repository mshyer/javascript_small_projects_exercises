function copyProperties(obj1, obj2) {
  // loop through the properties of obj1 
  // add each property to obj 2
  // return the length of the keys array for obj1
  for (let key in obj1) {
    obj2[key] = obj1[key];
  }
  
  return Object.keys(obj1).length;
}

let sal = {};

let hal = {
  model: 9000,
  enabled: true,
};

console.log(copyProperties(hal, sal));
console.log(sal);
