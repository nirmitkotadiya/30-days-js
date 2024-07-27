// Day 15: Closures

// Activity 1 : Understanding Closures

// Task 1
function outerFunction() {
  let outerVariable = "I am the outer variable";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
let innerFunction = outerFunction();
innerFunction();

// Task 2
function counter() {
  let count = 0;
  function increment() {
    count++;
  }
  function getCurrentCount() {
    return count;
  }
  return {
    increment,
    getCurrentCount,
  };
}
let counter1 = counter();
counter1.increment();
counter1.increment();
console.log(counter1.getCurrentCount());
counter1.increment();
console.log(counter1.getCurrentCount());

// Activity 2 : Practical Closures

// Task 3
function generateUniqueId() {
  let id = 0;
  return function () {
    return id++;
  };
}
let uniqueId = generateUniqueId();
console.log(uniqueId());
uniqueId = generateUniqueId();
console.log(uniqueId());

// Task 4
function greetUser(userName) {
  return function () {
    console.log(`Hello ${userName}`);
  };
}
let greetUser1 = greetUser("John");
greetUser1();

// Activity 3 : Closures in Loops

// Task 5
let functions = [];
for (let i = 0; i < 5; i++) {
  functions.push(function () {
    console.log(i);
  });
}
functions.forEach(function (f) {
  f();
});

// Activity 4 : Module Pattern

// Task 6
function createItemCollection() {
  let items = [];
  return {
    addItem(item) {
      items.push(item);
    },
    removeItem(item) {
      items = items.filter((i) => i !== item);
    },
    listItems() {
      return items;
    },
  };
}
let itemCollection = createItemCollection();
itemCollection.addItem("item1");
itemCollection.addItem("item2");
itemCollection.addItem("item3");
console.log(itemCollection.listItems());
itemCollection.removeItem("item2");
console.log(itemCollection.listItems());

// Activity 5 : Memoization

// Task 7
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowFunction = (num) => {
  console.log("Computing...");
  return num * 2;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing... 10
console.log(memoizedFunction(5)); // 10 (cached result, no "Computing..." log)
console.log(memoizedFunction(10)); // Computing... 20
console.log(memoizedFunction(10)); // 20 (cached result, no "Computing..." log)

// Task 8
function memoize(fn) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}
function factorial1(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial1(n - 1);
  }
}
let memoizedFactorial1 = memoize(factorial1);
console.log(memoizedFactorial1(5));
