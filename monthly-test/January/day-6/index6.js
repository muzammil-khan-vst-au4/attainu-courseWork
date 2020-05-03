function commonPrefix(strings) {
    if (strings.length === 0) return ''
    var result = '';
    for(var i = 0; i < strings[0].length; i++) {
        if (strings.every(item => {
                return strings[0][i] === item[i];
            })) {
            result += strings[0][i];
        } else {
            break;
        }
    }
    return result;
}

console.log(commonPrefix(["flower","flow","flight"]))

//time complexity - O(n)
//space complexity - O(n)