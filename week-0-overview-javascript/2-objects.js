const o = new Object();
o.firstName = "Mohamed";
o.lastName = "Amor";
o.isTeaching = false;
o.greet = function () {
  console.log("hi!");
};

const o2 = {};
o.firstName = "Jordan";
o["lastName"] = "Smith";
const key = "isTeaching";
o[key] = false;
o["greet"] = function () {
  console.log("hi");
};

const o3 = {
  1: "test",
  firstName: "Jordan",
  lastName: "Hayashi",
  isTeaching: true,
  greet: function () {
    console.log("Hi!");
  },
  address: {
    street: "Main St",
    number: 123,
  },
};
