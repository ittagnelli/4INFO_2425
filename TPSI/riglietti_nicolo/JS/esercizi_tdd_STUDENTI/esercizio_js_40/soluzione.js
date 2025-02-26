export const same = (arr1, arr2) => {   
   return arr1.length === arr2.length && arr1.every((val, i) => val == arr2[i])
}

