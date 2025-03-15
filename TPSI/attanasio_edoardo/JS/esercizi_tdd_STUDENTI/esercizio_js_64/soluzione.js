export const count_vocals = (str) => {
    //INSERISCI QUI IL TUO CODICE
    let mappa = new Map();
    let vocali = ['a', 'e', 'i', 'o', 'u'];
    
    str.split('').forEach(carattere => {
        vocali.includes(carattere.toLowerCase()) ? mappa.set(carattere.toLowerCase(), (mappa.get(carattere.toLowerCase()) || 0) + 1) : '';     
    });    
    return mappa
}

