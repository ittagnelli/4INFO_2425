export const order = (l) => {
   lista1 = []
   lista2 = []
   for (let i = 0; i < l.length; i++) {
      let casella = l[i];
      for (let j = 0; j = casella+1; j++) {
         let c = 0
         if (l[i]%l[j]==0) {
            c += 1 
         }
      }
      if (c > 3 || l[i] == 1) {
         lista1.push(casella)
      }
      else{
         lista2.push(casella)
      }
      
   }
   l = lista1.concat(lista2)
   return l
};