export const prod_pow2 = (n) => {
   //INSERISCI QUI IL TUO CODICE
   let sum = 1;
   n.map(item => sum *= item ** 2);
   return sum;
};

