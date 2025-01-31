function calculation(a, b, op) {
    return op(a, b);
}

console.log(calculation(3, 2, (a, b) => a + b)); 
console.log(calculation(3, 45, (a, b) => a * b)); 
console.log(calculation(12, 4, (a, b) => a ** b)); 