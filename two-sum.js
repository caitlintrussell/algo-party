/* TWO NUMBER SUM
Inputs:
  array: Array of unsorted integers, with length
  targetSum: integer

Problem:
  Find two elements in the array that add up to equal the targetSum
  Return them in a sorted array
  If none found, return an empty array

*/

const twoNumberSum = (array, targetSum) => {
	for (let i=0; i<array.length; i++) {
		let elem1 = array[i]
		for (let k=0; k<array.length; k++) {
			let elem2 = array[k]
			if (i !== k && elem1 + elem2 === targetSum) {
				return elem1 < elem2 ? [elem1, elem2] : [elem2, elem1]
			}
		}
	}
	return [];
}
