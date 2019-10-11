//var stringOne = prompt("To calculate hamming distance, enter string one.");
//var stringTwo = prompt("To calculate hamming distance, enter string two.");

var stringOne = "This is string one";
var stringTwo = "This is string two";
var hammingDistance = 0;
console.log(stringOne);
console.log(stringTwo);
if(stringOne.length === stringTwo.length) {
	for(var i=0; i<stringOne.length; i++) {
		if(stringOne[i]!==stringTwo[i]) {
			hammingDistance++;
		}
	}
}else {
	console.log("Strigs not of equal length");
}
//alert("hamming distance is "+hammingDistance);
console.log("hamming distance between string one and two is "+hammingDistance);