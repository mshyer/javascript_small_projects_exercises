let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
     console.log(key);
  }
}

