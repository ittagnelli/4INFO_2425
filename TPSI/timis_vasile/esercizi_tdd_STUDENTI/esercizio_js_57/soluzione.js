export const names = (studenti) => { // simile a es 44
   //INSERISCI QUI IL TUO CODICE
   let r = studenti.sort((s1, s2) => s1.nome.localeCompare(s2.nome));  
   return r.map(studente => studente.nome);
};
