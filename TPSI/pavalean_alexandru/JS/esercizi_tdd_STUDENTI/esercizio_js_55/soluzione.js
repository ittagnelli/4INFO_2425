export const no_copies = (array) => {
   //INSERISCI QUI IL TUO CODICE
   let r = [];
   array.forEach(element => {
       if (!r.includes(element)) 
        {
           r.push(element);
       }
   });
   return r;
}
