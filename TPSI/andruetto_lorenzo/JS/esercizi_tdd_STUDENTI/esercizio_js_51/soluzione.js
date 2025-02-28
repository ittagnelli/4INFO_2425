export const dec_to_bin = (n) => {
   //INSERISCI QUI IL TUO CODICE
   let sum = 0;
   n.split('').reverse().forEach((elmnt, i) => sum += elmnt * 2 ** i);
   return sum;
};