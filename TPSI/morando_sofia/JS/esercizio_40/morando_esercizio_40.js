export const same = (arr1, arr2) => {

   let confronto = arr1.every((curr) => arr2.includes(curr));

   return confronto;
}
