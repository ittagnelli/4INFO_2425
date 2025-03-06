export const prod_pow2 = (n) => {
   return n.reduce((acc, num) => acc * Math.pow(2, num), 1);
};