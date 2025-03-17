export const prod_pow2 = (n) => {
   //INSERISCI QUI IL TUO CODICE
   return n.map(num => num ** 2).reduce((acc, num) => acc * num, 1);
};