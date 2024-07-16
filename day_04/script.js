// Day 4 : Loops

// Activity 1 : For Loop

// Task 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num + " * " + i + " = " + 5 * i);
}

// Activity 2 : While Loop

// Task 3
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("sum = ", sum);

// Task 4
let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}

// Activity 3 : Do...While Loop

// Task 5
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// Task 6
let number = 6;
let initial = 1;
let fact = 1;
do {
  fact = fact * initial;
  initial++;
} while (initial <= number);
console.log("fact = " + fact);

// Activity 4 : Nested Loops

// Task 7
let star = "* ";
for (let outer = 1; outer <= 5; outer++) {
  console.log(star.repeat(outer));
}

// Activity 5 : Loop Control Statements

// Task 8
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// Task 9
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
