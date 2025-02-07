export const invert_case = (str) => {
   let str2 = '';

   for(let i = 0; i < str.length; i++){
      if(str[i] == str[i].toUpperCase()){
         str2 += str[i].toLowerCase();
      }else{
         str2 += str[i].toUpperCase();
      }
   }

   return str2
}
