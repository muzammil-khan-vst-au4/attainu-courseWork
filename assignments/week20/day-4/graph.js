class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjntList = new Map();
    }
  
    addVertex(v){
        this.AdjntList.set(v, []);
    }

    addEdge(v, w){
        this.AdjntList.get(v).push(w);
        this.AdjntList.get(w).push(v);
    }

    // Prints the vertex and adjacency list
    printGraph(){
        let get_keys = this.AdjntList.keys();
        for (let i of get_keys){
            let get_values = this.AdjntList.get(i);
            let conc = "";
            for (let j of get_values){
                conc += j + " ";
            }
            console.log(i + " -> " + conc);
        }
    }
}

let main = new Graph();

main.addVertex("q");
main.addVertex("s");
main.addVertex("f");
main.addVertex("g");
main.addVertex("b");
main.addVertex("v");

main.addEdge("q","s")
main.addEdge("f","v")

main.printGraph();