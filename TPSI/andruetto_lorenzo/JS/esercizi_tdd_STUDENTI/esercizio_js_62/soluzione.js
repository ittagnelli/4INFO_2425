export const unique_random_numbers = (n, m) => {
   //INSERISCI QUI IL TUO CODICE   
   // return Array(n).fill(Math.floor(Math.random() * (m + 1))).sort((a, b) => b - a);
   let numeri = new Set();
   while (numeri.size < n)
      numeri.add(Math.ceil(Math.random() * m));

   return Array.from(numeri).sort();
}
