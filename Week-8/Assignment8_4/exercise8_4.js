var validPath = function(n, edges, source, destination) {
    let nodes = [];

    for(let i = 0; i < n; i++) {
        nodes[i] = {
            val:i,
            edges:[]
        };
    }

    for(let j = 0; j < edges.length; j++) {
        let edge = edges[j];
        nodes[edge[0]].edges.push(edge[1]);
        nodes[edge[1]].edges.push(edge[0]);
    }
    
    let valid = false
    let visited = {};
    let queue = [];
    queue.push(nodes[source]);

    while( queue.length != 0 ) {
        let node = queue.shift();
        visited[node.val] = true;
        
        if( node.val == destination ) {
            valid = true;
            break;
        }
        
        node.edges.forEach(edge => {
           if(visited[edge] === undefined) {
               queue.push(nodes[edge]);
           } 
        });
    }
    
    return valid;
};

let edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];//[[0,1],[1,2],[2,0]];
let n = 6;
let source = 0;
let destination = 5;
let result = validPath(n,edges,source,destination);
console.log(result);