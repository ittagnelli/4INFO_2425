export const capitalize_all = (str) => {
   x = str.split(" ")
   
   for (let i = 0; i < length; i++) {
      y = ""
      z = x[i].split("")
      for (let j = 0; j < z.length; j++) {
         if (i == 0) {
            y = y.concat(x[i].toUpperCase)
         }
         else{
            y = y.concat(x[i])
         }
      }
      c = y.concat(" ")
   }    
   c = str  
}

