class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    insert(val){
        if(!this.value){
            this.value = val;
            return;
        }

        if(val <= this.value){
            if(this.left){
                return this.left.insert(val);
            } 
            else{
              this.left = new Node(val);
              this.left.parent = this;
            }
        }
        else {
          if(this.right){
                return this.right.insert(val);
            } else{
                this.right = new Node(val);
                this.right.parent = this;
            }
        }
    }
    rightMostElem(){
        let arr = [];
        let curr_node = this;
        arr.push(curr_node.value);
        // console.log("curr_node",curr_node);
        while(curr_node){
          curr_node = curr_node.right;
          if(curr_node){
            arr.push(curr_node.value);
          }
        }
        console.log("arr",arr);
    }
    inOrderRecursive(){
        if(this.left){
            this.left.inOrderRecursive()
        }
        console.log(this.value);
        if(this.right){
            this.right.inOrderRecursive()
        }
    }
}

class BST {
	constructor() {
		this.root = new Node();
	}
  insert(value){
    this.root.insert(value);
  }
  rightMostElem(){
      this.root.rightMostElem();
  }
  inOrderRecursive(){
    this.root.inOrderRecursive();
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.inOrderRecursive();
console.log(tree.rightMostElem());