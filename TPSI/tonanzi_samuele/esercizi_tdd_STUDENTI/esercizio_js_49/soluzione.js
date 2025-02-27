export const map_arr = (l, n) => {
    //INSERISCI QUI IL TUO CODICE
    return l.map((item) => item % n == 0 ? 0 : item)
};
