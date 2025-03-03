export const no_copies = (array) => {
      return array.filter((el, i) => array.indexOf(el) === i);
}