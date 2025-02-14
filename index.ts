function calculator(a: number, b: number = 1, operation: string = '+'): number {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : NaN;
        default:
            throw new Error('Invalid operation');
    }
}

//tests
console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5));
console.log(calculator(5, 3));