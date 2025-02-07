export const tronca_parola = (s, pos) => {
   let parole = s.split(' ');
   return parole.slice(0,pos).join(' ');
};
