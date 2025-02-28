export const prod_pow2 = (n) => {
   //INSERISCI QUI IL TUO CODICE
   return n.map((item)=> item**2).reduce((acc,current) => acc * current, 1)

};

