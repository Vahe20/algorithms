# Quick Sort

**Description:**  
Quick Sort is a "divide and conquer" algorithm. A pivot element is chosen, the array is split into elements less than and greater than the pivot, and then each part is recursively sorted.

**Complexity:**
- Best/Average case: O(n log n)
- Worst case: O(n^2) (if the pivot is chosen poorly)
- Memory: O(log n) recursion

**Example:**
```javascript
Input: [10, 7, 8, 9, 1, 5]
Output: [1, 5, 7, 8, 9, 10]
```
