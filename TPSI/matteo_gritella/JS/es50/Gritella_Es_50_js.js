export const order = (l) => {
   const isPrime = (num) => {
       if (num <= 1) return true;
       for (let i = 2; i <= Math.sqrt(num); i++) {
           if (num % i === 0) return false;
       }
       return true;
   };

   const primes = l.filter(isPrime);
   const nonPrimes = l.filter(num => !isPrime(num));

   return [...primes, ...nonPrimes];
};