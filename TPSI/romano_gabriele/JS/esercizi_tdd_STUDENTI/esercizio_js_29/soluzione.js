export const invert_case = (str) => {
   let inverted = '';
   for (let i in str) {
      let code = str.charCodeAt(i);
      if(code >= 65 && code <= 90)
         inverted += String.fromCharCode(code + 32);
      else if((code >= 97 && code <= 122) || code == 232)
         inverted += String.fromCharCode(code - 32);
      else
         inverted += str[i];
   }

   return String(inverted);
}
