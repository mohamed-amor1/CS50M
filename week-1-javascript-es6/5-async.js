// Define a function named printOne that logs the message "one" to the console
function printOne() {
  console.log("one");
}

// Define a function named printTwo that logs the message "two" to the console
function printTwo() {
  console.log("two");
}

// Define a function named printThree that logs the message "three" to the console
function printThree() {
  console.log("three");
}

// Schedule the execution of the printOne function to occur after a delay of 1000 milliseconds (1 second)
setTimeout(printOne, 1000);

// Schedule the execution of the printTwo function to occur after a delay of 0 milliseconds (as soon as possible)
setTimeout(printTwo, 0);

// Call the printThree function immediately
printThree();
