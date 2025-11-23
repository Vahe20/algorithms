import GraphMatrix from "./GraphMatrix.js";

const GM = new GraphMatrix(5, false);

GM.addEdge(0, 1);
GM.addEdge(0, 2);
GM.addEdge(1, 2);
GM.addEdge(1, 3);
GM.addEdge(2, 4);

console.log("BFS from 0:", GM.bfs(0));

// Additional tests

// 1) DFS on the same graph
console.log("DFS from 0:", GM.dfs(0));

// 2) addVertex + connect new vertex and verify traversal includes it
GM.addVertex(); // new vertex index 5
GM.addEdge(4, 5); // connect existing node 4 with new node 5
console.log("BFS from 0 after addVertex and edge 4-5:", GM.bfs(0));
console.log("Adjacency matrix after adding vertex 5 and edge 4-5:");
GM.visualize();

// 3) removeEdge and show traversal change (remove 1-3 isolates node 3)
GM.removeEdge(1, 3);
console.log("BFS from 0 after removeEdge(1,3):", GM.bfs(0));
console.log("Adjacency matrix after removing edge 1-3:");
GM.visualize();

// 4) directed graph behavior
const DG = new GraphMatrix(4, true);
DG.addEdge(0, 1);
DG.addEdge(1, 2);
DG.addEdge(2, 3);
DG.addEdge(3, 1); // cycle 1->2->3->1
console.log("Directed BFS from 0 (DG):", DG.bfs(0));
console.log("Directed DFS from 0 (DG):", DG.dfs(0));
console.log("Directed adjacency matrix (DG):");
DG.visualize();

// 5) clear matrix
GM.clear();
console.log("GM after clear (should be all zeros):");
GM.visualize();

// 6) invalid operations produce errors (validateVertex)
try {
    GM.addEdge(10, 0);
} catch (err) {
    console.log("addEdge invalid index error:", err.message);
}
