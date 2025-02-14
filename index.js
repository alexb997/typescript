function calculator(a, b, operation) {
    if (b === void 0) { b = 1; }
    if (operation === void 0) { operation = '+'; }
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
