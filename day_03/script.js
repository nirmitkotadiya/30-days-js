// Day 3 : Control Structures

// Activity 1 : If-Else Statements

// Task 1
let num = 15;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("ZERO");
}

// Task 2
let age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible to vote");
}

// Activity 2 : Nested If-Else Statements

// Task 3
let num1 = 3;
let num2 = 4;
let num3 = 5;
if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1 max");
  }
} else if (num2 > num3) {
  console.log("num2 max");
} else {
  console.log("num3 max");
}

// Activity 3 : Switch Case

// Task 4
let choice = "5";
switch ((choice = "5")) {
  case "1":
    console.log("Sunday");
    break;
  case "2":
    console.log("Monday");
    break;
  case "3":
    console.log("Tuesday");
    break;
  case "4":
    console.log("Wednesday");
    break;
  case "5":
    console.log("Thursday");
    break;
  case "6":
    console.log("Friday");
    break;
  case "7":
    console.log("Saturday");
    break;

  default:
    console.log("Enter Valid Choice");
    break;
}

// Task 5
let grade = "D";
switch ((grade = "D")) {
  case "A":
    console.log("Grade A");
    break;
  case "B":
    console.log("Grade B");
    break;
  case "C":
    console.log("Grade C");
    break;
  case "D":
    console.log("Grade D");
    break;
  case "E":
    console.log("Grade E");
    break;
  case "F":
    console.log("Grade F");
    break;
  default:
    console.log("Enter Valid Choice");
    break;
}

// Activity 4 : Conditional (Ternary) Operator

// Task 6
let number = 5;
let isEvenorOdd = number % 2 == 0 ? "even" : "odd";
console.log(isEvenorOdd);

// Activity 5 : Combining Conditions

// Task 7
let year = 2004;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}
