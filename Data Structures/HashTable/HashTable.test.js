import HashTable from "./HashTable.js";

const hashTable = new HashTable(3, 0.5);

hashTable.set("name", "Alice"); // Add key-value pairs
hashTable.set("age", 30); // Add key-value pairs
hashTable.set("city", "New York"); // Add key-value pairs

console.log(hashTable.get("name")); // Output: Alice
console.log(hashTable.get("age"));  // Output: 30

hashTable.set("country", "USA"); // This should trigger rehashing due to load factor

console.log(hashTable.get("city"));; // Output: New York
console.log(hashTable.get("country")); // Output: USA

hashTable.delete("age"); // Remove the key "age"
console.log(hashTable.has("age")); // Output: false

hashTable.print();