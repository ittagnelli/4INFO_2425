export const order = (l) => {
   const firstGroup = l.filter(n => isPrime(parseInt(n)));
   const secondGroup = l.filter(n => !isPrime(parseInt(n)));
 
   return [...firstGroup, ...secondGroup];
 };

const isPrime = (n) => {
   if(n === 1 || n === 0)
     return true;
   
   for (let i = 2; i <= Math.sqrt(n); i++) {
     if (n % i === 0) 
      return false;
   }
   return true;
 };