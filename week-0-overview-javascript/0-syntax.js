// Define variables for first name and last name
const firstName = "Mohamed";
const lastName = "Amor";

// Define a variable with a numerical value
const val = 42;

// Define an array that contains a string, a number, and a function
const arr = [
  "string",
  42,
  function () {
    console.log("hi");
  },
];

// Call the function at index 2 of the array, which logs "hi" to the console
arr[2]();

// Iterate over the elements of the array and log each element to the console
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Log the values of the first name and last name variables to the console
console.log(firstName, lastName);


