// Day 5 : Functions

// Activity 1 : Function Declaration

// Task 1
function evenOrOdd(n) {
  if (n % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd(2);
evenOrOdd(3);

// Task 2
function squareOfNumber(n) {
  return n * n;
}
console.log(squareOfNumber(2));
console.log(squareOfNumber(3));

// Activity 2 : Function Expression

// Task 3
function maxNumber(n1, n2) {
  return n1 > n2 ? n1 : n2;
}
console.log(maxNumber(2, 3));
console.log(maxNumber(-3, 2));

// Task 4
function concatStr(s1, s2) {
  return s1 + s2;
}
console.log(concatStr("Nirmit", " Kotadiya"));

// Activity 3 : Arrow Functions

// Task 5
const sumNum = (n1, n2) => {
  return n1 + n2;
};
console.log(sumNum(2, 3));

// Task 6
const containsChar = (str, char) => {
  return str.includes(char);
};
console.log(containsChar("Nirmit", "N"));
console.log(containsChar("Nirmit", "o"));

// Activity 4 : Function Parameters and Default Values

// Task 7
const multiple = (n1, n2 = 10) => {
  return n1 * n2;
};
console.log(multiple(2));

// Task 8
const greet = (name, age) => {
  return `Hello ${name}, you are ${age} years old.`;
};
console.log(greet("Nirmit", 21));

// Activity 5 : Higher-Order Functions

// Task 9
const repeat = (func, n) => {
  for (let i = 0; i < n; i++) {
    func();
  }
};
console.log(repeat(() => console.log("Hello"), 3));

// Task 10
const compose = (func1, func2, value) => {
  return func2(func1(value));
};
console.log(
  compose(
    (x) => x + 2,
    (x) => x * 2,
    3
  )
);
