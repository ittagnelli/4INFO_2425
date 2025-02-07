export const special_concat = (str1, str2) => {

   if (str1.length < 2 || str2.length < 2) {
      return str1 + str2;
   }
   return str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2);

};
