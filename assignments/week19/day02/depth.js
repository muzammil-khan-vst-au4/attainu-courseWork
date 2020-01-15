function maxDepth(node) {
    if(node == null) {
        return 0;
    }
    if(node.left == null && node.right == null) {
        return 1;
    }
    else {
        let l = maxDepth(node.left);
        let r = maxDepth(node.right);
        return (1+ (l>r) ? l : r);
    }
}