export const special_concat = (str1, str2) => {
   //INSERISCI QUI IL TUO CODICE
   if (!str1 || !str2)
      return 'parole non adatte';
   else if(str1.includes(' ') || str2.includes(' '))
      return 'parole non adatte';

   let nStr1 = str2[0] + str2[1] + str1.substring(2);
   let nStr2 = str1[0] + str1[1] + str2.substring(2);

   return nStr1 + nStr2;
};
