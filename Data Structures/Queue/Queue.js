class Queue {
	#capacity;
	#size;
	#buffer;
	#head;
	#dynamic = false;

	constructor(capacity) {
		if (!capacity) {
			capacity = 10;
			this.#dynamic = true;
		} 
		this.#capacity = capacity;
		this.#buffer = new Array(capacity);
		this.#size = 0;
		this.#head = 0;
	}

	// helper

	#writeToBuffer(value) {
		this.#buffer[(this.#head + this.#size) % this.#capacity] = value;
		++this.#size;
		if (this.#dynamic && this.#size === this.#capacity) {
			this.resize();
		}
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

	resize() {
		const newCapacity = this.#capacity * 2;
		const newBuffer = new Array(newCapacity);

		for (let i = 0; i < this.#size; ++i) {
			newBuffer[i] = this.#buffer[(this.#head + i) % this.#capacity];
		}

		this.#buffer = newBuffer;
		this.#capacity = newCapacity;
		this.#head = 0;
	}

	// interface

	enqueue(value) {
		if (!value && value !== 0) throw new Error("Cannot enqueue undefined value");
		if (this.isFull()) throw new Error("Queue overflow");
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
		console.log(
			`Queue(size=${this.#size}, cap=${this.#capacity}):`,
			this.toArray()
		);
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