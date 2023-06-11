// The function `doSomething` takes a callback function as an argument and executes it immediately.
function doSomething(callback) {
  callback(1);
}

// The `console.log` function is passed as the callback to `doSomething`.
// When `doSomething` is called, it executes the callback function, which logs the value 1 to the console.
doSomething(console.log);

// The function `doSomethingAsync` simulates an asynchronous operation using `setTimeout`.
// It takes a callback function as an argument and executes it after a delay of 1000 milliseconds (1 second).
function doSomethingAsync(callback) {
  setTimeout(function () {
    callback(1);
  }, 1000);
}

// The `console.log` function is passed as the callback to `doSomethingAsync`.
// After a delay of 1 second, `doSomethingAsync` executes the callback function,
// which logs the value 1 to the console.
doSomethingAsync(console.log);
