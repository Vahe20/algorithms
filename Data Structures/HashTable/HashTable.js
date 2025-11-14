import { LinkedList } from "../LinkedList/LinkedList.js";

class HashTable {
    #buckets = null;
    #size = 0;
    #capacity = 0;
    #maxLoadFactor = 0;

    constructor(cap, maxLoadFactor = 1.0){
        this.#capacity = this.#nextPrime(cap);
        this.#buckets = new Array(this.#capacity).fill(null).map(() => new LinkedList());
        this.#maxLoadFactor = maxLoadFactor;
    }

    // helper

    #hashing(key) {
        let hash = 0;
        const keyStr = String(key);
        for (let i = 0; i < keyStr.length; i++) {
            hash = (hash << 5) + hash + keyStr.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash) % this.#capacity;
    }

    #reHashing() {
        const oldBuckets = this.#buckets;
        this.#capacity = this.#nextPrime(this.#capacity * 2);
        this.#buckets = new Array(this.#capacity).fill(null).map(() => new LinkedList());
        this.#size = 0;
        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }

    #loadFactor() {
        return this.#size / this.#capacity;
    }

    #isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }

        return true;
    }

    #nextPrime(num) {
        let prime = num;
        while (!this.#isPrime(prime)) prime++;
        return prime;
    }

    *[Symbol.iterator]() {
        for (const bucket of this.#buckets) {
            for (const pair of bucket) {
                yield pair;
            }
        }
    }

    // interface

    set(key, value) {
        const index = this.#hashing(key);
        const bucket = this.#buckets[index];
        for (let node = bucket.getHead(); node !== null; node = node.next) {
            if (node.data[0] === key) {
                node.data[1] = value;
                return;
            }
        }
        bucket.push_back([key, value]);
        this.#size++;

        if (this.#loadFactor() > this.#maxLoadFactor) {
            this.#reHashing();
        }
    }

    get(key) {
        const index = this.#hashing(key);
        const bucket = this.#buckets[index];
        for (let node = bucket.getHead(); node !== null; node = node.next) {
            if (node.data[0] === key) {
                return node.data[1];
            }
        }
        return null;
    }

    has(key) {
        const index = this.#hashing(key);
        const bucket = this.#buckets[index];
        for (let node = bucket.getHead(); node !== null; node = node.next) {
            if (node.data[0] === key) {
                return true;
            }
        }
        return false;
    }

    delete(key) {
        const index = this.#hashing(key);
        const bucket = this.#buckets[index];

        for (let node = bucket.getHead(); node !== null; node = node.next) {
            if (node.data[0] === key) {
                bucket.remove(node.data);
                this.#size--;
                return true;
            }
        }
        return false;
    }

    size() {
        return this.#size;
    }

    print() {
        console.log("\nHashTable Contents:");

        for (let i = 0; i < this.#capacity; ++i) {
            const bucket = this.#buckets[i];
            const items = [];
            for (const pair of bucket) {
                items.push(`${pair[0]}: ${pair[1]}`);
            }
            console.log(`Bucket ${i}: ${items.join(", ")}`);
        }

        console.log('\nloadFactor:', this.#loadFactor());
    }
}

export default HashTable;