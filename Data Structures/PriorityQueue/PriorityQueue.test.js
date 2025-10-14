import PriorityQueue from "./PriorityQueue.js";

const pq = new PriorityQueue();

console.log("=== Тестирование PriorityQueue ===");

pq.push(10);
pq.push(5);
pq.push(8);
console.log(pq.size() === 3, "push: size should be 3");
console.log(pq.peek() === 5, "push: min element should be 5");

console.log(pq.peek() === 5, "peek: should return the smallest element (5)");
console.log(pq.size() === 3, "peek: should not change size");

const popped1 = pq.pop();
console.log(popped1 === 5, "pop: first pop should return 5");
console.log(pq.size() === 2, "pop: size should be 2 after pop");
console.log(pq.peek() === 8, "pop: new smallest element should be 8");


pq.push(1);
pq.push(3);
pq.push(15);
pq.push(2);

const sorted = [];
while (!pq.isEmpty()) sorted.push(pq.pop());
console.log(
	JSON.stringify(sorted) === JSON.stringify([1, 2, 3, 8, 10, 15]),
	"pop: should return elements in ascending order"
);

let underflowCaught = false;
try {
	pq.pop();
} catch (e) {
	underflowCaught = e.message.includes("underflow");
}
console.log(underflowCaught, "pop: should throw 'underflow' error when empty");

pq.push(7);
pq.push(4);
pq.push(9);
pq.clear();
console.log(pq.size() === 0, "clear: size should be 0");
console.log(pq.isEmpty() === true, "clear: queue should be empty");

pq.push(5);
pq.push(3);
pq.push(8);
console.log("visualizer: should show heap structure ↓");
pq.visualizer();

console.log("=== Тестирование завершено ===");
