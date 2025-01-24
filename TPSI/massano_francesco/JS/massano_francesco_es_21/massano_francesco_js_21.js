function calcola(n1, n2, risultato) {

    return risultato(n1, n2);
}

console.log(calcola(5, 7, (n1, n2) => n1 + n2));

console.log(calcola(10, 30, (n1, n2) => n1 * n2)); 

console.log(calcola(13, 20, (n1, n2) => n1 ** n2)); 