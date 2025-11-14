## Red‑Black Tree

A **Red‑Black Tree (RBT)** is a self‑balancing binary search tree that guarantees O(log n) time for insert, delete, and lookup by enforcing color and structural properties. Each node is colored red or black and the tree maintains balance via rotations and recoloring.

Key properties:
- Every node is either red or black.
- The root is black.
- All leaf NIL pointers are considered black.
- Red nodes cannot have red children (no two consecutive reds).
- Every path from a node to its descendant NIL leaves contains the same number of black nodes (black‑height).

Typical complexity:
- Search, insert, delete: O(log n) worst case.
- Space: O(n).

---

## Methods

- **insert(data)**: Insert `data` as in a BST, then perform rotations and recoloring to restore red‑black properties.
- **delete(data)**: Remove a node with value `data` and perform delete fixup (rotations/recoloring) to restore properties.
- **contains(data)**: Return `true` if `data` exists in the tree, otherwise `false`.
- **levelOrder()**: Breadth‑first traversal returning an array of values (optionally including color per node).
- **inOrder()**: In‑order traversal (left → root → right) returning a sorted array of values.
- **getHeight()**: Return the tree height (max path length from root to a leaf).
- **getBlackHeight()**: Return the black‑height of the tree (number of black nodes on any root→leaf path).
- **isEmpty()**: Return `true` if the tree has no keys, otherwise `false`.
- **visualizer()**: Render the tree structure in the console as ASCII art (include node colors for clarity).
- **clear()**: Remove all nodes and reset the tree to an empty state.

Notes:
- Implementations typically use sentinel NIL nodes for leaves (treated as black) to simplify algorithms.
- When visualizing, show node color (R/B) next to values to help debug balancing operations.
- Provide unit tests for insertion and deletion sequences that exercise rotations and recoloring to ensure correctness.
