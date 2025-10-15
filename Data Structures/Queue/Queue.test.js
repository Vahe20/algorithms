import Queue from "./Queue.js";

const queue = new Queue(3);

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log("['A', 'B', 'C']", queue.toArray().toString() === ["A", "B", "C"].toString());
console.log("true", queue.isFull());

console.log("A", queue.dequeue() === "A");
console.log("B", queue.dequeue() === "B");
console.log("C", queue.peek() === "C");

queue.enqueue("D");
console.log("['C', 'D']", queue.toArray().toString() === ['C', 'D'].toString());
console.log("2", queue.getSize() === 2); // 2

queue.enqueue("E"); 
queue.print();

queue.clear();
console.log("true", queue.isEmpty());
