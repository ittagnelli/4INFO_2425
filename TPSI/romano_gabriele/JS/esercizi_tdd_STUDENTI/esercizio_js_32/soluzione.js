export const special_concat = (str1, str2) => {
   str1 = str1.split(' ')
   str2 = str2.split(' ')

   if (str1[0] && str2[0] && str1.length == 1 && str2.length == 1)
      return str2[0].slice(0,2) + str1[0].slice(2) + str1[0].slice(0,2) + str2[0].slice(2);
   
   else
      return 'parole non adatte';
};
