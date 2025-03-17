export const avg_age = (l) => {
    //INSERISCI QUI IL TUO CODICE
    return l.reduce((acc, oggetto) => acc + oggetto.eta, 0) / l.length
};
