export class Fibonacci {
    constructor(n){
        this.n = n;
    }
    
    calc(){
        let a = 0, b = 1, c = 0
        if(this.n >= 2){
            for(let i = 0; i < this.n; i++){
                c = a + b;
                a = b;
                b = c;
            }
        }
        else if(this.n == 1){
            a = 1;
        }
        else if(this.n == 0){
            a = 0;
        }
        return a;
    }
    
}