export const invert_case = (str) => {
   //INSERISCI QUI IL TUO CODICE
   let r = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      r += char.toLowerCase();
    } else {
      r += char.toUpperCase();
    }
    
  }


  return console.log(r);
}
}
