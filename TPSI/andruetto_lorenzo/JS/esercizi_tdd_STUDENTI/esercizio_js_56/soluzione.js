export const avg_age = (l) => {
    //INSERISCI QUI IL TUO CODICE
    let sum = 0;
    l.forEach(object => sum += +object.eta)
    return sum / l.length;
};
