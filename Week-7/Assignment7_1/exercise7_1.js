class Node {
    constructor(element){
        this.element = element;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0 ;
    }
    add(element){
        var  node = new Node(element);
        var current ;
        if (this.head == null){
            this.head = node;
        }else {
            current = this.head;
            while(current.next){
                current =current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    reverse(){
        var current = this.head ;
        var previous = null;
        var next = null;
        while(current!= null){
           next = current.next;
           current.next  = previous ;
           previous = current;
           current = next ;

        }
        this.head = previous;

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

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.printList();
list.reverse();//Time complexity is O(n), Space Complexity is O(1)
list.printList();