export function count_occurence(text) {
   //INSERISCI QUI IL TUO CODICE
   let mappa = new Map();
   let parole = text.split(' ');
   parole.forEach((item) => {
      mappa.set(item, 1);
   });
   return mappa;
}
