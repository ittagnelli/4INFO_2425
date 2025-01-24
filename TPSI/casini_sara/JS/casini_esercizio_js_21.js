function operate(num1, num2, callback) {
    return callback(num1, num2);
}

function somma(a, b) {
    return a + b;
}

function moltiplicazione(a, b) {
    return a * b;
}

function potenza(a, b) {
    return Math.pow(a, b);
}

function main() {
    console.log("Test 1 (Somma):", operate(5, 10, somma)); 
    console.log("Test 2 (Prodotto):", operate(3, 7, moltiplicazione)); 
    console.log("Test 3 (Potenza):", operate(2, 4, potenza)); 
}

main();
