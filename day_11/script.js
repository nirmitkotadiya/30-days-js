// Day 11 : Promises and Async / Await

// Activity 1 : Understanding Promises

// Task 1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("msg");
  }, 2000);
});
console.log(promise);

// Task 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error");
  }, 2000);
});
promise2.catch((err) => {
  console.log(err);
});

// Activity 2 : Chaining Promises

// Task 3
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("msg1");
  }, 2000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("msg2");
  }, 2000);
});
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("msg3");
  }, 2000);
});

promise3.then((msg) => {
  console.log(msg);
});
promise4.then((msg) => {
  console.log(msg);
});
promise5.then((msg) => {
  console.log(msg);
});

//Activity 3 : Using Async/ Await

// Task 4
async function asyncTask() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("msg");
    }, 2000);
  });
  const result = await promise;
  console.log(result);
}
asyncTask();

// Task 5
async function asyncTask5() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 2000);
  });
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
asyncTask5();

// Activity 4 : Fetching Data from an API

// Task 6
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/users/github")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

fetchData().then((data) => {
  console.log(data);
});

// Task 7
async function fetchData2() {
  try {
    const response = await fetch("https://api.github.com/users/github");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData2();

// Activity 5 : Concurrent Promises

// Task 8
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("msg1");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("msg2");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("msg3");
    }, 2000);
  }),
]).then((values) => {
  console.log(values);
});

// Task 9
Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("msg1");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("msg2");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, 2000);
  }),
]).then((value) => {
  console.log(value);
});
