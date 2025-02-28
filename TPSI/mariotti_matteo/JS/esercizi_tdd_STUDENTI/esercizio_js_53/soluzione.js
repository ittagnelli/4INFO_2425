export const shuffle = (l, m) => {
   let firstPart = l.slice(0, m + 1).reverse();
   let secondPart = l.slice(m + 1).reverse();
   return firstPart.concat(secondPart);
};