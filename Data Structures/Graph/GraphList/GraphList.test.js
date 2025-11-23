import GraphList from "./GraphList.js";

// Existing test
const GL = new GraphList(6);

GL.addEdge(0, 1);
GL.addEdge(0, 2);
GL.addEdge(0, 4);
GL.addEdge(1, 3);

console.log("undirected BFS from 0 ->", GL.bfs(0));
console.log("undirected DFS from 0 ->", GL.dfs(0));

// Directed graph tests
const GD = new GraphList(4, true);
GD.addEdge(0, 1);
GD.addEdge(1, 2);
GD.addEdge(2, 3);

console.log("directed BFS from 0 ->", GD.bfs(0));
console.log("directed DFS from 0 ->", GD.dfs(0));
console.log("directed BFS from 3 ->", GD.bfs(3)); // no outgoing edges

// Remove edge in directed graph
GD.removeEdge(1, 2);
console.log("directed BFS from 0 after removeEdge(1,2) ->", GD.bfs(0));

// addVertex and connectivity tests
const G2 = new GraphList(2);
G2.addEdge(0, 1);
G2.addVertex(); // now vertex 2 exists
G2.addEdge(2, 0); // connect new vertex to 0

console.log("after addVertex BFS from 2 ->", G2.bfs(2));
console.log("after addVertex DFS from 2 ->", G2.dfs(2));

// removeEdge in undirected graph
const G3 = new GraphList(3);
G3.addEdge(0, 1);
G3.addEdge(1, 2);

console.log("G3 before removeEdge BFS from 0 ->", G3.bfs(0));
G3.removeEdge(1, 2);
console.log("G3 after removeEdge(1,2) BFS from 0 ->", G3.bfs(0));

// clear graph
G3.clear();
console.log("G3 after clear BFS from 0 ->", G3.bfs(0));

// validateVertex error test
try {
    GL.addEdge(0, 999);
} catch (e) {
    console.log("validateVertex error ->", e.message);
}