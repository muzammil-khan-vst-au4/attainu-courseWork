var index = function search(array, number) {
    if(array[array.length - 1] < number) {
        return array.length
    } 
    for (let i = 0; i < array.length; i++) {
        if(array[i] == number || array[i] > number) {
            return i
        }         
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i]< number) {
            return i
        }
    }
}
console.log(index([1,3,5,6],7));