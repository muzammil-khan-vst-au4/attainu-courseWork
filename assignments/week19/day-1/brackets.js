function isBalanced(str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let char in str) {
        if (str[char] === '(' || str[char] === '{' || str[char] === '[' ) {
            stack.push(str[char]);
        }
        else {
            let last = stack.pop();
            //console.log(map[last])
            if (str[char] !== map[last]) {return false};
        }
    }
    if (stack.length !== 0) {return false};
    return true;
}
console.log(isBalanced("([])"))