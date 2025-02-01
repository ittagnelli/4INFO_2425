export const tronca_parola = (s, pos) => {
   //INSERISCI QUI IL TUO CODICE
   let strs = s.split(' ');
   return strs.slice(0, pos).join(' ');
};
