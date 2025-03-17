export const tronca_parola = (s, pos) => {
   if (typeof s !== 'string' || typeof pos !== 'string') {
      throw new TypeError('Both arguments must be strings');
   }
   return s.replace(pos, '');
};
