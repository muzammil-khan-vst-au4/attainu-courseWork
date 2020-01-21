function majorityElem(arr){
    let counter = new Array(256);
    counter.fill(0);
    for(let i=0; i<arr.length;i++){
      let x = arr[i].toString();
      counter[x.charCodeAt(0)]++;
    }
    let max = 0;
    for(let i=0; i<256; i++){
      if(counter[i] > max){
        max = i+1;
      }
    }
    return String.fromCharCode(max);
  }
  let arr1 = [3,2,3];
  let arr2 = [2,2,1,1,1,2,2];
  majorityElem(arr1);