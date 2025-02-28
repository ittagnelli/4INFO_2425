export const tronca_parola = (s, pos) => {
   let list = s.split(' ');
   return list.slice(0, pos).join(' ');
};
