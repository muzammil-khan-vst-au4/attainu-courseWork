const Calculate = {};

//addition logic
Calculate.add = function(num1, num2, callback) {
    if(!num1 || !num2) {
        return callback("Error!, num1 and num2 are required");
    }

    return callback(null, num1+num2);
}

//subtraction logic
Calculate.sub = function(num1, num2, callback) {
    if(!num1 || !num2) {
        return callback("Error!, num1 and num2 are required");
    }

    return callback(null, num1-num2);
}

//multiplication logic
Calculate.mul = function(num1, num2, callback) {
    if(!num1 || !num2) {
        return callback("Error!, num1 and num2 are required");
    }

    return callback(null, num1*num2);
}

//division logic
Calculate.div = function(num1, num2, callback) {
    if(!num1 || !num2) {
        return callback("Error!, num1 and num2 are required");
    }

    return callback(null, num1/num2);
}

module.exports = Calculate;