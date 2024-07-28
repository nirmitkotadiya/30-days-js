// Day 16 : Recursion

// Activity 1 : Basic Recursion

// Task 1
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Task 2
function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

// Activity 2 : Recursion with Arrays

// Task 3
function sum(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
}
console.log(sum([1, 2, 3, 4, 5]));

// Task 4
function max(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return Math.max(arr[0], max(arr.slice(1)));
}
console.log(max([1, 2, 3, 4, 5]));

// Activity 3 : String Manipulation with Recursion

// Task 5
function reverseString(str) {
  if (str.length == 0) {
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello"));

// Task 6
function isPalindrome(str) {
  if (str.length == 0) {
    return true;
  }
  x = reverseString(str) == str ? true : false;
  return x;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// Activity 4 : Recursive Search

// Task 7
function binarySeach(arr, key, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == key) {
    return mid;
  }
  if (arr[mid] > key) {
    return binarySeach(arr, key, start, mid - 1);
  }
  return binarySeach(arr, key, mid + 1, end);
}
console.log(binarySeach([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 0, 8));

// Task 8
function countOccurence(arr, target) {
  if (arr.length == 0) {
    return 0;
  }
  let count = arr[0] == target ? 1 : 0;
  return count + countOccurence(arr.slice(1), target);
}
console.log(countOccurence([1, 2, 3, 4, 5, 6, 7, 8, 9, 5], 5));

// Activity 5 : Tree Traversal(Optional)

// Task 9
function inOrderTraversal(node) {
  if (node == null) {
    return;
  }
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}
let node = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};
inOrderTraversal(node);

// Task 10
function maxDepth(node) {
  if (node == null) {
    return 0;
  }
  let leftDepth = maxDepth(node.left);
  let rightDepth = maxDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
}
console.log(maxDepth(node));
