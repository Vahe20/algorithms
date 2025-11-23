import Queue from "../../../Data Structures/Queue/Queue.js";

class GraphMatrix {
	constructor(size, isDirected = false) {
		this.size = size;
		this.matrix = Array.from({ length: size }, () =>
			new Array(size).fill(0)
		);
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
		for (let row of this.matrix) {
			row.push(0);
		}
		this.matrix.push(new Array(this.size).fill(0));
		++this.size;
	}

	addEdge(u, v) {
		this.validateVertex(u);
		this.validateVertex(v);

		this.matrix[u][v] = 1;
		if (!this.isDirected) {
			this.matrix[v][u] = 1;
		}
	}

	removeEdge(u, v) {
		this.validateVertex(u);
		this.validateVertex(v);
		this.matrix[u][v] = 0;
		if (!this.isDirected) {
			this.matrix[v][u] = 0;
		}
	}

	bfs(start) {
		this.validateVertex(start);
		const visited = new Array(this.size).fill(0);
		const queue = new Queue();
        const result = [];
		visited[start] = 1;
		queue.enqueue(start);
		while (!queue.isEmpty()) {
			const node = queue.dequeue();
            result.push(node);
			for (let neighbor = 0; neighbor < this.size; ++neighbor) {
				if (this.matrix[node][neighbor] === 1 && !visited[neighbor]) {
					visited[neighbor] = 1;
					queue.enqueue(neighbor);
				}
			}
		}

        return result;
	}

	dfs(start) {
		const visited = new Array(this.size).fill(0);
		const stack = [];
        const result = [];
		stack.push(start);
		while (stack.length) {
			const node = stack.pop();
			if (!visited[node]) {
				visited[node] = 1;
                result.push(node);
				for (let neighbor = 0; neighbor < this.size; neighbor++) {
					if (
						this.matrix[node][neighbor] === 1 &&
						!visited[neighbor]
					) {
						stack.push(neighbor);
					}
				}
			}
		}

        return result;
	}

	clear() {
		const size = this.size;
		this.matrix = Array.from({ length: size }, () =>
			new Array(size).fill(0)
		);
	}

	visualize() {
		for (let row of this.matrix) {
			console.log(row.join(" "));
		}
	}
}

export default GraphMatrix;
