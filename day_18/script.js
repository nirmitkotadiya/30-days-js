// Day 18 : Algorithms

// Activity 1 : Sorting Algorithms

// Task 1
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [5, 4, 3, 2, 1];
console.log(bubbleSort(arr));

// Task 2
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let arr2 = [5, 4, 3, 2, 1];
console.log(selectionSort(arr2));

// Task 3
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr3 = [5, 4, 3, 2, 1];
console.log(quickSort(arr3));

// Activity 2 : Searching Algorithms

// Task 4
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr4 = [5, 4, 3, 2, 1];
console.log(linearSearch(arr4, 3));

// Task 5
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let arr5 = [5, 4, 3, 2, 1];
console.log(binarySearch(arr5, 3));

// Activity 3 : String Algorithms

// Task 6
function countOccurence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
console.log(countOccurence("hello"));

// Task 7
function longestSubstring(str) {
  let obj = {};
  let max = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] >= start) {
      start = obj[str[i]] + 1;
    }
    obj[str[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
}
console.log(longestSubstring("abcabcbb"));

// Activity 4 : Array Algorithms

// Task 8
function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let arr8 = [1, 2, 3, 4, 5];
console.log(rotateArray(arr8, 3));

// Task 9
function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2);
  arr.sort((a, b) => a - b);
  return arr;
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

// Activity 5 : Dynamic Programming(Optional)

// Task 10
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
console.log(fibonacci(10));

// Task 11
function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          values[i - 1] + dp[i - 1][j - weights[i - 1]]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][capacity];
}
console.log(knapsack([1, 2, 3], [60, 100, 120], 5));
