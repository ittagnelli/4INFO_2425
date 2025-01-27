function capitalize(str) {
   return str != '' ? str[0].toUpperCase() + str.slice(1) : str;
}

export const capitalize_all = (str) => {
   let capitalized = '';
   str = str.split(' ');
   str.forEach(word => {
      capitalized += capitalize(word) + ' ';
   });

   return capitalized.trim();
}