export const dec_to_bin = (n) => {
   let decimalValue = 0;
   let length = n.length;

   for (let i = 0; i < length; i++) {
       let bit = n[i];
       
       if (bit === '1') {
           decimalValue += Math.pow(2, length - 1 - i);
       }
   }

   return decimalValue;

   // let decimalValue = parseInt(n, 2);
   // return decimalValue;
};