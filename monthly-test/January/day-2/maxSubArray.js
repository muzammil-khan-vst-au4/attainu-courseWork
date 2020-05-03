class MaximumSubarray {
    constructor() {
    }
    //implement your code here
    maximumSubarray(array){
        if(array.length == 1) {
            return array[0]
        }
        if(!array) {
            return null;
        }
        let maxSum = array[0], val = 0
        array.forEach(num => {
            maxSum = Math.max(maxSum, val += num)
            val = Math.max(val, 0)
        })
    return maxSum
    }
}

let maximumsubarray = new MaximumSubarray();
let array = []
/* let array = []
let length = Number(prompt("Please enter length of array"))
for(let i = 1; i <= length; i++) {
    let input =  Number(prompt("Please enter your number"))
    array.push(input);
}
console.log(array)
 */console.log(maximumsubarray.maximumSubarray(array))

// mention your time and apace complexity here
//Time complexity - O(n), Space Complexity- O(1)