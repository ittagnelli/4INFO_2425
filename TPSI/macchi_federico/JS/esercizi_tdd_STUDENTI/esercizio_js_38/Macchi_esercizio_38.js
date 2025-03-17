export const reverse = (l) => {
    let risultato = new Array(l.length);
    l.forEach((element, index) => {
        risultato[l.length - 1 - index] = element;
    });
    return risultato;
};
