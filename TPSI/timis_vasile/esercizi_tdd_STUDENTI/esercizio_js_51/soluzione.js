export const dec_to_bin = (n) => {
   //INSERISCI QUI IL TUO CODICE
   return n.split('').reverse().reduce((dec, i, indice) => dec + i * 2 ** indice, 0);
}; // reverse per leggerlo in modo corretto