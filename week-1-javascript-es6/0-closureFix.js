function makeFunctionArray() {
  const arr = [];

  // Using let instead of var in the for loop
  // This ensures that the variable i is scoped to the block inside the loop
  // With var, i would be scoped to the entire function
  for (let i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const functionArr = makeFunctionArray();

functionArr[0](); // Outputs: 0
functionArr[1](); // Outputs: 1
functionArr[2](); // Outputs: 2
functionArr[3](); // Outputs: 3
functionArr[4](); // Outputs: 4
