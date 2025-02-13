export const swap = (l, n, m) => {
    //INSERISCI QUI IL TUO CODICE
    if (n < 0 || n >= l.length || m < 0 || m >= l.length) {
        console.log("Indici fuori dai limiti dell'array");
        return l;
    }
    const element = l.splice(n, 1)[0];
    l.splice(m, 0, element);
    return l;
};
    

