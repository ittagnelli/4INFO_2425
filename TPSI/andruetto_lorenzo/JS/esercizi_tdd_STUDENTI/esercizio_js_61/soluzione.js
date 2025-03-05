export function count_occurence(text) {
   //INSERISCI QUI IL TUO CODICE
   let map = new Map();
   text.split('').forEach(element => map.set(element, 1));
   return map;
}

