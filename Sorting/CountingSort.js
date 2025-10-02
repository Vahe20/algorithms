// counting sort O(n + k) time complexity
function Counting_Sort(arr) {
	const length  = arr.length;
	if (length === 0) return arr;

	const maxElem = Math.max(...arr);
	const minElem = Math.min(...arr);

	const range = maxElem - minElem + 1;
	const count = new Array(range).fill(0);

	for (const item of arr) {
		count[item - minElem]++;
	}

	for (let i = 1; i < count.length; ++i) {
		count[i] += count[i - 1];
	}

	const output = new Array(length).fill(0);

	for (let i = length; i >= 0 ; --i) {
		const elem = arr[i];
		count[elem - minElem]--;
		const idx = count[elem - minElem];

		output[idx] = elem;
	}

	return output;
}

const arr2 = [4, 2, 2, 8, 3, 3, 1];
const sortedArr2 = Counting_Sort(arr2);
console.log("Sorted array: " + sortedArr2);