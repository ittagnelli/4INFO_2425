export const invert_case = (str) => {
   //INSERISCI QUI IL TUO CODICE
   let str1 = '';

   for(let i = 0; i < str.length; i++)
      str[i].toUpperCase() == str[i] ? str1 += str[i].toLowerCase() : str1 += str[i].toUpperCase();

   return str1;
}
