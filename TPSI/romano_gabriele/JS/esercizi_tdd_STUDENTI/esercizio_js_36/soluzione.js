export const tronca_parola = (s, pos) => {
   let parole = s.split(' ');

   if (pos < 0)
      parole = parole.slice(0, pos)
   else
      parole = parole.filter((p, i) => i < pos);

   return parole.join(' ');
};