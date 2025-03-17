export const same = (arr1, arr2) => {
   if(arr1.length == arr2.length){
      let uguali = arr1.every((n,i) => n == arr2[i]);
      return uguali;
   }
   else{
      return false;
   }
   
}

   // if(arr1.length == arr2.length){
   //    let uguali = arr1.filter((n,i) => n == arr2[i]);
   //    if(uguali.length == arr1.length){
   //       return true;
   //    }
   //    else{
   //       return false;
   //    }
   // }
   // else{
   //    return false;
   // }
