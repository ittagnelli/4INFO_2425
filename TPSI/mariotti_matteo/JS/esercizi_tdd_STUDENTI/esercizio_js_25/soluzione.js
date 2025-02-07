export const untokenize = (str) => {
   x = str.split("")
   y = ""
   for (let i = 0; i < x.length; i++) {
      if (x[i]!=" ") {
         y = y.concat(x[i]) 
      }
      else{
         y = y.concat("-")
      }
   }
   str = y
};