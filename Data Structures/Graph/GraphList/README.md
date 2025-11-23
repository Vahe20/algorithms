## Graph (Adjacency List)

A Graph implemented using an adjacency list (GraphList) stores, for each vertex, a list (or set) of its neighbors. Each neighbor entry can be just a vertex id (unweighted) or a pair/object { v, weight } (weighted). This representation is ideal for sparse graphs and supports efficient iteration over incident edges.


Supports:
- directed or undirected graphs
- fixed-size or dynamically resizable vertex set

---

## Methods
- **constructor(numVertices, { size, isDirected = false })**: Create a graph with `numVertices` vertices, each with an empty adjacency list. Options determine directed/undirected behavior.
- **addVertex()**: Add a new vertex (append an empty list). Returns the new vertex index.
- **addEdge(u, v, weight = 1)**: Add an edge from `u` to `v`. For undirected graphs also add `v`→`u`. For weighted graphs store the weight with the neighbor.
- **removeEdge(u, v)**: Remove the edge entry from `u`'s list (and from `v`'s if undirected).
- **bfs(start)**: Breadth-first traversal from `start`. Return visitation order and/or distances (unweighted shortest paths).
- **dfs(start)**: Depth-first traversal from `start`. Return visitation order or discovery/finish times.
- **visualizer()**: Print adjacency lists or a simple ASCII representation of edges.
- **clear()**: Remove all edges (and optionally vertices), resetting the graph.