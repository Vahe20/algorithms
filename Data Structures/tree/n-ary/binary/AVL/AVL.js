import Queue from "../../../../queue/Queue.js";

class TreeNode {
	data;
	left;
	right;
	height;

	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
		this.height = 1;
	}
}

class AVL {
	#root;

	constructor(data = null) {
		this.#root = null;
		if (data !== undefined && data !== null)
			this.#root = new TreeNode(data);
	}

	//helper

	#insert(node, value) {
		if (!node) {
			return new TreeNode(value);
		}

		if (value < node.data) {
			node.left = this.#insert(node.left, value);
		} else if (value > node.data) {
			node.right = this.#insert(node.right, value);
		} else {
			return node;
		}

		node.height = this.#update(node);
		return this.#rebalance(node);
	}

	#delete(node, value) {
		if (!node) return null;

		if (value < node.data) {
			node.left = this.#delete(node.left, value);
		} else if (value > node.data) {
			node.right = this.#delete(node.right, value);
		} else {
			if (!node.left && !node.right) return null;
			if (!node.left) return node.right;
			if (!node.right) return node.left;

			const minRight = this.#minValue(node.right);
			node.data = minRight;
			node.right = this.#delete(node.right, minRight);
		}

		node.height = this.#update(node);
		return this.#rebalance(node);
	}

	#rebalance(node) {
		const bf = this.#bf(node);

		if (bf > 1) {
			if (this.#bf(node.left) < 0)
				node.left = this.#left_rotate(node.left);
			return this.#right_rotate(node);
		}

		if (bf < -1) {
			if (this.#bf(node.right) > 0)
				node.right = this.#right_rotate(node.right);
			return this.#left_rotate(node);
		}

		return node;
	}

	#minValue(node) {
		while (node.left) node = node.left;
		return node.data;
	}

	#contains(current, key) {
		if (!current) return false;
		if (current.data === key) return true;
		if (key > current.data) return this.#contains(current.right, key);
		else return this.#contains(current.left, key);
	}

	#getHeight(node) {
		return node ? node.height : 0;
	}

	#update(node) {
		return (
			1 +
			Math.max(this.#getHeight(node.left), this.#getHeight(node.right))
		);
	}

	#bf(node) {
		return this.#getHeight(node.left) - this.#getHeight(node.right);
	}

	#right_rotate(node) {
		let newRoot = node.left;
		let right = newRoot.right;

		newRoot.right = node;
		node.left = right;

		node.height = this.#update(node);
		newRoot.height = this.#update(newRoot);

		return newRoot;
	}

	#left_rotate(node) {
		let newRoot = node.right;
		let left = newRoot.left;

		newRoot.left = node;
		node.right = left;

		newRoot.height = this.#update(newRoot);
		node.height = this.#update(node);

		return newRoot;
	}

	// interface

	insert(key) {
		this.#root = this.#insert(this.#root, key);
	}

	delete(key) {
		this.#root = this.#delete(this.#root, key);
	}

	contains(key) {
		return this.#contains(this.#root, key);
	}

	getRoot() {
		return this.#root;
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

	getHeight(node = this.#root) {
		return this.#getHeight(node);
	}

	getBalance(node) {
		return this.#bf(node);
	}

	clear() {
		this.#root = null;
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

export default AVL;
