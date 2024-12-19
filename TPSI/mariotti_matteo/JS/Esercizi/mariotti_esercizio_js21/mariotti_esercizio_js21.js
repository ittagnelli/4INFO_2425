function operazione(num1, num2, callback) {
    return callback(num1, num2);
}

function somma(a, b) {
    return a + b;
}

function prodotto(a, b) {
    return a * b;
}

function elevamentoAPotenza(base, esponente) {
    return Math.pow(base, esponente);
}

const risultatoSomma = operazione(5, 3, somma);
console.log(`La somma è: ${risultatoSomma}`);

const risultatoProdotto = operazione(5, 3, prodotto);
console.log(`Il prodotto è: ${risultatoProdotto}`);

const risultatoElevamento = operazione(2, 3, elevamentoAPotenza);
console.log(`L'elevamento a potenza è: ${risultatoElevamento}`);
