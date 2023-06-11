var readlineSync = require("readline-sync");

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
console.log("Hi, " + userName + "!");

// Handle the secret text (e.g. password).
var favFood = readlineSync.question("What is your favorite food? ", {
  hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
});
console.log("Oh, " + userName + " loves " + favFood + "!");

// ask for age
var userAge = readlineSync.question("How old are you? ");
console.log("Wow, " + userName + " is " + userAge + " years old!");
var futureAge = parseInt(userAge) + 1;
console.log("Next year, you'll be", futureAge, "years old");
