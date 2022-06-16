export default function main() {
    console.log("Hey");
    let graph = new WeightedGraph()
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    
    graph.addEdge("A","B", 4);
    graph.addEdge("A","C", 2);
    graph.addEdge("B","E", 3);
    graph.addEdge("C","D", 2);
    graph.addEdge("C","F", 4);
    graph.addEdge("D","E", 3);
    graph.addEdge("D","F", 1);
    graph.addEdge("E","F", 1);
    console.log(graph.shortestDistance("A","E"));
}


class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = []
    }

    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight})
        this.adjacencyList[vertex2].push({node:vertex1,weight})
    }

    shortestDistance(vertex1,vertex2){
        let distances = {}
        let priorityQueue = new PriorityQueue()
        let prev = {}
        for(let key in this.adjacencyList){
            distances[key] = Infinity
            prev[key] = null
            if(key == vertex1) continue
            priorityQueue.enqueue(key,Infinity)
        }
         distances[vertex1] = 0
       
         priorityQueue.enqueue(vertex1,0)
         let smallest 
         while(priorityQueue.values.length){
           
            smallest = priorityQueue.dequeue().val
         
            if(smallest === vertex2) {
                // We are done 
                let path  = []
                while(prev[smallest]){
                   path.push(smallest)
                   smallest = prev[smallest]
                }
                console.log(path.concat(smallest).reverse( ));
                return 
            
            }

            if(smallest ||  distances[smallest]  !== Infinity) {
                  for(let neighbor in this.adjacencyList[smallest]){
                        let nextNode = this.adjacencyList[smallest][neighbor]
                        console.log(nextNode);   
                        let candidate = distances[smallest] + nextNode.weight
                        let nextNeighbor = nextNode.node
                        console.log(candidate);
                        if(candidate < distances[nextNeighbor]){
                            distances[nextNeighbor] = candidate
                            prev[nextNeighbor] = smallest
                            priorityQueue.enqueue(nextNeighbor,candidate)
                        }

                  }  
            }


         }


    }


}


class PriorityQueue {
     constructor(){
        this.values = []
      }

      enqueue(val,priority){
        this.values.push({val,priority})
        this.sort()
      }

      dequeue(){
         return  this.values.shift()       
      }

      sort(){
         this.values.sort((a,b)=>a.priority - b.priority)
      }

}