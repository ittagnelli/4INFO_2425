export const without = (l, n) => {
    //INSERISCI QUI IL TUO CODICE
    let nuovo_array = []
    l.forEach(item => {
        if(item != n){
            nuovo_array.push(item);
        }
    });
    return nuovo_array;
};