export const order = (l) => {
   return l.sort((a, b) => (Array(2, a - 1).every((value) => a % value != 0)) ? -1 : 1);
};