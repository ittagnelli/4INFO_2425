export const special_concat = (str1, str2) => {
if (str1.length < 2 || str2.length < 2) {
       return "Le stringhe devono contenere almeno due caratteri";
   }
   
   const swapped1 = str2.slice(0, 2) + str1.slice(2);
   const swapped2 = str1.slice(0, 2) + str2.slice(2);
   
   return swapped1 + swapped2;
};