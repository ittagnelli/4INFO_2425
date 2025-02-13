export const invert_case = (str) => {
   //INSERISCI QUI IL TUO CODICE
   let str1 = ''

   for(let i = 0; i < str.length; i++)
      str1 += str[i].toUpperCase() == str[i] ? str[i].toLowerCase() : str[i].toUpperCase()
   return str1;
}
