export const tronca_parola = (s, pos) => {
   //INSERISCI QUI IL TUO CODICE
   let list = s.split(' ');
   return list.slice(0, pos).join(' ');
};
