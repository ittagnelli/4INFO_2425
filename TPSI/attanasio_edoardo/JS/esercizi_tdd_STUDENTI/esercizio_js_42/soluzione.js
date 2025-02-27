export const swap = (l, n, m) => {
    //INSERISCI QUI IL TUO CODICE
    let num = l.splice(n,1)[0]
    l.splice(m >= 0 ? m : m + 1 ,0,num)
    return l
};
