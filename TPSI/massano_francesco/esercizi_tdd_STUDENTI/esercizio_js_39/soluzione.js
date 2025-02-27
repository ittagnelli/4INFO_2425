export const reverse = (l) => {
    let somma = 0;
    let risultato = [];
    l.forEach(n => {
        risultato.unshift(n);
        somma += n;
    });

    risultato.unshift(somma);
    return risultato;
}