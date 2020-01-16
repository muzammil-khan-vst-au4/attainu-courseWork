class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    PreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    PreOrderIt(){
        let data = [];
        if(this.root) {
            data.push(this.root)
        }
        let res = [];
        while(data.length) {
            let node = data.pop();
            res.push(node.value);
            if(node.right) {
                data.push(node.right)
            }
            if(node.left) {
                data.push(node.left)
            }
        }
        return res
    }
    InOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    InOrderIt() {
        let result = [];
        let stack = [];
        let currentNode = this.root;
        stack.push(this.root);

        while(stack.length){
            while(currentNode){
                currentNode = currentNode.left;
                stack.push(currentNode);
            }
            if(stack.length){
                currentNode = stack.pop();
                if(currentNode){
                    result.push(currentNode.value);
                    currentNode = currentNode.right;
                    stack.push(currentNode);
                }
            }
        }
        return result
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log("Inorder recursive => "+tree.InOrder());
console.log("Inorder iterative => "+tree.InOrderIt());
console.log("Preorder recursive => "+tree.PreOrder())
console.log("Preorder iterative => "+tree.PreOrderIt())