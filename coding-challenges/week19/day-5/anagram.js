function anagram(str1, str2) {
    if(str1. length !== str2.length) {
        return false
    }
    let frequecyCounter1 = {};
    for(let char of str1){
        frequecyCounter1[char] = (frequecyCounter1[char] || 0) +1;
    }
    console.log(frequecyCounter1);
    for(let char of str2) {
        console.log(char)
        if(frequecyCounter1[char]) {
            frequecyCounter1[char] -= 1 
        }else {
            return false
        }
    }
    return true;
}

console.log(anagram('anagram', 'nagaram'));