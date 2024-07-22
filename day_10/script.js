// Day 10 : Event Handling

// Activity 1 : Basic Event Handling

// Task 1
const btn = document.querySelector("#btn");
const para = document.querySelector("#para");
btn.addEventListener("click", () => {
  para.innerHTML = "Button Clicked";
});

// Task 2
const img = document.querySelector("img");
img.addEventListener("dblclick", () => {
  img.style.display = "none";
});

// Activity 2 : Mouse Events

// Task 3
const body = document.querySelector("body");
body.addEventListener("mouseover", () => {
  body.style.backgroundColor = "red";
});

// Task 4
body.addEventListener("mouseout", () => {
  body.style.backgroundColor = "white";
});

// Activity 3 : Keyboard Events

// Task 5
const input = document.querySelector("input");
input.addEventListener("keypress", (e) => {
  console.log(e.key);
});

// Task 6
//display current value of input
input.addEventListener("input", () => {
  console.log(input.value);
});

// Activity 4 : Form Events

// Task 7
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.text.value);
});

// Task 8
const select = document.querySelector("select");
const carPara = document.querySelector("#carPara");
select.addEventListener("change", (e) => {
  carPara.innerHTML = e.target.value;
});

// Activity 5 : Event Delegation

// Task 9
const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

// Task 10
// add an event listener to a parent element that listens for events from dynamically added child elements.
document.addEventListener("click", (e) => {
  if (e.target && e.target.matches("li")) {
    console.log(e.target.textContent);
  }
});

const addItem = (text) => {
  const newItem = document.createElement("li");
  newItem.textContent = text;
  document.querySelector("#list").appendChild(newItem);
};

addItem("Item 1");
addItem("Item 2");
addItem("Item 3");
