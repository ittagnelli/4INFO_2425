export const untokenize = (str) => {
   while(str.includes(" "))
      str = str.replace(" ", "-");

   return str;
};