## Graph (Adjacency Matrix)

A Graph implemented using an adjacency matrix (GraphMatrix) stores edges in a 2D matrix where matrix[u][v] indicates the presence (and optionally the weight) of an edge from vertex u to vertex v. This representation is simple and gives O(1) edge lookups at the cost of O(V^2) space.

Supports:
- directed or undirected graphs
- fixed-size or dynamically resizable implementations (resizing requires rebuilding the matrix)

---

## Methods
- **constructor(numVertices, { size, isDirected = false })**: Create a graph with `numVertices` vertices. Options set directed/undirected and weighted/unweighted behavior.
- **addVertex()**: Add a new vertex (resize matrix). Returns the new vertex index.
- **removeVertex(v)**: Remove vertex `v` (may shift indices or mark as removed depending on implementation).
- **addEdge(u, v, weight = 1)**: Add an edge from `u` to `v`. For undirected graphs also adds `v`→`u`. If weighted, assigns `weight`.
- **removeEdge(u, v)**: Remove the edge from `u` to `v`.
- **bfs(start)**: Breadth-first traversal from `start`. Returns visitation order or distances (for unweighted shortest paths).
- **dfs(start)**: Depth-first traversal from `start`. Returns visitation order.
- **visualizer()**: Print the adjacency matrix or a simple ASCII representation of edges.
- **clear()**: Remove all edges (and optionally vertices), resetting the graph.