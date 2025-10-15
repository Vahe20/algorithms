## Binary Search Tree

A **Binary Search Tree (BST)** is a data structure where each node has at most two children, 
and for every node:
- The left child contains values less than the node's value.
- The right child contains values greater than the node's value.

BST allows for efficient insertion, deletion, and lookup operations.

---

## Methods

- **insert(key)**: Add a value `key` to the tree while maintaining the BST property.

- **contains(key)**: Check if a value `key` exists in the tree. Returns `true` or `false`.

- **levelOrder()**: Traverse the tree level by level (breadth-first) and return an array of values.

- **inOrder()**: Traverse the tree in in-order (left → root → right) and return an array of sorted values.

- **getHeight()**: Return the height of the tree (number of levels).

- **remove(key)**: Remove a node with the value `key` from the tree while maintaining BST properties.

- **isEmpty()**: Check if the tree contains no nodes. Returns `true` if empty, otherwise `false`.

- **visualizer()**: Display the tree structure in the console using ASCII art.

- **clear()**: Remove all nodes from the tree, making it empty.
