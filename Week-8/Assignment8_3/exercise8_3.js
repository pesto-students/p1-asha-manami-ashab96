class Node {
    constructor(data) {
        this.val = data ;
        this.left = null ;
        this.right = null ;
    }
}


var levelOrder = function(root) {
    
    let results = [];
    let queue = [root];
    if (!root){
        return  results;
    }
    
    while (queue.length){
        let currentLevel = queue.length;
        let currentLevelValues = [];
        for (let i = 0 ;i <currentLevel;i++){
            let node = queue.shift();
            console.log(" node val ",node.val);
            if (node.val){
                currentLevelValues.push(node.val); 
            }           
            if (node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        results.push(currentLevelValues);
        console.log(results);
    
        
    }
    return results;
    
 
};

let root;
root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(null);
root.left.right = new Node(null);
root.right.left =  new Node(15);
root.right.right =  new Node(7);

let result  = levelOrder(root);
console.log(result);