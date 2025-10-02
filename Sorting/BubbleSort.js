function Bubble_Sort(arr) {
	const size = arr.length;
	for (let i = 0; i < size - 1; ++i) {
		let swapped = false;
		for (let j = 0; j < size - 1 - i; ++j) {
			if (arr[j] > arr[j + 1]) {
				swapped = true;
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
		if (!swapped) break;
	}

	return arr;
}

const arr0 = [64, 34, 25, 12, 22, 11, 90];
Bubble_Sort(arr0);
console.log("Sorted array: " + arr0);