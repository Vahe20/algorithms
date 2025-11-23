import { LinkedList } from "../../LinkedList/LinkedList.js";
import Queue from "./../../Queue/Queue.js"

class GraphList {
	constructor(size, isDirected = false) {
		this.list = new Array(size);
		for (let i = 0; i < size; i++) {
			this.list[i] = new LinkedList();
		}
		this.size = size;
		this.isDirected = isDirected;
	}

	// helpers

	validateVertex(v) {
		if (v < 0 || v >= this.size) {
			throw new Error(`Vertex ${v} is out of bounds`);
		}
	}

	// interface

	addVertex() {
		const newVertex = new LinkedList();
		this.list.push(newVertex);
		++this.size;
	}

	addEdge(u, v) {
		this.validateVertex(u);
		this.validateVertex(v);

		this.list[u].push_back(v);

		if (!this.isDirected)
			this.list[v].push_back(u);
	}

	removeEdge(u, v) {
		this.validateVertex(u);
		this.validateVertex(v);

		this.list[u].remove(v);

		if (!this.isDirected)
			this.list[v].remove(u);
	}

	bfs(start) {
		const result = [];
		const visited = new Array(this.size).fill(0);

		const queue = new Queue();
		queue.enqueue(start);
		visited[start] = 1;

		while (!queue.isEmpty()) {
			const node = queue.dequeue();
			result.push(node);

			for (const neighbor of this.list[node]) {
				const v = neighbor.data;
				if (!visited[v]) {
					visited[v] = 1;
					queue.enqueue(v);
				}
			}
		}

		return result;
	}

	dfs(start) {
		const result = [];
		const visited = new Array(this.size).fill(0);

		const helper = (node) => {
			result.push(node);
			visited[node] = 1;
			for (const neighbor of this.list[node]) {
				const v = neighbor.data;
				if (!visited[v]) {
					helper(v);
				}
			}
		}

		helper(start);

		return result;
	}

	clear() {
		const size = this.size;
		this.list = new Array(size);
		for (let i = 0; i < size; i++) {
			this.list[i] = new LinkedList();
		}
	}

	visualize() {
		for (let i = 0; i < this.size; ++i) {
			this.list[i].visualize();
		}
	}
}

export default GraphList;
