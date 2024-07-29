// Day 17 : Data Structure

// Activity 1 : Linked List

// Task 1
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

function printList(node) {
  let current = node;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
printList(head);

// Task 2
class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node1(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNode() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  displayNodes() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.displayNodes(); // Output: 1 2 3
list.removeNode();
list.displayNodes(); // Output: 1 2
list.removeNode();
list.displayNodes(); // Output: 1
list.removeNode();
list.displayNodes(); // Output: List is empty
list.removeNode(); // Output: List is empty

// Activity 2 : Stack

// Task 3
class Stack {
  constructor() {
    this.items = [];
  }

  // Method to push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Method to pop an element from the stack
  pop() {
    if (this.items.length === 0) {
      return "Underflow"; // Stack is empty
    }
    return this.items.pop();
  }

  // Method to peek at the top element of the stack
  peek() {
    if (this.items.length === 0) {
      return "No elements in Stack"; // Stack is empty
    }
    return this.items[this.items.length - 1];
  }

  // Method to display all elements in the stack
  display() {
    console.log(this.items);
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Output: [10, 20, 30]
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
stack.display(); // Output: [10]
console.log(stack.pop()); // Output: 10
console.log(stack.pop()); // Output: Underflow
stack.display(); // Output: []

// Task 4
function reverseString(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = "";
  while (stack.items.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

// Example usage:
console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH
console.log(reverseString("Reversed String")); // Output: gnirts edneRev

// Activity 3 : Queue

// Task 5
class Queue {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Method to remove an element from the queue
  dequeue() {
    if (this.items.length === 0) {
      return "Underflow"; // Queue is empty
    }
    return this.items.shift();
  }

  // Method to get the front element of the queue
  front() {
    if (this.items.length === 0) {
      return "No elements in Queue"; // Queue is empty
    }
    return this.items[0];
  }

  // Method to display all elements in the queue
  display() {
    console.log(this.items);
  }
}
// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // Output: [10, 20, 30]
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
queue.display(); // Output: [30]
console.log(queue.dequeue()); // Output: 30
console.log(queue.dequeue()); // Output: Underflow
queue.display(); // Output: []

// Task 6
class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addJob(job) {
    this.queue.enqueue(job);
  }

  processJobs() {
    while (this.queue.items.length > 0) {
      console.log("Printing: ", this.queue.dequeue());
    }
  }
}
// Example usage:
const printer = new PrinterQueue();
printer.addJob(10);
printer.addJob(20);
printer.addJob(30);
printer.processJobs(); // Output: Printing: 10 Printing: 20 Printing: 30

// Activity 4 : Binary Tree

// Task 7
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function to print the tree in a structured manner
function printTree(node, prefix = "", isLeft = true) {
  if (node === null) {
    console.log("Empty tree");
    return;
  }

  if (node.right !== null) {
    printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }

  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

  if (node.left !== null) {
    printTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

printTree(root);

// Task 8
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}

// Example usage:
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);

binaryTree.inOrder(binaryTree.root); // Output: 3 5 10 15

// Activity 5 : Graph (Optional)

// Task 9
class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
  }

  bfs(startingVertex) {
    const visited = {};
    const queue = [];
    queue.push(startingVertex);
    visited[startingVertex] = true;

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (const vertex of this.edges[currentVertex]) {
        if (!visited[vertex]) {
          queue.push(vertex);
          visited[vertex] = true;
        }
      }
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 3);

graph.bfs(1);
// Output: 1 2 3

// Task 10
class Graph2 {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  bfsShortestPath(start, goal) {
    if (!this.adjacencyList[start] || !this.adjacencyList[goal]) {
      return "One or both vertices are not in the graph";
    }

    const queue = [start];
    const visited = {};
    const predecessor = {};
    visited[start] = true;

    while (queue.length > 0) {
      const vertex = queue.shift();
      if (vertex === goal) {
        return this._constructPath(predecessor, start, goal);
      }

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          predecessor[neighbor] = vertex;
          queue.push(neighbor);
        }
      }
    }

    return "No path found";
  }

  _constructPath(predecessor, start, goal) {
    const path = [];
    let current = goal;
    while (current !== start) {
      path.unshift(current);
      current = predecessor[current];
    }
    path.unshift(start);
    return path;
  }
}

// Example usage:
const graph2 = new Graph2();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");

graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("C", "E");
graph2.addEdge("D", "E");
graph2.addEdge("D", "F");
graph2.addEdge("E", "F");

const shortestPath = graph2.bfsShortestPath("A", "F");
console.log(`Shortest path from A to F: ${shortestPath.join(" -> ")}`);
