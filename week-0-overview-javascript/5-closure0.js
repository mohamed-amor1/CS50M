function makeFunctionArray() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const arr = makeFunctionArray();

arr[0]();
