const swap = (arr, i, j) => {
	[arr[i], arr[j]] = [arr[j], arr[i]];
};

const medianOfThree = (arr, low, high) => {
	const mid = Math.floor((low + high) / 2);
	const a = arr[low];
	const b = arr[mid];
	const c = arr[high];

	if ((a - b) * (c - a) >= 0) return low;
	if ((b - a) * (c - b) >= 0) return mid;
	return high;
};

const randomPivot = (low, high) => {
	return low + Math.floor(Math.random() * (high - low + 1));
};

const partition = (arr, low, high) => {
	// const pivotIndex = low;
	// const pivotIndex = high;
	// const pivotIndex = randomPivot(low, high);
	const pivotIndex = medianOfThree(arr, low, high);
	swap(arr, pivotIndex, high);
	const pivot = arr[high];

	let i = low;
	for (let j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			swap(arr, i++, j);
		}
	}

	swap(arr, i, high);
	return i;
};

const quickSort = (arr, low, high) => {
	if (low < high) {
		const pi = partition(arr, low, high);

		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
};

const arr = [4, 2, 1, 5, 6, 3, 234];

const start = Date.now();

quickSort(arr, 0, arr.length - 1);

console.log(`${Date.now() - start}ms`);

console.log(arr);
