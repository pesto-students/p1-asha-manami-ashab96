class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0 ;

    }
    add(element){
        var node = new Node(element);
        var  current;
        if (this.head === null){
            this.head = node;
        }else {
            current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = node;
        } 
        this.size++;
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

loopForm = (list ,n,x) => {
    var head = list.head ;
    var Nodex ;
    var lastNode;
    if (x==0 || x>=n){
        return false;
    }
    else {
        lastNode = head;
        while (lastNode.next){
            if (x==1){
                Nodex = lastNode
            }
              lastNode = lastNode.next;
              x--;
        }
        lastNode.next = Nodex;
        return true;

    }
    
        
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.printList();
let result = loopForm(list,3,2);  //  Time complexity is O(n), and Space complexity O(1)
console.log(result);

