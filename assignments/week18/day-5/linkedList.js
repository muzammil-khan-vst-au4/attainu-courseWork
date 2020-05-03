class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this
    }
    print() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
    delete(value) {
        if(this.head.value == value) {this.head = this.head.next}
        let current = this.head;
        let prev;

        while(current) {
            if(current.next && current.next.value == value) {
                current.next = current.next.next;
            }
            prev = current
            current = current.next
        }
        this.tail = prev;
    }
}

let list = new LinkedList();
list.push(1)
list.push(2)
list.push(6)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.print();
list.delete(6);
console.log("After removal of value")
list.print();
