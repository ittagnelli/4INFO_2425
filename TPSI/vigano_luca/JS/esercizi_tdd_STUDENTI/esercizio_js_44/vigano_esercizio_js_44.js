export const ordina = (l) => {
  let libro_per_titolo = l.sort((lib1, lib2) => lib2.title.localeCompare(lib1.title));
  return libro_per_titolo;
};
