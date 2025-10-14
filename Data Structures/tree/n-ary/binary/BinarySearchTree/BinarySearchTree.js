import Queue from "../../../../Queue/Queue.js";

class TreeNode {
	data;
	left;
	right;

	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	#root;

	constructor() {
		this.#root = null;
	}

	//helper

	#insertRecursive(current, key) {
		if (key > current.data && !current.right) {
			current.right = new TreeNode(key);
			return;
		} else if (key < current.data && !current.left) {
			current.left = new TreeNode(key);
			return;
		}

		if (key > current.data) {
			this.#insertRecursive(current.right, key);
		} else if (key < current.data) {
			this.#insertRecursive(current.left, key);
		}

		return this.#root;
	}

	#containsRecursive(current, key) {
		if (!current) return false;
		if (current.data === key) return true;
		if (key > current.data)
			return this.#containsRecursive(current.right, key);
		else return this.#containsRecursive(current.left, key);
	}

	// interface

	// iterative insert

	// insert(key) {
	//     const node = new TreeNode(key);

	//     if (this.isEmpty()) {
	//         this.#root = node;
	//         return;
	//     }

	//     let current = this.#root;

	//     while (true) {
	//         if (key > current.data) {
	//             if (!current.right) {
	//                 current.right = node;
	//                 break;
	//             } else {
	//                 current = current.right;
	//             }
	//         }
	//         else if (key < current.data) {
	//             if (!current.left) {
	//                 current.left = node;
	//                 break;
	//             } else {
	//                 current = current.left;
	//             }
	//         } else {
	//             break;
	//         }
	//     }
	// }

	// recursive insert

	insert(key) {
		if (this.isEmpty()) {
			this.#root = new TreeNode(key);
			return;
		}

		this.#insertRecursive(this.#root, key);
	}

	// iterative contains

	// contains(key) {
	//     let current = this.#root;

	//     while(current) {
	//         if (key === current.data) return true;
	//         if (key > current.data) current = current.right;
	//         else current = current.left;
	//     }

	//     return false;
	// }

	// recursive contains

	contains(key) {
		return this.#containsRecursive(this.#root, key);
	}

	levelOrder() {
		const result = [];
		const queue = new Queue(20);

		if (!this.#root) return result;

		queue.enqueue(this.#root);

		while (queue.getSize()) {
			const node = queue.dequeue();
			result.push(node.data);
			if (node.left) queue.enqueue(node.left);
			if (node.right) queue.enqueue(node.right);
		}

		return result;
	}

	inOrder() {
        
    }

	getHeight() {}
	remove(key) {}
	isEmpty() {
		return this.#root === null;
	}
	visualizer(node = this.#root, prefix = "", isLeft = true) {
		if (!node) return;

		if (node.right) {
			this.visualizer(
				node.right,
				prefix + (isLeft ? "│   " : "    "),
				false
			);
		}

		console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);

		if (node.left) {
			this.visualizer(
				node.left,
				prefix + (isLeft ? "    " : "│   "),
				true
			);
		}
	}
}

export default BinarySearchTree;
