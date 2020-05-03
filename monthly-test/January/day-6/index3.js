class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
    oddEvenList(head) {
        if (head === null || head.next === null || head.next.next === null) return head;
        rec (head.next, head, head.next);
        return head;
    };
}
var rec = function (evenFirst, odd, even) {
    var nextOdd = odd.next.next;
    odd.next = nextOdd;
    if (nextOdd === null) {
        odd.next = evenFirst;
        even.next = null;
        return;
    }
    var nextEven = even.next.next;
    even.next = nextEven;
    if (nextEven === null) {
        nextOdd.next = evenFirst;
        even.next = null;
        return;
    }
    rec (evenFirst, nextOdd, nextEven);
};

var list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.print()
list.oddEvenList(list.head)
list.print()

//time complexity - O(n)
//space complexity - O(1)





