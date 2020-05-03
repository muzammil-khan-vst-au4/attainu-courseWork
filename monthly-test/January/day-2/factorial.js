class Factorial {
    constructor() {
    }
    //implement your code here
    factorial(number){
        if(number == 0 || number == 1) {
            return 1
        }
        return number * this.factorial(number-1) 
    }
    factTopDown(number) {
        let total = 1;
        for(let i = number; i > 1; i--){
            total *= i
        }
        return total;
    }
    factBottomUp(number) {
        let total = 1;
        for(let i = 1; i <= number; i++){
            total *= i
        }
        return total;
    }
}

let factorial = new Factorial();
factorial.factorial(Number(prompt("Please enter your number")))
/* console.log(factorial.factorial(4))
console.log(factorial.factTopDown(4))
console.log(factorial.factBottomUp(4)) */

// mention your time and apace complexity here
//The time complexity for both the approaches will be O(n). As the value of n increases the no. of operations increase.
/*

Recursive(bottom up Approach) 
    time complexity -  O(n) 
    space cccomplexity - O(1)
    
Iterative(top down Appraoch)
    time complexity -  O(n) 
    space ccomplexity - O(1)

Iterative(Bottom Up Appraoch)
    time complexity -  O(n) 
    space ccomplexity - O(1)
  */ 
