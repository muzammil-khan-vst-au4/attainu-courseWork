function merge(array1, array2){
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while(i < array1.length && j < array2.length){
        if(array2[j] > array1[i]){
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j])
            j++;
        }
    }
    while(i < array1.length) {
        mergedArray.push(array1[i])
        i++;
    }
    while(j < array2.length) {
        mergedArray.push(array2[j])
        j++;
    }
    return mergedArray;
}

function mergeSort(array){
    if(array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([2,0,2,1,1,0]))