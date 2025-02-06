export const tronca_parola = (s, pos) => {
   //INSERISCI QUI IL TUO CODICE
let stringa_estratta = s.slice(s[pos], s.lenght)
return s.replace(stringa_estratta, ' ')
};
