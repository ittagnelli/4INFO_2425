export const insert = (str1, agg, pos) => {
    //INSERISCI QUI IL TUO CODICE
    return str1.slice(0, pos).trimEnd() + " " + agg + " " + str1.slice(pos).trimStart();
};
