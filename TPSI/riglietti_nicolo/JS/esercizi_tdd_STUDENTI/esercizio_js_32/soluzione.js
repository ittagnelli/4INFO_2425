export const special_concat = (str1, str2) => {

   return (!str1 || !str2 || str1.includes(" ") || str2.includes(" ")) ? 'parole non adatte' : str2.slice(0, 2) + str1.slice(2) + str1.slice(0, 2) + str2.slice(2);

};
