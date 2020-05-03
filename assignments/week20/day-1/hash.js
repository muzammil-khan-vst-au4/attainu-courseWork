class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
        this.data = null;
    }

    toString() {
        return `${this.value} -> ${this.data}`;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value, data) {
        let newNode = new Node(value);
        if(data) { newNode.data = data; }
        if(!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value, data) {
        let newNode = new Node(value);
        if(data) { newNode.data = data; }
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    search(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) { return currentNode; }
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(valueToDelete) {
        if(!this.head) { return null; }
        if(this.head.value === valueToDelete) {
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            if(currentNode.next.value === valueToDelete) {
                currentNode.next = currentNode.next.next;
                break;
            }
            currentNode = currentNode.next;
        }
        if(this.tail.value === valueToDelete) {
            this.tail = currentNode;
        }
    }

    print() {
        let currentNode = this.head,
            values = [];
        while(currentNode) {
            values.push(currentNode.toString());
            currentNode = currentNode.next;
        }
        console.log(values);
    }
}


class HashTable {
    constructor(size=8) {
        this.size = size;
        this.array = [];

        for(let i = 0; i < this.size; i++) {
            this.array.push( new LinkedList() );
        }
    }

    hash(key) {
        let sum = 0;
        Array.from(key).forEach( v => sum += v.charCodeAt(0) );
        return sum % this.size;
    }

    getList(key) {
        let hash = this.hash(key);
        return this.array[hash];
    }

    set(key, value) {
        let linkedList = this.getList(key);
        let node = linkedList.search(key);

        if(!node) {
            linkedList.append(key, value);
        } else {
            node.data = value;
        }
    }

    get(key, value) {
        let linkedList = this.getList(key);
        let node = linkedList.search(key);

        if(!node) {
            return null;
        } else {
            return node.data;
        }
    }

    delete(key) {
        let linkedList = this.getList(key);
        linkedList.delete(key);
    }

    print() {
        this.array.forEach(a => a.print());
    }
}


let h = new HashTable()
h.set("Instructor", "Rahul")
h.set("Instructor", "Nishant")
h.set("Instructor", "Arkesh")
h.set("Student", "Asdfa")
h.print()
console.log("Instructor is ", h.get("Instructor"))
console.log("Student is ", h.get("Student"))
h.delete("Student")
h.print();
