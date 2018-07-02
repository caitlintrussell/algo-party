/* TWO NUMBER SUM
Inputs:
  array: Array of unsorted integers, with length
  targetSum: integer

Problem:
  Find two elements in the array that add up to equal the targetSum
  Return them in a sorted array
  If none found, return an empty array

*/
// NESTED LOOP Naive, O(n^2) time
const twoNumberSum = (arr, targetSum) => {
	for (let i=0; i<arr.length; i++) {
		let elem1 = arr[i]
		for (let k=0; k<arr.length; k++) {
			let elem2 = arr[k]
			if (i !== k && elem1 + elem2 === targetSum) {
				return elem1 < elem2 ? [elem1, elem2] : [elem2, elem1]
			}
		}
	}
	return [];
}

const twoNumberSumWhileLoop = (arr, targetSum) =>  {
	arr.sort((a, b) => a - b);
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let currentSum = arr[left] + arr[right];
		if (currentSum === targetSum) {
			return [arr[left], arr[right]];
		}
		else if (currentSum > targetSum) right--;
		else if (currentSum < targetSum) left++;
	}
	return [];
}
