export const reverse = (l) => {
    //INSERISCI QUI IL TUO CODICE
    let somma = 0
    let reverse = []
    l.forEach(item => {
        reverse.unshift(item)
        somma += item        
    });
    reverse.unshift(somma)    
    return reverse;
}