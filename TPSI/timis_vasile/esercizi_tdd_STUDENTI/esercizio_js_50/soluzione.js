export const order = (l) => {
   l.map((num, _, arr) => {
       if (num >= 2) {
           let isPrime = true;
           for (let i = 2; i < num; i++) {
               if (num % i === 0) {
                   isPrime = false;
                   break;
               }
           }
           isPrime && arr.unshift(arr.splice(arr.indexOf(num), 1)[0]);
       }
   });
   return l;  // era meglio fare reduce ricordiarsi per i primi e non primi
};  // reduce cmq restituisce 1 valore , quindi true o false con reduce va benissimo
