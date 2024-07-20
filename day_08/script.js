// Day 8 : ES6 + Features

// Activity 1 : Template Literals

// Task 1
let name = "Nirmit";
let age = 21;
let string = "student";
console.log(`${name} is ${age} years old and is a ${string}`);

// Task 2
let multilineString = `This is a multiline string using template literals. 
This is the second line of the multiline string.
This is the third line of the multiline string.`;
console.log(`${multilineString}`);

// Activity 2 : Destructuring

// Task 3
let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(first);
console.log(second);

// Task 4
let obj = {
  title: "JavaScript",
  author: "Nirmit",
};
let { title, author } = obj;
console.log(title);
console.log(author);

// Activity 3 : Spread and Rest Operator

// Task 5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Task 6
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4 : Default Parameters

// Task 7
function product(a, b = 1) {
  return a * b;
}
console.log(product(2, 3));
console.log(product(2));

// Activity 5 : Enhanced Object Literals

// Task 8
let obj1 = {
  name: "Nirmit",
  age: 21,
  greet() {
    console.log("Hello, I am " + this.name);
  },
};
obj1.greet();

// Task 9
let key = "name";
let obj2 = {
  [key]: "Nirmit",
};
console.log(obj2);
