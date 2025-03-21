export class Fibonacci {
    //INSERISCI QUI IL TUO CODICE
    constructor(num) {
        this.num = num;
        this.r = 0;
        this.n1 = 0;
        this.n2 = 1;
    }

    calc(num) {
        for (let i = 2; i < num; i++) {
            this.r = this.n1 + this.n2;
            this.n1 = this.n2;
            this.n2 = this.r;
        }

        return this.r;
    }
}

let fib1 = new Fibonacci(5);
let fib2 = new Fibonacci(7);

console.log(fib1.calc(fib1.num));
console.log(fib2.calc(fib2.num));
