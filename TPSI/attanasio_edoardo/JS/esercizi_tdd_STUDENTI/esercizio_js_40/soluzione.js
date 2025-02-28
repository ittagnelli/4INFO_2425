export const same = (arr1, arr2) => {
   //INSERISCI QUI IL TUO CODICE
   return arr1.length === arr2.length ? arr1.every((item, index) => item == arr2[index]) : false;
}

