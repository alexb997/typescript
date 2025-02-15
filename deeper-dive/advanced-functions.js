function calculate(a, b, operation, callback) {
    var result = operation(a, b);
    callback(result);
}
var add = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };
calculate(5, 3, add, function (result) { return console.log("Addition Result:", result); });
calculate(5, 3, multiply, function (result) { return console.log("Multiplication Result:", result); });
function formatInput2(input) {
    if (typeof input === "string") {
        return input.trim().toUpperCase();
    }
    else {
        return input * 2;
    }
}
console.log(formatInput2(" hello "));
console.log(formatInput2(10));
