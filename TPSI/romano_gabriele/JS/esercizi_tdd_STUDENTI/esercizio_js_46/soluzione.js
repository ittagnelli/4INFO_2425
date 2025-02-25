export const prod_pow2 = (n) => {
   n = n.map(num => num ** 2);
   return n.reduce((acc, current) => acc * current, 1);
};
