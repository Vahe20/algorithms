# AVL Tree

An **AVL Tree** is a self-balancing binary search tree where the heights of the left and right subtrees 
of any node differ by at most one. This balancing ensures O(log n) time complexity for basic operations.

When the balance is disturbed, the tree automatically rebalances using rotations:
- Left rotation
- Right rotation
- Left-Right rotation
- Right-Left rotation

---

## Methods

- **insert(data)**: Add a value `data` to the tree and perform necessary rotations to maintain AVL property.
- **contains(data)**: Check if a value `data` exists in the tree. Returns `true` or `false`.
- **levelOrder()**: Traverse the tree level by level (breadth-first) and return an array of values.
- **inOrder()**: Traverse the tree in in-order (left → root → right) and return an array of sorted values.
- **getHeight()**: Return the height of the tree (number of levels).
- **delete(data)**: Remove a node with value `data` and rebalance the tree to maintain AVL properties.
- **getBalance(node)**: Get the balance factor of a node (difference between left and right subtree heights).
- **visualizer()**: Display the tree structure in the console using ASCII art.
- **clear()**: Remove all nodes from the tree, making it empty.
