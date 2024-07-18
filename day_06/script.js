// Day 6 : Arrays

// Activity 1 : Array Creation and Access

// Task 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Activity 2 : Array Methods (Basic)

// Task 3
arr.push(6); // adds the element at the end
console.log(arr);

// Task 4
arr.pop(); // removes the last element
console.log(arr);

// Task 5
arr.shift(); // removes the first element
console.log(arr);

// Task 6
arr.unshift(1); // adds the element at the beginning
console.log(arr);

// Activity 3 : Array Methods (Intermediate)

// Task 7
let arr2 = [7, 8, 9];
let newArr = arr2.map((e) => {
  return e * 2;
});
console.log(newArr);

// Task 8
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr3.filter((e) => e % 2 == 0);
console.log(evenArr);

// Task 9
let arr4 = [1, 2, 3, 4, 5];
let sum = arr4.reduce((acc, e) => {
  return acc + e;
});
console.log(sum);

// Activity 4 : Array Iteration

// Task 10
let arr5 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr5.length; i++) {
  console.log(" " + arr5[i]);
}

// Task 11
arr5.forEach((e) => {
  console.log("  " + e);
});

// Activity 5 : Multi-dimensional Arrays

// Task 12
let arr6 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arr6);

// Task 13
console.log(arr6[0][0]);
console.log(arr6[1][2]);
