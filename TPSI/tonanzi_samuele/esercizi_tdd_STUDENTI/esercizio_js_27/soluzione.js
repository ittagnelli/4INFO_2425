export const capitalize_all = (str) => {
   //INSERISCI QUI IL TUO CODICE
   let stringhe = str.split(' ');
   for(let i = 0; i < stringhe.length; i++)
      stringhe[i] = stringhe[i].charAt(0).toUpperCase() + stringhe[i].substring(1);
   return stringhe.join(' ');
}

