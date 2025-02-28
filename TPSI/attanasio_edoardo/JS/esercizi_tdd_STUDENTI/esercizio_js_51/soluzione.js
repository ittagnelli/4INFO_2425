export const dec_to_bin = (n) => {
   //INSERISCI QUI IL TUO CODICE
   return n.split('').reverse().reduce((acc, bit, index) => acc + bit * 2**index, 0)
};