export const avg_age = (l) => {
    //INSERISCI QUI IL TUO CODICE

    return l.reduce((acc,curr)=> acc + curr.eta ,0 )/ l.length

};
