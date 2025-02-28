export const same = (arr1, arr2) => {
   let c = 0;
   if(arr1.length == arr2.length)
      for (let i in arr1)
         if(arr1[i] == arr2[i])
            c++

   if(c == arr1.length)
      return true;
   else
      return false;
}
