// Variable Declarations
const thisIsAConst = 50; // Declared and initialized
// console.log(thisIsAConst); // Error: Cannot access 'thisIsAConst' before initialization
// thisIsAConst++; // Error: Assignment to constant variable

let thisIsALet = 51; // Declared and initialized
thisIsALet = 50; // Value changed

var thisIsAVar = 50; // Declared and initialized
thisIsAVar = 51; // Value changed
var thisIsAVar = "newvalue"; // Redeclaration with a new value

// console.log(thisIsAVar); // Output: "newvalue"

// Object Declaration and Modification
const constObj = {}; // Object declared
constObj.name = "John"; // Property added

// Function Declarations
thisIsHoisted(); // Function call: returns "this is a function declared at the bottom of a file"

function thisIsHoisted() {
  console.log("this is a function declared at the bottom of a file"); // Function definition
}

// Function Expressions
// thisIsNotHoisted(); // Error: Cannot access 'thisIsNotHoisted' before initialization
const thisIsNotHoisted = function () {
  console.log("should this be hoisted?"); // Function definition
};

// thisIsNotHoisted2(); // Error: Cannot access 'thisIsNotHoisted2' before initialization
let thisIsNotHoisted2 = function () {
  console.log("should this be hoisted?"); // Function definition
};

// thisIsNotHoisted3(); // TypeError: thisIsNotHoisted3 is not a function
var thisIsNotHoisted3 = function () {
  console.log("should this be hoisted?"); // Function definition
};
