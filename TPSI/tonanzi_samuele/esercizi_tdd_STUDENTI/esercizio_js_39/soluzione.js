export const reverse = (l) => {
    //INSERISCI QUI IL TUO CODICE
    let new_l = [];
    let somma = 0;

    l.forEach((_,i) => {
        new_l.unshift(_)
        somma += _;
    });

    new_l.unshift(somma);
    return new_l
};