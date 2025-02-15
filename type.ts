//Inference
let message = "Hello, TypeScript!"; // inferred as string
let count = 42; // inferred as number
let isActive = true; // inferred as boolean

// function add(a: number, b: number) {
//     return a + b;
// }

//Assertions
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

let anotherValue: any = "Hello";
let anotherLength: number = (<string>anotherValue).length;

console.log(message, count, isActive);
console.log(add(10, 5));
console.log(strLength, anotherLength);