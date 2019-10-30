const Calculate = {};

Calculate.add = function(num1, num2, callback) {
    if(!num1 || !num2) {
        return callback("Error!, num1 and num2 are required");
    }

    return callback(null, num1+num2)
}

module.exports = Calculate;