function getValue() {
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);
}

var add = document.getElementById('add');
add.addEventListener('click', function() {
  //  getValue();
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);
    var result = (value1 + value2);
    console.log(value1,value2);
    console.log(result);
    document.getElementById('result').innerHTML = result;
});


var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function() {
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);
    var result = (value1 - value2);
    document.getElementById('result').innerHTML = result;
});


var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function() {
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);
    var result = (value1 * value2);
    document.getElementById('result').innerHTML = result;
});


var divide = document.getElementById('divide');
divide.addEventListener('click', function() {
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);
    var result = (value1 / value2);
    document.getElementById('result').innerHTML = result;
});