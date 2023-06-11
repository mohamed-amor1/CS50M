function addOne(num) {
  return num + 1;
}

function getNum() {
  const userInput = prompt("Please enter a number:");
  const number = parseInt(userInput); // Convert the user's input to a number
  return addOne(number);
}

function c() {
  console.log(getNum() + getNum());
}

c();
