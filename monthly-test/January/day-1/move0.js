class MoveZeros {
    constructor() {
    }
  
    //implement your code here
    moveZeros(array){
        if(array.length === 0) {
            return false
        }
        if(array.length == 1) {
            return array;
        }
        for (let i = 1; i < array.length; i++) {
            for (let j = 0; j < array.length - i; j++) {
                if(array[j] == 0) {
                    console.log(i, j);
                    [array[j], array[j+1]] = [array[j+1], array[j]]
                }
            }
        }
        return array
    }
}
  
let movezeros = new MoveZeros();
let array = [];
let length = Number(prompt("Please enter the length of array"));
for(let i = 1; i <= length; i++) {
   let input =  Number(prompt("Please enter your number"));
   array.push(input);
}
console.log(array);
movezeros.moveZeros(array);