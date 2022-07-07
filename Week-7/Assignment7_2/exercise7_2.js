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
    rotate(k){
        var current = this.head ;
        var count = 1;
        while (current.next!=null  && count<k){
            current = current.next;
            count++;
        }
        let kthNode = current ;
        if (current == null)
        return;
        while (current.next!=null){
            current = current.next;
        }
        current.next = this.head;
        this.head = kthNode.next
        kthNode.next = null;
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
list.add(2);
list.add(4);
list.add(7);
list.add(8);
list.add(9);
list.printList();
list.rotate(3);//Time Complexity is O(n), Space Complexity is O(1)
list.printList();