// Day 13 : Modules

// Activity 1 : Creating and Exporting Modules

// Task 1
const add = (a, b) => {
  return a + b;
};

export { add };

// Task 2
const person = {
  name: "John",
  age: 25,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

export { person };

// Activity 2 : Named and Default Exports

// Task 3
const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

export { subtract, multiply, divide };

// Task 4
const greet = (name) => {
  return `Hello, ${name}!`;
};

export default greet;

// Activity 3 : Importing Entire Modules

// Task 5
const PI = 3.14159;
const E = 2.71828;

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

export { PI, E, square, cube };

// Activity 4 : Using Third-Party Modules

// Task 6
import _ from "lodash";
console.log(_.sum([1, 2, 3]));

// Task 7
import axios from "axios";
axios.get("https://api.github.com/users/day13").then((response) => {
  console.log(response.data);
});

// Activity 5 : Module Bundling (Optional)

// Task 8
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
