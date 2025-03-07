export function count_occurence(text) {
   const words = text.toLowerCase().split(' ');
   const wordMap = new Map();

   if (words) {
       words.forEach(word => {
           if (wordMap.has(word)) {
               wordMap.set(word, wordMap.get(word) + 1);
           } else {
               wordMap.set(word, 1);
           }
       });
   }

   return wordMap;
}

