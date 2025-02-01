export const tronca = (s, n) => {
    //INSERISCI QUI IL TUO CODICE    
    return s.length < n ? s : s.substring(0, n) + '...';
};