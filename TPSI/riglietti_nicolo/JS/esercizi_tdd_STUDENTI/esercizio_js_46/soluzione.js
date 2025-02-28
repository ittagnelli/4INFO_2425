export const prod_pow2 = (n) => {
   return n.map(numero => numero ** 2).reduce((acc, current) => acc * current, 1)
};

