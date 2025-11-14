import RedBlackTree from "./RedBlackTree.js";

const rbt = new RedBlackTree();

rbt.insert(30);
rbt.insert(40);
rbt.insert(50);
rbt.insert(60);
rbt.insert(70);
rbt.insert(80);
rbt.insert(90);
rbt.insert(100);
rbt.insert(85);
rbt.delete(100);
rbt.delete(70);

rbt.visualizer();