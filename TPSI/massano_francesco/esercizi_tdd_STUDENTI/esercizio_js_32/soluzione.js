export const special_concat = (str1, str2) => {
   let parola1 = str1.split(' ');
   let parola2 = str2.split(' ');
   if(parola1.length > 1 || parola2.length > 1){
      return 'parole non adatte';
   }
   else if(parola1 == '' || parola2 == ''){
      return 'parole non adatte';
   }
   else{
      parola1 = str2[0] + str2[1] + str1.slice(2);
      parola2 = str1[0] + str1[1] + str2.slice(2);
      return parola1.concat(parola2);
   }

};
