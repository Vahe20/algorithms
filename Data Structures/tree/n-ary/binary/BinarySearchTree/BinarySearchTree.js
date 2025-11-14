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

	#insert(node, key) {
		if (key > node.data) {
			if (!node.right) {
				node.right = new TreeNode(key);
			} else this.#insert(node.right, key);
		} else if (key < node.data) {
			if (!node.left) {
				node.left = new TreeNode(key);
			} else this.#insert(node.left, key);
		}
	}

	#contains(current, key) {
		if (!current) return false;
		if (current.data === key) return true;
		if (key > current.data) return this.#contains(current.right, key);
		else return this.#contains(current.left, key);
	}

	#remove(root, value) {
		if (!root) return null;

		if (value < root.data) root.left = this.#remove(root.left, value);
		else if (value > root.data)
			root.right = this.#remove(root.right, value);
		else {
			if (!root.left && !root.right) return null;
			if (!root.left) return root.right;
			if (!root.right) return root.left;

			const minRight = this.#minValue(root.right);
			root.data = minRight;
			root.right = this.#remove(root.right, minRight);
		}

		return root;
	}

	#minValue(node) {
		while (node.left) node = node.left;
		return node.data;
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

		this.#insert(this.#root, key);
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
		return this.#contains(this.#root, key);
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
		this.#root = this.#remove(this.#root, key);
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
