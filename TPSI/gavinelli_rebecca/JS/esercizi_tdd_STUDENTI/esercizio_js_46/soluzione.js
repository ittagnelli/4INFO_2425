export const prod_pow2 = (n) => {
   let prodotto = n.reduce((acc,current) => acc * current**2, 1);
   return prodotto;
};