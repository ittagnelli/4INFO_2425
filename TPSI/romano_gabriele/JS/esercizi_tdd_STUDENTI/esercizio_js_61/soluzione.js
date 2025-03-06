export function count_occurence(text) {
  let mappa = new Map();
  text.split(' ').forEach(word => {
    let occorrenze = text.split(' ').reduce((acc, current) => word == current ? acc + 1 : acc, 0);
    text = text.replaceAll(word);
    mappa.set(word, occorrenze);
  });

  return mappa;
}
