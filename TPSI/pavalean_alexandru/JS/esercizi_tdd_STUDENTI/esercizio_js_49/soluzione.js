export const map_arr = (l, n) => {
    //INSERISCI QUI IL TUO CODICE
    l = l.map(t => {
        if(t % n == 0) { // controllo se è multiplo
          return 0;
        }
        else {
            return t;
        }
    })
    return l;
};
