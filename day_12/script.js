// Day 12 : Error Handling

// Activity 1 : Basic Error Handling with Try/Catch

// Task 1
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error);
}

// Task 2
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}

// Activity 2 : Finally Block

// Task 3
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("This will always run!");
}

// Activity 3 : Custom Error Objects

// Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
function throwCustomError() {
  throw new CustomError("Something went wrong!");
}
try {
  throwCustomError();
} catch (error) {
  console.log(error.message);
}

// Task 5
function validate(input) {
  if (input === "") {
    throw new CustomError("Input cannot be empty!");
  }
}
try {
  validate("");
} catch (error) {
  console.log(error.message);
}

// Activity 4 : Error Handling in Promises

// Task 6
const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});
promise.catch((error) => {
  console.log(error);
});

// Task 7
async function randomPromise() {
  try {
    const result = await new Promise((resolve, reject) => {
      const random = Math.random();
      if (random < 0.5) {
        resolve("Success!");
      } else {
        reject("Error!");
      }
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
randomPromise();

// Activity 5 : Graceful Error Handling in Fetch

// Task 8
fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Task 9
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
fetchData();
