export const unique_random_numbers = (n, m) => {
   let set = new Set();

   while (set.size < n) {
      set.add(Math.trunc(Math.random() * m));
   }

   return [...set].sort((a, b) => a - b);
}
