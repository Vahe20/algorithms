function merge(arr, mid, start, end) {
	const a1 = arr.slice(start, mid + 1);
	const a2 = arr.slice(mid + 1, end + 1);

	let i = 0;
	let j = 0;
	let k = start;

	while (i < a1.length && j < a2.length) {
		if (a1[i] <= a2[j]) {
			arr[k++] = a1[i++];
		} else {
			arr[k++] = a2[j++];
		}
	}

	while (i < a1.length) {
		arr[k++] = a1[i++];
	}
	while (j < a2.length) {
		arr[k++] = a2[j++];
	}
}

function Merge_Sort(arr, start, end) {
	if (start >= end) return;

	const mid = Math.floor((start + end) / 2);

	Merge_Sort(arr, start, mid);
	Merge_Sort(arr, mid + 1, end);

	merge(arr, mid, start, end);
}