export const tronca_parola = (s, pos) => {
    //INSERISCI QUI IL TUO CODICE
    const parole = s.split(" ");
    
    return parole.slice(0, pos).join(" ");
 };