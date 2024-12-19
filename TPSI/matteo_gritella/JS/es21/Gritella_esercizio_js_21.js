function operazioni(num1, num2, callback) {
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
  console.log("Test 1 (Somma):", operazioni(2, 3, somma)); 
  console.log("Test 2 (Prodotto):", operazioni(5, 6, moltiplicazione)); 
  console.log("Test 3 (Potenza):", operazioni(4, 2, potenza)); 
}

main()