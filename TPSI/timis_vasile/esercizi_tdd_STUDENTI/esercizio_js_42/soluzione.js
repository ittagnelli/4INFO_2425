export const swap = (l, n, m) => {
    //INSERISCI QUI IL TUO CODICE
    let x = l.at(0);
    l.splice(n,l);
    l.splice( m => 0 ? m : m + 1, 0, x);  
    return l
};
    

