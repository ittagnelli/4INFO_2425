export const prod_pow2 = (n) => {
   let quadrati = n.reduce((acc, current) => acc * Math.pow(current, 2), 1); 

   // let n_elevato = n.map((n) => Math.pow(n, 2));
   // print(n_elevato);
   // let somma = n_elevato.reduce((acc, current) => acc * current, 0);
   return quadrati;
};

