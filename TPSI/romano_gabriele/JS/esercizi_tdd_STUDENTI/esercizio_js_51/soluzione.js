export const dec_to_bin = (n) => {
   let dec = 0;
   n = n.split('').reverse();
   n.forEach((bit, index) => {
      dec += bit * 2 ** index;
   });

   return dec;
};