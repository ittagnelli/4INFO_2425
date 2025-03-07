export const avg_age = (l) => {
    //INSERISCI QUI IL TUO CODICE
    return l.reduce((acc, studente) => acc + studente.eta, 0) / l.length;
};
