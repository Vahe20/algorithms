import queue from "../../../../queue/Queue.js";

const RED = "RED";
const BLACK = "BLACK";

// for print
const reset = "\x1b[0m";
const redColor = "\x1b[31m";
const blackColor = "\x1b[30m";
const bold = "\x1b[1m";

class TreeNode {
	constructor(data, color = RED, parent = null, left = null, right = null) {
		this.data = data;
		this.color = color;
		this.parent = parent;
		this.left = left;
		this.right = right;
	}
}

class RedBlackTree {
	constructor() {
		this.nil = new TreeNode(null);
		this.nil.color = BLACK;
		this.root = this.nil;
	}

	//helper

	#printTree(node, indent = "", isLeft = true) {
		if (!node) return;

		if (node.right) {
			this.#printTree(
				node.right,
				indent + (isLeft ? "     " : "│    "),
				false
			);
		}

		const colorCode = node.color === RED ? redColor : blackColor;
		const colorSymbol = node.color === RED ? "R" : "B";
		const nodeLabel = `${bold}${colorCode}(${
			node.data ? node.data : "nil"
		}, ${colorSymbol})${reset}`;

		console.log(indent + (isLeft ? "└──" : "┌──") + nodeLabel);

		if (node.left) {
			this.#printTree(
				node.left,
				indent + (isLeft ? "     " : "│    "),
				true
			);
		}
	}

	#deleteNode(node, data) {
		while (node !== this.nil && data !== node.data) {
			if (data < node.data) node = node.left;
			else node = node.right;
		}

		if (node === this.nil) return this.root;

		const transplant = (node, v) => {
			if (node.parent === this.nil) {
				this.root = v;
			} else if (node === node.parent.left) {
				node.parent.left = v;
			} else {
				node.parent.right = v;
			}
			v.parent = node.parent;
		};

		let y = node;
		let yOriginalColor = y.color;
		let x;

		if (node.left === this.nil) {
			x = node.right;
			transplant(node, node.right);
		} else if (node.right === this.nil) {
			x = node.left;
			transplant(node, node.left);
		} else {
			y = this.#minValueNode(node.right);
			yOriginalColor = y.color;
			x = y.right;
			if (y.parent === node) {
				x.parent = y;
			} else {
				transplant(y, y.right);
				y.right = node.right;
				y.right.parent = y;
			}
			transplant(node, y);
			y.left = node.left;
			y.left.parent = y;
			y.color = node.color;
		}

		if (yOriginalColor === BLACK) {
			this.#deleteFixUp(x);
		}
		return this.root;
	}

	#minValueNode(node) {
		let current = node;
		while (current.left !== this.nil) {
			current = current.left;
		}
		return current;
	}

	#insertFixUp(newNode) {
		while (newNode.parent.color === RED) {
			let grandParent = newNode.parent.parent;
			let uncleNode;

			if (newNode.parent === grandParent.left)
				uncleNode = grandParent.right;
			else uncleNode = grandParent.left;

			if (newNode.parent.color === RED && uncleNode.color === RED) {
				newNode.parent.color = BLACK;
				uncleNode.color = BLACK;
				grandParent.color = RED;
				newNode = grandParent;
			} else {
				this.#rebalance(grandParent, newNode);
			}
		}

		this.root.color = BLACK;
	}

	#deleteFixUp(node) {
		while (node !== this.root && node.color === BLACK) {
			let sibling;
			if (node === node.parent.left) {
				sibling = node.parent.right;
				if (sibling.color === RED) {
					sibling.color = BLACK;
					node.parent.color = RED;
					this.#leftRotate(node.parent);
					sibling = node.parent.right;
				} else {
					if (
						sibling.left.color === BLACK &&
						sibling.right.color === BLACK
					) {
						sibling.color = RED;
						node = node.parent;
					} else {
						if (sibling.right.color === BLACK) {
							sibling.left.color = BLACK;
							sibling.color = RED;
							this.#rightRotate(sibling);
							sibling = node.parent.right;
						}
						sibling.color = node.parent.color;
						node.parent.color = BLACK;
						sibling.right.color = BLACK;
						this.#leftRotate(node.parent);
						node = this.root;
					}
				}
			} else {
				sibling = node.parent.left;
				if (sibling.color === RED) {
					sibling.color = BLACK;
					node.parent.color = RED;
					this.#rightRotate(node.parent);
					sibling = node.parent.left;
				} else {
					if (
						sibling.left.color === BLACK &&
						sibling.right.color === BLACK
					) {
						sibling.color = RED;
						node = node.parent;
					} else {
						if (sibling.left.color === BLACK) {
							sibling.right.color = BLACK;
							sibling.color = RED;
							this.#leftRotate(sibling);
							sibling = node.parent.left;
						}
						sibling.color = node.parent.color;
						node.parent.color = BLACK;
						sibling.left.color = BLACK;
						this.#rightRotate(node.parent);
						node = this.root;
					}
				}
			}
		}
	}

	#rebalance(grandParent, node) {
		if (grandParent.left === node.parent) {
			if (node === node.parent.right) {
				this.#leftRotate(node.parent);
				node = node.left;
			}
			node.parent.color = BLACK;
			grandParent.color = RED;
			this.#rightRotate(grandParent);
		} else {
			if (node === node.parent.left) {
				this.#rightRotate(node.parent);
				node = node.right;
			}
			node.parent.color = BLACK;
			grandParent.color = RED;
			this.#leftRotate(grandParent);
		}
	}

	#rightRotate(node) {
		if (!node || node === this.nil) return;

		const pivot = node.left;
		node.left = pivot.right;
		if (pivot.right !== this.nil) {
			pivot.right.parent = node;
		}

		pivot.parent = node.parent;
		if (node.parent === this.nil) {
			this.root = pivot;
		} else if (node === node.parent.left) {
			node.parent.left = pivot;
		} else {
			node.parent.right = pivot;
		}

		pivot.right = node;
		node.parent = pivot;
	}

	#leftRotate(node) {
		if (!node || node === this.nil) return;

		const pivot = node.right;
		node.right = pivot.left;
		if (pivot.left !== this.nil) {
			pivot.left.parent = node;
		}

		pivot.parent = node.parent;
		if (node.parent === this.nil) {
			this.root = pivot;
		} else if (node === node.parent.left) {
			node.parent.left = pivot;
		} else {
			node.parent.right = pivot;
		}

		pivot.left = node;
		node.parent = pivot;
	}

	// interface

	insert(data) {
		const newNode = new TreeNode(data);
		let parentNode = this.nil;
		let current = this.root;

		while (current !== this.nil) {
			parentNode = current;
			if (newNode.data < current.data) {
				current = current.left;
			} else if (newNode.data > current.data) {
				current = current.right;
			} else {
				return;
			}
		}

		if (parentNode === this.nil) {
			this.root = newNode;
		} else if (newNode.data < parentNode.data) {
			parentNode.left = newNode;
		} else {
			parentNode.right = newNode;
		}
		newNode.parent = parentNode;
		newNode.left = newNode.right = this.nil;

		this.#insertFixUp(newNode);
	}

	delete(data) {
		this.#deleteNode(this.root, data);
	}

	contains(data) {
		let current = this.root;
		while (current !== this.nil) {
			if (data === current.data) return true;
			else if (data < current.data) current = current.left;
			else current = current.right;
		}
		return false;
	}

	levelOrder() {
		const result = [];
		if (this.root === this.nil) return result;
		const queue = new queue();
		queue.enqueue(this.root);
		while (!queue.isEmpty()) {
			const node = queue.dequeue();
			result.push(node.data);
			if (node.left !== this.nil) queue.enqueue(node.left);
			if (node.right !== this.nil) queue.enqueue(node.right);
		}
		return result;
	}

	inOrder(node = this.root, result = []) {
		if (node !== this.nil) {
			this.inOrder(node.left, result);
			result.push(node.data);
			this.inOrder(node.right, result);
		}
		return result;
	}

	getBlackHeight() {
		let node = this.root;
		let blackHeight = 0;
		while (node !== this.nil) {
			if (node.color === BLACK) blackHeight++;
			node = node.left;
		}
		return blackHeight;
	}

	getHeight(node = this.root) {
		if (node === this.nil) return 0;
		let leftHeight = this.getHeight(node.left);
		let rightHeight = this.getHeight(node.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}

	isEmpty() {
		return this.root === this.nil;
	}

	clear() {
		this.root = this.nil;
	}

	visualizer() {
		if (this.root === this.nil) {
			console.log("Empty tree");
			return;
		}
		this.#printTree(this.root);
	}
}

export default RedBlackTree;
