class Node {
    constructor(data) {
        this.data = data ;
        this.left = null ;
        this.right = null ;
    }
}

isBst = (root,left,right) =>{
   // console.log("called isBst\n",root.data,left.data,right.data);
    if (root == null ){
        return true;
    }
    if (left!=null && root.data<left.data){
        return false;
    }
    if (right!=null && root.data>right.data){
        return false;
    }
    return isBst(root.left,left,root) && isBst(root.right,root,right);
}

let root;
// root = new Node(2);
// root.left = new Node(1);
// root.right = new Node(3);
root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);
root.left.left = new Node(null);
root.left.left = new Node(null);
root.right.left =  new Node(3);
root.right.right =  new Node(6);

let result  = isBst(root,null,null);
console.log(result);