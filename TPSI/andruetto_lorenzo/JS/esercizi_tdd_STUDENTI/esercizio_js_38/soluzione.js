export const reverse = (l) => {
    //INSERISCI QUI IL TUO CODICE
    let new_array = new Array();
    
    l.forEach((_) => {
        new_array.unshift(_);
    });
    
    return new_array;
};

