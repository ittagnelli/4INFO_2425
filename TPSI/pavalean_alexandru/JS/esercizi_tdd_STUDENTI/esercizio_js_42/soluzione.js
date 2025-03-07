export const swap = (l, n, m) => {
    //INSERISCI QUI IL TUO CODICE
    const element = l.splice(n, 1)[0];
    l.splice(m, 0, element);
    return l;
};
