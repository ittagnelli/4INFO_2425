export const dec_to_bin = (n) => {
   return n.split('').reverse().map((e,i) => parseInt(e) * 2**i).reduce((acc,cur) => acc + cur);
};