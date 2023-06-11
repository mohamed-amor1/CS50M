const sayHello = (function () {
  // Variables and functions declared inside the IIFE are not accessible outside
  const message = "Hello!";

  // The inner function that will be returned and assigned to `sayHello`
  function sayHello() {
    console.log(message);
  }

  // The inner function is returned from the IIFE and assigned to the `sayHello` variable
  return sayHello;
})();

const counter = (function () {
  let count = 0;

  return {
    inc: function () {
      count = count + 1;
    },
    get: function () {
      console.log(count);
    },
  };
})();

counter.get();
counter.inc();
counter.get();

sayHello(); // Hello!
