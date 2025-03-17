const is_prime = (n) => {
    return Array.from(Array(n).keys()).filter( e => e > 1).reduce((acc, e) => acc && n % e != 0, true);
}
export const order = (l) => {
//    const isPrime = (num) => {
//        if (num <= 1) return false;
//        for (let i = 2; i <= Math.sqrt(num); i++) {
//            if (num % i === 0) return false;
//        }
//        return true;
//    };

//    const primes = l.filter(isPrime);
//    const nonPrimes = l.filter(num => !isPrime(num));

//    return [...primes, ...nonPrimes];

return l.filter(e => is_prime(+e)).concat(l.filter(e => !is_prime(+e)));
};