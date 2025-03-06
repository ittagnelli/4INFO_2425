export function count_occurence(text) {
   //INSERISCI QUI IL TUO CODICE
   let r = new Map();
   let e = text.split(' ');
   e.forEach((item) => {
      r.set(item, 1);
   });
   return r;
}

