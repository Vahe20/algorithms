const binarySearch = (arr, target) => {
	let start = 0;
	let end = arr.length;

	while (start < end) {
		const mid = Math.floor((start + end) / 2);

		if (arr[mid] === target) return arr[mid];
		else if (arr[mid] > target) end = mid;
		else start = mid;
	}
};
