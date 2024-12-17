function operazioneConCallback(num1, num2, callback) {
    return callback(num1, num2);
}

function somma(a, b) {
    return a + b;
}

function prodotto(a, b) {
    return a * b;
}

function elevamentoPotenza(a, b) {
    return Math.pow(a, b);
}

function main() {
    let num1 = 9, num2 = 4;

    let risultatoSomma = operazioneConCallback(num1, num2, somma);
    console.log(`Somma: ${risultatoSomma}`);

    let risultatoProdotto = operazioneConCallback(num1, num2, prodotto);
    console.log(`Prodotto: ${risultatoProdotto}`);

    let risultatoPotenza = operazioneConCallback(num1, num2, elevamentoPotenza);
    console.log(`Elevamento a potenza: ${risultatoPotenza}`);
}

main();
