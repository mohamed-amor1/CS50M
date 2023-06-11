// Set should maintain a list of unique values and should support add, delete, and inclusion
// It should also have the ability to return the size of the set

// Defining a class named Set
class Set {
  constructor(arr) {
    this.arr = arr; // Initializing the set with an array of values
  }

  // Method to add a value to the set
  add(val) {
    if (!this.has(val)) this.arr.push(val); // Only add the value if it doesn't already exist in the set
  }

  // Method to delete a value from the set
  delete(val) {
    this.arr = this.arr.filter((x) => x !== val); // Remove all occurrences of the specified value from the set
  }

  // Method to check if a value exists in the set
  has(val) {
    return this.arr.includes(val); // Returns true if the value is found in the set, false otherwise
  }

  // Getter method to get the size (number of elements) of the set
  get size() {
    return this.arr.length; // Returns the length of the array, which represents the size of the set
  }
}

// Creating a new instance of the Set class with initial values
const s = new Set([1, 2, 3, 4, 5]);

// Trying to add the same value multiple times, but it should only be added once (since it should maintain unique values)
s.add(1);
s.add(1);
s.add(1);
console.log("s should have 5 members and actually has:", s.size);

console.log("s should contain 5:", s.has(5));

s.add(6);
console.log("s should contain 6:", !s.has(6));
console.log("s should have 6 members and actually has:", s.size);

s.delete(6);
console.log("s should no longer contain 6:", !s.has(6));
console.log("s should have 5 members and actually has:", s.size);
