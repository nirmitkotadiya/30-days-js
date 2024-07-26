// Day 14 : Classes

// Activity 1 : Class Definition

// Task 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
const person = new Person("John", 25);
console.log(person.greet());

// Task 2
person.updateAge = function (newAge) {
  this.age = newAge;
  console.log(`Age updated to ${this.age}`);
};
person.updateAge(26);

// Activity 2 : Class Inheritance

// Task 3
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
}
const student = new Student("Jane", 22, "12345");
console.log(student.getStudentId());

// Task 4
Student.prototype.greet = function () {
  return `Hello, my name is ${this.name}, I am ${this.age} years old and my studentId is ${this.studentId}.`;
};
console.log(student.greet());

// Activity 3 : Static Methods and Properties

// Task 5
Person.greetGeneric = function () {
  return "Hello, nice to meet you!";
};
console.log(Person.greetGeneric());

// Task 6
Student.totalStudents = 0;
Student.prototype.constructor = function (name, age, studentId) {
  //   super(name, age);
  this.name = name;
  this.age = age;
  this.studentId = studentId;
  Student.totalStudents++;
  console.log(`Total students: ${Student.totalStudents}`);
};
const student1 = new Student("Jane", 22, "12345");
const student2 = new Student("John", 23, "12346");
const student3 = new Student("Jack", 24, "12347");

// Activity 4 : Getters and Setters

// Task 7
class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1 = new Person1("John", "Doe");
console.log(person1.fullName);

// Task 8
Person1.prototype.setName = function (name) {
  const names = name.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};
person1.setName("Jane Doe");
console.log(person1.fullName);

// Activity 5 : Private Field (Optional)

// Task 9
class Account {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new Account();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());

// Task 10
const account1 = new Account();
account1.deposit(100);
account1.withdraw(50);
console.log(account1.getBalance());
