export class Fibonacci {
  
    static calcola(n) {
        if (n === 0) return 0;
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


const numeriDaTestare = [0, 1, 5, 8, 10];

numeriDaTestare.forEach(n => {
    console.log(`Fibonacci(${n}) = ${Fibonacci.calcola(n)}`);
});
