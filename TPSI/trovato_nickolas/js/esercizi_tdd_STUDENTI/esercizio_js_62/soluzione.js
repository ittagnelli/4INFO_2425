export const unique_random_numbers = (n, m) => {
   if (n > m) throw new Error("n non può essere maggiore di m");

   const numbers = new Set();
   while (numbers.size < n) {
       numbers.add(Math.floor(Math.random() * m) + 1);
   }

   return [...numbers].sort((a, b) => b - a);
};