export class Fibonacci {
    static calcola(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;

        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

console.log(Fibonacci.calcola(5));
console.log(Fibonacci.calcola(10));
console.log(Fibonacci.calcola(15));
console.log(Fibonacci.calcola(20));
console.log(Fibonacci.calcola(25));
