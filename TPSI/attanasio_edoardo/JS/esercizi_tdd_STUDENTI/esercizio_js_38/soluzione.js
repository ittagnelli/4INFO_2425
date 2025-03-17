export const reverse = (l) => {
    //INSERISCI QUI IL TUO CODICE

    let out = []
    l.forEach((_, index) => {
        out.unshift(_)
    });

    return out
};

