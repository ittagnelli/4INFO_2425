export const swap = (l, n, m) => {
    //INSERISCI QUI IL TUO CODICE
    let elemento = l.splice(n, 1)[0];
    return l.splice(m, 0, elemento);
};
