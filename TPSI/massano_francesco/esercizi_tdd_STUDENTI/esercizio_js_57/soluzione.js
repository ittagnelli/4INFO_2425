export const names = (studenti) => {
   let arrayNomi = [];
   studenti.map((item) => arrayNomi.push(item.nome));
   return arrayNomi;
}
