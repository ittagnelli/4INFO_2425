export const no_copies = (array) => {
   //INSERISCI QUI IL TUO CODICE
   //return [...new Set(array)];
   return array.filter((a, b) => array.indexOf(a) === b);
}