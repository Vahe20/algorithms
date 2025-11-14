# Hash Table in JavaScript
A simple hash table (hash map) implementation in JavaScript with common operations such as insertion, lookup, deletion, resizing, and iteration.

## Features
* Store key-value pairs with average O(1) access
* Automatic resizing (rehashing) based on load factor
* Collision handling via separate chaining (arrays or linked lists)
* Customizable hash function and equality comparator
* Retrieve keys, values, and entries
* Iterate over stored pairs for debugging or consumption

## Methods
* constructor(initialCapacity = 16, loadFactor = 0.75, hashFn, equalsFn) — Create a new hash table
* set(key, value) / put(key, value) — Insert or update a key-value pair
* get(key) — Return the value for a key, or undefined if not found
* has(key) — Return true if the key exists
* delete(key) / remove(key) — Remove a key and its value, return true if removed
* size() — Return the number of stored pairs
* clear() — Remove all entries

## Notes
* Collision resolution: this implementation uses separate chaining (each bucket stores an array of pairs). Alternative strategies (open addressing) can be implemented if desired.
* Default hash function works for strings and numbers; pass a custom hashFn to support complex keys. For object keys, prefer Map or provide a stable hashing strategy.
* The table resizes (typically doubles capacity) when size / capacity exceeds the loadFactor to keep operations near O(1).
* Equality: default comparator compares keys with Object.is; pass equalsFn for custom equality semantics.
* This implementation focuses on clarity and educational use; production code should consider built-in Map for robust behavior and engine optimizations.
