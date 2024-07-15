// Day 2 : Operators

// Activity 1 : Arithmetic Operations

// Task 1
console.log("add = ", 2 + 3);

// Task 2
console.log("sub = ", 2 - 3);

// Task 3
console.log("mul = ", 2 * 3);

// Task 4
console.log("div = ", 3 / 2);

// Task 5
console.log("remainder = " + (3 % 5));

// Activity 2 : Assignment Operators

// Task 6
let num = 5;
num += 6;
console.log(num);

// Task 7
let number = 5;
number -= 6;
console.log(number);

// Activity 3 : Comparison Operators

// Task 8
console.log(5 > 6);
console.log(5 < 6);

// Task 9
console.log(5 >= 6);
console.log(6 <= 6);

// Task 10
console.log("5" == 5);
console.log("5" === 5);

// Activity 4 : Logical Operators

// Task 11
if (50 > 6 && 60 > 7) {
  console.log("Both Correct");
}

// Task 12
if (5 > 6 || 7 > 5) {
  console.log("Only One Correct");
}

// Task 13
let isPresent = true;
if (!false) {
  console.log("true");
}

// Activity 5 : Ternary Operator

// Task 14
let num1 = 5;
let num2 = 6;
let max = num1 > num2 ? num1 : num2;
console.log(max);
