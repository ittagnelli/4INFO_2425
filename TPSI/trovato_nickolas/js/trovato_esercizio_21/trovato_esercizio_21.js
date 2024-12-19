function calcola(n1, n2, operazione) {
    return operazione(n1, n2);
}

function addizione(x, y) {
    return x + y;
}

function moltiplicazione(x, y) {
    return x * y;
}

function esponente(x, y) {
    return Math.pow(x, y);
}

function avvia() {
    console.log("Risultato addizione di 5 e 7:", calcola(5, 7, addizione));
    console.log("Risultato moltiplicazione di 5 e 7:", calcola(5, 7, moltiplicazione));
    console.log("Risultato esponente di 5 elevato a 7:", calcola(5, 7, esponente));
}

avvia();
