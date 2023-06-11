// Define a class named MySet that extends the built-in Set class
// This class adds additional functionality to the Set class like logging on addition and creating new methods

class MySet extends Set {
  constructor(arr) {
    // Call the constructor of the parent Set class and pass the initial values
    super(arr);
    this.originalArray = arr; // Store the original array of values passed to the constructor
  }

  // Method to add a value to the set
  add(val) {
    super.add(val); // Call the add method of the parent Set class to add the value to the set
    console.log(`added ${val} to the set!`); // Log a message indicating that the value was added to the set
  }

  // Method to convert the set to an array
  toArray() {
    return Array.from(this); // Use the Array.from() method to convert the set to an array and return it
  }

  // Method to reset the set to its original values
  reset() {
    return new MySet(this.originalArray); // Create a new instance of MySet with the original array and return it
  }
}

// Create a new instance of the MySet class with initial values
const s = new MySet([1, 2, 3, 4, 5]);
s.add(6);
s.add(7);

console.log(s.toArray()); // Convert the set to an array and log it

const s2 = s.reset(); // Reset the set to its original values by creating a new instance

console.log(s2.toArray()); // Convert the reset set to an array and log it

// Set is a collection of unique values.
