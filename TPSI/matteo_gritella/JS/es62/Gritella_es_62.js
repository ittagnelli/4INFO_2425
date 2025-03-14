export const unique_random_numbers = (n, m) => {
   let arr = new Set;
   while(arr.size < n){
      arr.add(Math.floor(Math.random() * m))
   }
   arr = Array.from(arr);
   arr.sort((a,b) => {
      return b - a;
   })
   return arr;
}