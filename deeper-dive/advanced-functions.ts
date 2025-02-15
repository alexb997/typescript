type Callback = (result: number) => void;

function calculate(a: number, b: number, operation: (x: number, y: number) => number, callback: Callback): void {
    const result = operation(a, b);
    callback(result);
}

const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;

calculate(5, 3, add, (result) => console.log("Addition Result:", result));
calculate(5, 3, multiply, (result) => console.log("Multiplication Result:", result));

function formatInput2(input: string): string;
function formatInput2(input: number): number;
function formatInput2(input: string | number): string | number {
    if (typeof input === "string") {
        return input.trim().toUpperCase();
    } else {
        return input * 2;
    }
}

console.log(formatInput2(" hello "));
console.log(formatInput2(10));
