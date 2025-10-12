import Queue from "./Queue.js";

const queue = new Queue(3);

queue.push("A");
queue.push("B");
queue.push("C");

console.log("['A', 'B', 'C']", queue.toArray().toString() === ["A", "B", "C"].toString()); // [ 'A', 'B', 'C' ]
console.log("true", queue.isFull()); // true

console.log("A", queue.pop()); // A
console.log("B", queue.pop()); // B
console.log("C", queue.peek()); // C

queue.push("D");
console.log("['C', 'D']", queue.toArray().toString() === ['C', 'D'].toString()); // [ 'C', 'D' ]
console.log("2", queue.getSize() === 2); // 2

queue.push("E"); // E
queue.print(); // C, D, E

queue.clear();
console.log("true", queue.isEmpty()); // true
