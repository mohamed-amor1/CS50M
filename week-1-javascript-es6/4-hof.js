// Define a function called map that takes an array (arr) and a function (fn) as inputs
function map(arr, fn) {
  // Create a new empty array to store the modified values
  const newArr = [];

  // Loop through each element (val) in the input array (arr)
  arr.forEach(function (val) {
    // Apply the input function (fn) to the current element (val) and push the result into the new array (newArr)
    newArr.push(fn(val));
  });

  // Return the new array with the modified values
  return newArr;
}

// Define a function called addOne that takes a number (num) as input and returns the number plus one
function addOne(num) {
  return num + 1;
}

// Create an array called x with values [0, 1, 2, 3]
const x = [0, 1, 2, 3];

// Call the map function with the array x and the addOne function as arguments
// The map function will apply the addOne function to each element in the array x and return a new array with the modified values
console.log(map(x, addOne));
