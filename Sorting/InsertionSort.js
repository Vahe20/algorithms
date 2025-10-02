// Insertion Sort O(n^2), Omega(n) time complexity
function Insertion_Sort(arr) {
	const size = arr.length;
    
	for (let i = 1; i < size; ++i) {
		let key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}

	return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
Insertion_Sort(arr);
console.log("Sorted array: " + arr);
