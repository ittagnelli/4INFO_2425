export const reverse = (l) => {
<<<<<<< HEAD
    let inverso = [];
    l.forEach(item => {
        inverso.unshift(item)
    });
    return inverso
=======
    //INSERISCI QUI IL TUO CODICE
    let s = 0;
    let inverso = [];
    l.forEach(item => {
        inverso.unshift(item)
        s += item
    });
    inverso.unshift(s)
    return inverso
    


    
>>>>>>> 7c89c5b (consegna esercizi)
};

