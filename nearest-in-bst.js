/* FIND CLOSEST VALUE IN BINARY SEARCH TREE
Inputs:
  tree: Sorted BST (Nodes have this.left, this.right, this.value)
  target: number

Problem:
  Given a tree, traverse and find the node.value that is CLOSEST to the target
*/

const findClosestValueInBst = (tree, target, closest = Infinity) {
	if (tree === null) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	if (target > tree.value) {
		return findClosestValueInBst(tree.right, target, closest);
		}
	else if (target < tree.value) {
		return findClosestValueInBst(tree.left, target, closest);
	}
	else {
		return closest;
	}
}
