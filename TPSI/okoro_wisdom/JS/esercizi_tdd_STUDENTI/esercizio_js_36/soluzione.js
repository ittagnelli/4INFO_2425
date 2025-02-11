export const tronca_parola = (s, pos) => {
   const parole = s.split(" ");
   

   return parole.slice(0, pos).join(" ");
};
