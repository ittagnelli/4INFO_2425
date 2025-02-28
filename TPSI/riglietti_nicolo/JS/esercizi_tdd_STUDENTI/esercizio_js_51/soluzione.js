export const dec_to_bin = (n) => {
   return n.split('').reverse().map((numero, i) => numero * 2 ** i).reduce((acc, current) => acc + current, 0)
};