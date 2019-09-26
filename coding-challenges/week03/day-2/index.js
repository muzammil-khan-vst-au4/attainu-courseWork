var str='malayalam';
if(!str) {
	console.log("Enter valid string");
}
else{
	if(str == str.split('').reverse().join('')){
	console.log("String is palindrome");
	}
	else { 
		console.log("String is not palindrome");
      }
}

//Palindrome using function
function isPalindrome(str) {
    if(str) {
        return str == str.split('').reverse().join('');
    }
    else {
        console.log("Enter valid string");
    }
}

isPalindrome('abc');