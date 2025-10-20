import PriorityQueue from "../../Data Structures/PriorityQueue/PriorityQueue.js";

function heapSort(arr, ascending = true) {
	const pq = new PriorityQueue(arr, ascending ? "min" : "max");
	const res = [];

	while (!pq.isEmpty()) {
		res.push(pq.pop());
	}

	return res;
}