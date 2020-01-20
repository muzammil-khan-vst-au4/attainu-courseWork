function isPalindrome(num) {
    let stack = [];
    let reverseNum = [];
    num = Array.from(String(num), Number)
    //console.log(num);
    for(i=0; i< num.length; i++) {
        stack.push(num[i]);
    }
    for(i=0; i< num.length; i++) {
        reverseNum.push(stack.pop());
    }
    num = num.join('')
    reverseNum = reverseNum.join('')
    if(num === reverseNum) {
        console.log(`${num} is a palindrome`)
    }else {
        console.log(`${num} is not a palindrome`)
    }
}

isPalindrome(11211);