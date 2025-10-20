class PriorityQueue {
	#type;
	#heap;

	constructor(iterable = [], type = "min") {
		this.#heap = [];
		this.#type = type;
		for (const item of iterable) this.push(item);
	}

	// helper

	#parent(i) {
		return Math.floor((i - 1) / 2);
	}

	#left(i) {
		return 2 * i + 1;
	}

	#right(i) {
		return 2 * i + 2;
	}

	#swap(i, j) {
		[this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
	}

	#compare(a, b) {
		return this.#type === "min" ? a < b : a > b;
	}

	#shiftUp(i) {
		while (i > 0) {
			const parent = this.#parent(i);
			if (this.#compare(this.#heap[i], this.#heap[parent])) {
				this.#swap(i, parent);
				i = parent;
			} else break;
		}
	}

	#shiftDown(i) {
		const n = this.size();
		while (true) {
			const left = this.#left(i);
			const right = this.#right(i);
			let target = i;

			if (left < n && this.#compare(this.#heap[left], this.#heap[target]))
				target = left;

			if (
				right < n &&
				this.#compare(this.#heap[right], this.#heap[target])
			)
				target = right;

			if (target !== i) {
				this.#swap(i, target);
				i = target;
			} else break;
		}
	}

	// interface

	push(value) {
		this.#heap.push(value);
		this.#shiftUp(this.size() - 1);
	}
	pop() {
		if (this.isEmpty()) throw new Error("underflow");

		const root = this.#heap[0];

		if (this.size() === 1) {
			this.#heap.pop();
			return root;
		}

		this.#swap(0, this.size() - 1);
		this.#heap.pop();
		this.#shiftDown(0);

		return root;
	}
	peek() {
		return this.#heap[0];
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.#heap.length;
	}
	clear() {
		this.#heap = [];
	}
	visualizer() {
		const n = this.size();
		console.log("Heap:", this.#heap);
		for (let i = 0; i < n; i++) {
			const left = this.#left(i) < n ? this.#heap[this.#left(i)] : null;
			const right =
				this.#right(i) < n ? this.#heap[this.#right(i)] : null;
			console.log(`${this.#heap[i]} -> ${left}, ${right}`);
		}
	}
}

export default PriorityQueue;
