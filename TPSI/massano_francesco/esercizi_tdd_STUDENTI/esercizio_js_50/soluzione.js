export const order = (l) => {
   let numeri = [];
   let primi = [];

   l.forEach((item) => {
      if (item === 2 || item === 3 || item === 5 || item === 7 || item === 0) {
         primi.push(item);
      } else if (item % 2 === 0 || item % 3 === 0 || item % 5 === 0 || item % 7 === 0) {
         numeri.push(item); 
      } else {
         primi.push(item);
      }
   });

   return primi.concat(numeri);
};
