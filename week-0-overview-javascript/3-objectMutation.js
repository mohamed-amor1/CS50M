// Create an object 'o' with properties 'a' and 'b'
const o = {
  a: "a",
  b: "b",
  obj: {
    key: "key",
  },
};

// Assign 'o' to 'o2', so both variables refer to the same object in memory
const o2 = Object.assign({}, o);

o2.obj.key = "new value";

console.log(o.obj.key); // The output will be 'new value'

// deep copy
function deepCopy(obj) {
  // check if vals are objects
  // if so, copy that object (deep copy)
  // else return the value
  const keys = Object.keys(obj);
  const newObject = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] === "object") {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}

const o3 = deepCopy(o);
o.obj.key = "new key";
console.log(o3.obj.key);
