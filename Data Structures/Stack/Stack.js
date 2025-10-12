class Stack {
    #buffer;
    #capacity;
    #size;

    constructor(capacity) {
        this.#buffer = new Array(capacity);
        this.#capacity = capacity;
        this.#size = 0;
    }

    // helper

    #writeToBuffer(value) {
        this.#buffer[this.#size] = value;
        this.#size += 1;
    }

    #reedFromBuffer() {
        return this.#buffer[this.#size - 1];
    }

    #removeFromBuffer() {
        const value = this.#buffer[this.#size - 1];
        this.#buffer[this.#size - 1] = undefined;
        this.#size -= 1;

        return value;
    }

    // interface

    push(value) {
        if (this.isFull()) {
            throw new Error('Stack overflow');
        }

        this.#writeToBuffer(value);

        return;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack underflow');
        }

        return this.#removeFromBuffer();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
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

    clear() {
        this.#buffer = [];
        this.#size = 0;
    }

    print() {
        console.log(this.#buffer.slice(0, this.#size).toString());
    }

    toArray() {
        return this.#buffer.slice(0, this.#size);
    }
}

export default Stack;