var username = 'vijay123@gmail.com';
var password = 'vijay123';

var login = document.getElementById('login');
login.addEventListener('click', function() {
    var inputUserName = document.getElementById('exampleInputEmail1').value;
    var inputPasword = document.getElementById('inputPassword5').value;

    if(inputUserName === username) {
        if(inputPasword === password) {
            alert("Login in Successfull");
        }
    } else {
        alert("Username or password is invalid");
    }
    
});
