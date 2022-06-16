export default function main() {
  console.log("Hey");
  let graph = new Graph();
  graph.addVertex("Tokyo");
  graph.addVertex("USA");
  graph.addVertex("India");
  graph.addEdge("Tokyo", "USA");
  graph.addEdge("India", "USA");
  graph.addEdge("Tokyo", "India");
  console.log(graph);
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");
  // graph.removeEdge('Tokyo',"USA")
  // graph.removeVertex("USA")
  console.log(graph.dfs("A"));
  console.log(graph.dfsLoop("A"));
  console.log(graph.bfs("A"));
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((t) => t !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((t) => t !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      console.log(this.adjacencyList[vertex]);
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

   
    dfsLoop(vertex){
        let stack = []
        stack.push(vertex)
        let visited = new Set()
        let results = []
        while(stack.length){
          let v = stack.pop()
          if(visited.has(v)) continue
          results.push(v)
          visited.add(v)
          let list = this.adjacencyList[v];
          for (let i = 0; i < this.adjacencyList[v].length ;  i++) {
            if(visited.has(list[i])) continue 
            stack.push(list[i])
          }
        }
        return results
    }


    bfs(vertex){
        let queue = [vertex]
        let visited = new Set(vertex)
        let results = []
        
        while(queue.length){
            let item = queue.shift()
            results.push(item)
           
            this.adjacencyList[item].forEach((v)=>{
                 if(!visited.has(v)) {
                     queue.push(v)
                     visited.add(v)
                 } 
            })
        }
        return results
    }

  dfs(vertex) {
    let visited = new Set();
    let results = [];
    const list = this.adjacencyList;

    (function dfsHelper(v = "USA") {
      console.log(v);
      if (!v) return;
      results.push(v);
      visited.add(v);
      list[v];
      list[v].forEach((ver) => {
        if (!visited.has(ver)) {
          dfsHelper(ver);
        }
      });
    })(vertex);

    return results;
  }
}
