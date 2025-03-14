export const order = (l) => {
   //INSERISCI QUI IL TUO CODICE
   // const firstGroup = l.filter(n => isPrime(n));
   // const secondGroup = l.filter(n => !isPrime(n));

   // return [...firstGroup, ...secondGroup];
   return l.filter(e => is_prime(+e)).concat(l.filter(e => !is_prime(+e)));
};

const is_prime = (n) => {
   return Array.from(Array(n).keys()).filter(e => e > 1).reduce((acc, e) => acc = acc && n % e != 0, true);
}

// const isPrime = (n) => {
//    if(n === 1 || n === 0) return true;

//    for(let i = 2; i <= Math.sqrt(n); i++)
//       if(n % 1 === 0) return false;
//    return true;
// };