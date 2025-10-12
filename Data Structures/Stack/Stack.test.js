import Stack from './Stack.js';

const stack = new Stack(3);

console.log(stack.isEmpty() === true);

stack.push(10);
stack.push(20);
stack.push(30);

console.log("3:", stack.getSize() === 3);
console.log("30:", stack.peek() === 30);
console.log("30:", stack.pop() === 30);
console.log("[10, 20]:", stack.toArray().toString() === [10, 20].toString());
console.log("false:", stack.isFull() === false);
console.log("2:", stack.getSize() === 2);
