//Inference
var message = "Hello, TypeScript!"; // inferred as string
var count = 42; // inferred as number
var isActive = true; // inferred as boolean
function add(a, b) {
    return a + b;
}
//Assertions
var someValue = "This is a string";
var strLength = someValue.length;
var anotherValue = "Hello";
var anotherLength = anotherValue.length;
console.log(message, count, isActive);
console.log(add(10, 5));
console.log(strLength, anotherLength);
