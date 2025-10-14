class Queue {
	#capacity;
	#size;
	#buffer;
	#head;

	constructor(capacity) {
		this.#capacity = capacity;
		this.#size = 0;
		this.#buffer = new Array(capacity);
		this.#head = 0;
	}

	// helper

	#writeToBuffer(value) {
		this.#buffer[(this.#head + this.#size) % this.#capacity] = value;
		++this.#size;
	}

	#reedFromBuffer() {
		return this.#buffer[this.#head];
	}

	#removeFromBuffer() {
		const value = this.#buffer[this.#head];
		this.#buffer[this.#head] = undefined;
		this.#head = (this.#head + 1) % this.#capacity;

		--this.#size;
		return value;
	}

	// interface

	enqueue(value) {
		if (this.isFull()) {
			throw new Error("Queue overflow");
		}
		this.#writeToBuffer(value);
	}
	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Queue underflow");
		}
		return this.#removeFromBuffer();
	}
	peek() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		return this.#reedFromBuffer();
	}
	isEmpty() {
		return this.#size === 0;
	}
	isFull() {
		return this.#size === this.#capacity;
	}
	getSize() {
		return this.#size;
	}
	print() {
		console.log(this.toArray().join(", "));
	}
	clear() {
		this.#buffer = new Array(this.#capacity);
		this.#head = 0;
		this.#size = 0;
	}
	toArray() {
		const result = [];
		for (let i = 0; i < this.#size; ++i) {
			result.push(this.#buffer[(this.#head + i) % this.#capacity]);
		}

		return result;
	}
}

export default Queue;