export const names = (studenti) => {
   let nomi = studenti.map(studente => studente.nome);
   return nomi;
}
