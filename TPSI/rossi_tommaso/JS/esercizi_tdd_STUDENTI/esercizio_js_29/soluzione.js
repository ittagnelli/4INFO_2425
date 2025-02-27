export const invert_case = (str) => {
   let chars = str.split('');

   chars.forEach((char, i) => {
       chars[i] = invertCaseAscii(char)
   });

   return chars.join('')
}

const invertCaseAscii = (char) => {
   let code = char.charCodeAt(0);
   if(code > 96)
      return char.toUpperCase();

   else
      return char.toLowerCase();      
}