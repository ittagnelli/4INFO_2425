function sumOp(a, b) {
    return a + b;
}

function mulOp(a, b) {
    return a * b;
}

function powOp(a, b) {
    return a ** b;
}

function calculation(a, b, op) {
    return op(a, b)
}

console.log(calculation(3, 4, sumOp));
console.log(calculation(5, 9, mulOp));
console.log(calculation(2, 10, powOp));