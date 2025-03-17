export const no_copies = (array) => {
   let r = [];
   array.forEach(element => {
       if (!r.includes(element)) 
        {
           r.push(element);
       }
   });
   return r;
};  // oppure filter + indexOf()
