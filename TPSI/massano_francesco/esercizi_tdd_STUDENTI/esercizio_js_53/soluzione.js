export const shuffle = (l, m) => {
   let array1 = l.slice(0,m);
   let array2 = l.slice(m+1, l.length);
   let arrayFinale = array2.concat(array1);
   return arrayFinale;
};