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

	constructor(data = null) {
		this.#root = null;
		if (data) this.#root = new TreeNode(data);
	}

	//helper

	#insertRecursive(current, key) {
		if (key > current.data) {
			if (!current.right) {
				current.right = new TreeNode(key);
			} else this.#insertRecursive(current.right, key);
		} else if (key < current.data) {
			if (!current.left) {
				current.left = new TreeNode(key);
			} else this.#insertRecursive(current.left, key);
		}
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

	levelOrder(root = this.#root) {
		const result = [];
		const queue = new Queue();

		if (!root) return result;

		queue.enqueue(root);

		while (!queue.isEmpty()) {
			const node = queue.dequeue();
			result.push(node.data);
			if (node.left) queue.enqueue(node.left);
			if (node.right) queue.enqueue(node.right);
		}

		return result;
	}

	inOrder() {
		const result = [];

		function foo(node) {
			if (!node) return;
			foo(node.left);
			result.push(node.data);
			foo(node.right);
		}

		foo(this.#root);

		return result;
	}

	getHeight() {
		let height = 0;

		if (!this.#root) return height;

		let queue = new Queue();

		queue.enqueue(this.#root);

		while (!queue.isEmpty()) {
			let level = queue.getSize();
			++height;

			for (let i = 0; i < level; ++i) {
				const node = queue.dequeue();
				if (node.left) queue.enqueue(node.left);
				if (node.right) queue.enqueue(node.right);
			}
		}

		return height;
	}

	remove(key) {
		let parent = null;
		let current = this.#root;

		while (current && current.data !== key) {
			parent = current;
			if (key < current.data) current = current.left;
			else current = current.right;
		}

		if (!current) return false;

		if (!current.left && !current.right) {
			if (!parent) this.#root = null;
			else if (parent.right === current) parent.right = null;
			else parent.left = null;
		} else if (
			(current.left && !current.right) ||
			(!current.left && current.right)
		) {
			const child = current.left || current.right;
			if (!parent) this.#root = child;
			else if (parent.right === current) parent.right = child;
			else parent.left = child;
		} else {
			let minElemParent = current;
			let minElem = current.right;

			while (minElem.left) {
				minElemParent = minElem;
				minElem = minElem.left;
			}

			current.data = minElem.data;

			if (minElemParent.left === minElem)
				minElemParent.left = minElem.right;
			else minElemParent.right = minElem.right;
		}

		return true;
	}

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

	clear() {
		this.#root = null;
	}
}

export default BinarySearchTree;
