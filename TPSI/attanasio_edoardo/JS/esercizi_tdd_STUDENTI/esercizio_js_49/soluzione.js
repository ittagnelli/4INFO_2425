export const map_arr = (l, n) => {
    //INSERISCI QUI IL TUO CODICE
    return l.map(numero => numero % n == 0 ? 0 : numero);
};
