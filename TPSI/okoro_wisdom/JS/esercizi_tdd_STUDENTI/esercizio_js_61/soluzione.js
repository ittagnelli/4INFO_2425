export function count_occurence(text) {
   const new_map = new Map()
   const normale = text.toLowerCase().filter(word => word.length > 0)

       for (const word of normale) {
           new_map.set(word, (new_map.get(word) || 0) + 1);
       }
   
       return new_map;
   
 }
 
 