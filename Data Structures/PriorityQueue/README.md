# Priority Queue

A **Priority Queue** is an abstract data type where each element is associated with a priority, and elements are served based on their priority.

## Key Operations

- **push (enqueue):** Add an element with a priority.
- **pop (dequeue):** Remove and return the element with the highest priority.
- **Peek:** View the element with the highest priority without removing it.
- **isEmpty:** Check if the priority queue contains no elements.
- **size:** Return the number of elements in the priority queue.
- **clear:** Remove all elements from the priority queue.
- **visualizer:** Tool or method to display the internal structure and priorities of the queue.

## Time Complexity

| Operation | Binary Heap | Unsorted Array | Sorted Array|
|-----------|-------------|---------------|-------------|
| push      | O(log n)    | O(1)          | O(n)        |
| pop       | O(log n)    | O(n)          | O(1)        |
| Peek      | O(1)        | O(n)          | O(1)        |
| isEmpty   | O(1)        | O(n)          | O(1)        |
| size      | O(1)        | O(n)          | O(1)        |
| clear     | O(1)        | O(n)          | O(1)        |
| visualizer| O(n)        | O(n)          | O(1)        |