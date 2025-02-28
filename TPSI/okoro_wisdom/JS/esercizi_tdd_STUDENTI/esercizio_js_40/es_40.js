export const same = (arr1, arr2) => {
    if(arr1.length == arr2.length){
     let uguali = arr1.every((n,i) => n == arr2[i]);
     return uguali;
    }
    else
    {
     return false;
    }
  }