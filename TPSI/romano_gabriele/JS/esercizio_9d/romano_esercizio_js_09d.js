function compresi(n) {
    somma = 0;
    for(let i = 0; i < n; i++)
        somma += i;
    return somma;
}

let somma;

compresi(5);
console.log(somma);

compresi(7);
console.log(somma);

compresi(10);
console.log(somma);