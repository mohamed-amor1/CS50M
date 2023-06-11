// Create an array x with values [0, 1, 2, 3]
const x = [0, 1, 2, 3];

// Define a function addOne that takes a number as input and returns the number plus one
function addOne(number) {
  return number + 1;
}

// Output the original array x
console.log("Old array:", x);

// Use the map function to create a new array by applying the addOne function to each element of the array x
const mappedArray = x.map(addOne);

// Output the new array with the modified values
console.log("New array:", mappedArray);

// Define a function isGreaterThanOne that takes a number as input and returns a boolean indicating if it's greater than one
function isGreaterThanOne(num) {
  return num > 1;
}

// Output the result of isGreaterThanOne for the input 0
console.log("Is 0 greater than 1?", isGreaterThanOne(0));

// Use the filter function to create a new array with elements from x that satisfy the isGreaterThanOne condition
const filteredArray = x.filter(isGreaterThanOne);

// Output the new array with the filtered values
console.log("Filtered array:", filteredArray);

// Define a function add that takes two numbers as input and returns their sum
function add(x, y) {
  return x + y;
}

// Output the result of adding 1 and 2 using the add function
console.log("add(1, 2) =", add(1, 2));

// Use the reduce function to compute the sum of all elements in the array x using the add function
const sum = x.reduce(add);

// Output the result of reducing the array x using the add function
console.log("x.reduce(add) =", sum);
