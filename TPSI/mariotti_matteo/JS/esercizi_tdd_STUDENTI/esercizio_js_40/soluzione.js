export const same = (arr1, arr2) => {

   return arr1.length == arr2.length && arr1.reduce((a, e, i) => a && (e == arr2[i]), true);

   // if(arr1.lenght == arr2.lenght){
   //    let uguali = arr1.every((n, i) => n == arr2[i]);
   //    return uguali;
   // }
   // else{
   //    return false;
   // }
}