export const tronca = (s, n) => {
    //INSERISCI QUI IL TUO CODICE
let stringa_estratta = s.slice(n, s.lenght)
return s.replace(stringa_estratta, '...')
};