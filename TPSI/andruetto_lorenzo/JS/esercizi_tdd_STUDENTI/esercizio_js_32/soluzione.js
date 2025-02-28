export const special_concat = (str1, str2) => {
   //INSERISCI QUI IL TUO CODICE
   if(!str1 || !str2 || str1.includes(' ') || str2.includes(' '))
      return 'parole non adatte';

   let nStr1 = str2.slice(0, 2) + str1.slice(2);
   let nStr2 = str1.slice(0, 2) + str2.slice(2);
   
   return nStr1 + nStr2;
};
