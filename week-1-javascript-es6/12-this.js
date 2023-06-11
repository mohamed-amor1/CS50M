// Define an object "person" with a "name" property and a "greet" method
const person = {
  name: "Max",
  greet: function () {
    // Using "this" to access the "name" property of the object
    console.log("Hello, " + this.name + "!");
  },
};

// Calling the "greet" method of the "person" object
person.greet(); // Output: Hello, Max!

// Define another object "friend" with a "name" property
const friend = {
  name: "Manu",
};

// Assigning the "greet" method of the "person" object to the "friend" object
friend.greet = person.greet;

// Calling the "greet" method of the "friend" object
// The "this" keyword in "friend.greet" refers to the "friend" object
friend.greet(); // Output: Hello, Manu!

// Using the "bind" method to create a new function with a bound object
const greet = person.greet.bind({ name: "this is a bound object" });
greet(); // Output: Hello, this is a bound object!

// Using the "call" method to invoke the "greet" method with a specific object
person.greet.call({ name: "this is a bound object" }); // Output: Hello, this is a bound object!

// Using the "apply" method to invoke the "greet" method with a specific object
person.greet.apply({ name: "this is a bound object" }); // Output: Hello, this is a bound object!

// Creating a new object "newPerson" with an arrow function for "greet"
// Arrow functions do not bind their own "this" but inherit it from the surrounding scope (lexical scope)
const newPerson = {
  name: "jordan",
  greet: () => {
    console.log("hi, " + this.name); // "this" will not refer to the "newPerson" object
  },
};

newPerson.greet(); // Output: hi, undefined

greet(); // Output: Hello, this is a bound object!
