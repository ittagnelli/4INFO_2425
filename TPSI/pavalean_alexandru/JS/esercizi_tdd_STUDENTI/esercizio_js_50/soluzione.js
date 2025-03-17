export const order = (l) => {
   //INSERISCI QUI IL TUO CODICE
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
  return l;
};