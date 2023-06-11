function makeFunctionArray() {
  const arr = [];

  // Use var instead of let for variable i
  for (var i = 0; i < 5; i++) {
    arr.push(
      // Immediately Invoked Function Expression (IIFE) to capture the current value of i
      (function (x) {
        // Return a new function that logs the captured value of i
        return function () {
          console.log(x);
        };
      })(i) // Pass the current value of i to the IIFE
    );
  }
  return arr;
}

const functionArr = makeFunctionArray();

// Invoke the first function in functionArr, which logs the value of i at the time of creation
functionArr[0]();
