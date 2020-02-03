function uniqueChar(string) {
    let obj = {}
    for( let i of string) {
        obj[i] ? obj[i] +=1 : obj[i] = 1
    }
    for (let i = 0; i < string.length; i++) {
        if(obj[string[i]] === 1) return i
    }
    return -1
}

console.log(uniqueChar("loveleetcode"));