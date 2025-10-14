import BinarySearchTree from "./BinarySearchTree.js";

const bst = new BinarySearchTree();

bst.insert(23);
bst.insert(25);
bst.insert(27);
bst.insert(29);
bst.insert(28);

console.log(bst.levelOrder());

bst.visualizer();