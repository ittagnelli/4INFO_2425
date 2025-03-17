export const same = (arr1, arr2) => {
   //INSERISCI QUI IL TUO CODICE
   if(arr1.length == arr2.length){
      let r = arr1.every((n,i) => n == arr2[i]); // i è indice
      return r;
     }
     else
     return false;
   
   };

