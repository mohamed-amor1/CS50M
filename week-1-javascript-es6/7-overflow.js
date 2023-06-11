// StackOverflowError: Maximum call stack size exceeded

function recurse() {
  console.log("recursion!");
  return recurse();
}

recurse();
