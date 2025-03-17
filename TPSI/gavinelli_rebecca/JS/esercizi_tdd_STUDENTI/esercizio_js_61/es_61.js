export function count_occurence(text) {
    const words = text.split(/\s+/);
     const wordCount = new Map();
 
     words.forEach(word => {
         wordCount.set(word, (wordCount.get(word) || 0) + 1);
     });
 
     return wordCount;
 }