export const dec_to_bin = (n) => {
   if (typeof n === 'string') {
      n = n.split('');
   }
   let decimal = n.reverse().reduce((acc, current, index) => acc + (current * Math.pow(2, index)), 0);
   return decimal;
};
