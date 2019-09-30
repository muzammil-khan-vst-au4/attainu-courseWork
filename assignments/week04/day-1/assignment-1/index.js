function getValue() {
    var value1 = parseInt(document.getElementById('value1').value);
    var value2 = parseInt(document.getElementById('value2').value);
    console.log(value1,value2);
    console.log(typeof(value1), typeof(value2));
}

var add = document.getElementById('add');
add.addEventListener('click', function() {
    getValue();
    var result = (value1 + value2);
    var  temp= document.getElementById('result');
    temp.innerHTML = parseInt(result);
});


var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function() {
    return value1 - value2;
});


var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function() {
    return value1 * value2;
});


var divide = document.getElementById('divide');
divide.addEventListener('click', function() {
    return value1/value2;
});