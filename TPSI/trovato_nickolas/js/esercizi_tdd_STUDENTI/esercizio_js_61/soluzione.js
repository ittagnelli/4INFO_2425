export function count_occurence(text) {
   const words = text.toLowerCase().match(/\b\w+\b/g) || [];
   const map = new Map();

   for (const word of words) {
       map.set(word, (map.get(word) || 0) + 1);
   }

   return map;
}
