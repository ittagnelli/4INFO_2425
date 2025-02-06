export const tronca_parola = (s, pos) => {
   //INSERISCI QUI IL TUO CODICE
   let words = s.split(' ');
   return words.slice(0, pos).join(' ');
};
