export default function main() {
    console.log("Hey");
    let graph = new Graph()
    graph.addVertex("Tokyo")
    graph.addVertex("USA")
    graph.addVertex("India")
    graph.addEdge('Tokyo',"USA")
    graph.addEdge("Tokyo","India")
    graph.addEdge("India","USA")
    console.log(graph);
    // graph.removeEdge('Tokyo',"USA")
    graph.removeVertex("Tokyo")
    console.log(graph);
}

class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]  = [] 
        } 
    } 

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1) 
    } 


    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((t)=> t !== v2 )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((t)=> t !== v1 )
    }

    removeVertex(vertex){
            while(this.adjacencyList[vertex].length){
                console.log(this.adjacencyList[vertex]);
                const adjacencyVertex = this.adjacencyList[vertex].pop()
                this.removeEdge(vertex,adjacencyVertex)
            }
            delete this.adjacencyList[vertex]
    }


}
