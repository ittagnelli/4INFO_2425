export const prod_pow2 = (n) => {
   return n.reduce((prod, num) => prod * (num ** 2), 1);
};
 