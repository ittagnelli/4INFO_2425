export function deduplicate(arr) {
   let arrayNoDuplicati = new Set(arr);
   return Array.from(arrayNoDuplicati);
    
    
}
