// selection sort O(n^2) time complexity
function Selection_Sort(arr) {
	const size = arr.length;

	for (let i = 0; i < size - 1; ++i) {
		let min_idx = i;
		for (let j = i + 1; j < size; ++j) {
			if (arr[j] < arr[min_idx]) {
				min_idx = j;
			}
		}
        
		[arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
	}

	return arr;
}

const arr1 = [64, 25, 12, 22, 11];
Selection_Sort(arr1);
console.log("Sorted array: " + arr1);