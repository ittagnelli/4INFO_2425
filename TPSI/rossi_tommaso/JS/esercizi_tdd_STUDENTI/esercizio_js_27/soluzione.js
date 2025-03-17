export const capitalize_all = (str) => {
   let strings = str.split(' ');
   let result = '';

   strings.forEach(string => {
      result = result + string.charAt(0).toUpperCase() + string.slice(1) + ' ';
   });
   return result.slice(0, -1);
}

