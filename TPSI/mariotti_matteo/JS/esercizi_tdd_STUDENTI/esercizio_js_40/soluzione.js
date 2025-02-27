export const same = (arr1, arr2) => {
   if(arr1.lenght == arr2.lenght){
      let uguali = arr1.every((n, i) => n == arr2[i]);
      return uguali;
   }
   else{
      return false;
   }
}

