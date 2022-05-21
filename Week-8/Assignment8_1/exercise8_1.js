class Node {
    constructor(data){
        this.data = data;
        this.right = null ;
        this.left = null ;
    }
}
let root ;

findDepth = (node) =>{
    if (node == null){
        return 0;
    }
    let ldepth = findDepth(node.left);
    let rdepth = findDepth(node.right);

    return (Math.max(ldepth,rdepth)+1);
}

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(null);
root.left.left = new Node(null);
root.right.left =  new Node(15);
root.right.right =  new Node(7);

let height = findDepth(root);
console.log(height);
