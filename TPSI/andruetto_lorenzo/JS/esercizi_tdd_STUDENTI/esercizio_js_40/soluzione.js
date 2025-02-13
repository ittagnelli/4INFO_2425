export const same = (arr1, arr2) => {
   //INSERISCI QUI IL TUO CODICE
   return arr1.length !== arr2.length ? false : arr1.every((element, index) => element === arr2[index]) == true ? true : false;
}

