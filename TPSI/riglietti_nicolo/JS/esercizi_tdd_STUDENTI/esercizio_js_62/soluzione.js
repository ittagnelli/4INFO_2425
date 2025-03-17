export const unique_random_numbers = (n, m) => {
   let numeri = new Set()
   while(numeri.size < n)
      numeri.add(Math.floor(Math.random() * m) +1);

   return Array.from(numeri).sort((a, b) => b - a)
}
