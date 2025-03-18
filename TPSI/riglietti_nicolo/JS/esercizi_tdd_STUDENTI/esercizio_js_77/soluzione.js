export class Fibonacci {
    constructor(n) {
        this.n = n;
        this.somma = 0;
        this.a = 0;
        this.b = 1;
    }

    calc(n){
        

        // if (n === 1) return this.a;
        // if (n === 2) return this.b;

        for(let i = 2; i < n; i++){
            this.somma = this.a + this.b;
            this.a = this.b ;
            this.b = this.somma
            
        }

        return this.somma

    }

}