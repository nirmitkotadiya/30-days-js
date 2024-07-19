// Day 7 : Objects

// Activity 1 : Object Creation and Access

// Task 1
let book = {
  title: "Rich Dad Poor Dad",
  author: "Robert Kiyosaki",
  year: 1997,
};
console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);

// Activity 2 : Object Methods

// Task 3
book.getBookInfo = function () {
  return `${this.title} by ${this.author}`;
};
console.log(book.getBookInfo());

// Task 4
book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2000);
console.log(book.year);

// Activity 3 : Nested Objects

// Task 5
let library = {
  name: "Central Library",
  books: [
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      year: 1997,
    },
    {
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      year: 1949,
    },
  ],
};
console.log(library);

// Task 6
console.log(library.books[0].title);
console.log(library.books[1].author);

// Activity 4 : The this Keyword

// Task 7
book.getBookTitleAndYear = function () {
  return `${this.title} was published in ${this.year}`;
};
console.log(book.getBookTitleAndYear());

// Activity 5 : Object Iteration

// Task 8
for (let key in book) {
  console.log(key);
}

// Task 9
console.log(Object.keys(book) + " " + Object.values(book));
