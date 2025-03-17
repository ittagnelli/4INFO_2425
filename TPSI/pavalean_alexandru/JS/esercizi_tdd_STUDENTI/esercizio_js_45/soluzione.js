export const only_upper = (s) => {
    //INSERISCI QUI IL TUO CODICE
    return s.split("").filter(char => char === char.toUpperCase() && char !== char.toLowerCase());
};
