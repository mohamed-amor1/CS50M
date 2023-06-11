function makeFunctionArray() {
  const arr = [];

  // Using var instead of let in the for loop
  // This creates a function scope for the variable i
  // With var, i is not limited to the block inside the loop
  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const functionArr = makeFunctionArray();

functionArr[0](); // Outputs: 5
functionArr[1](); // Outputs: 5
functionArr[2](); // Outputs: 5
functionArr[3](); // Outputs: 5
functionArr[4](); // Outputs: 5
