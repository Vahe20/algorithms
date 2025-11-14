import BinarySearchTree from "./BinarySearchTree.js";

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(4);
bst.insert(7);

console.log("Contains 5:", bst.contains(5) === true);
console.log("Contains 3:", bst.contains(3) === true);
console.log("Contains 8:", bst.contains(8) === true);
console.log("Contains 10:", bst.contains(10) === false);

console.log(
	"In-Order:",
	bst.inOrder().toString() === [3, 4, 5, 7, 8].toString()
);

console.log(
	"Level-Order:",
	bst.levelOrder().toString() === [5, 3, 8, 4, 7].toString()
);

console.log("Height:", bst.getHeight() === 3);

bst.remove(3);
console.log(
	"After removing 3, In-Order:",
	bst.inOrder().toString() === [4, 5, 7, 8].toString()
);

bst.remove(8);
console.log(
	"After removing 8, In-Order:",
	bst.inOrder().toString() === [4, 5, 7].toString()
);

bst.remove(5);
console.log(
	"After removing 5, In-Order:",
	bst.inOrder().toString() === [4, 7].toString()
);

console.log("Is Empty:", bst.isEmpty() === false)

bst.remove(4);
bst.remove(7);
console.log("Is Empty after clearing:", bst.isEmpty() === true);

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(12);
console.log("Visualizer output:");
bst.visualizer();
