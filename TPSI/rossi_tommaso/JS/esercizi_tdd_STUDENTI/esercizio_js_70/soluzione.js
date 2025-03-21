export class Calcolatrice {
        constructor(){
            this.risultato = 0;
        }
    
        set_result(ris){
            this.risultato = ris;
            return this;
        }
        get_result(){
            return this.risultato;
        }
    
        sum(num){this.risultato += num; return this;}
        sub(num){this.risultato -= num; return this;}
        mul(num){this.risultato *= num; return this;}
        div(num){this.risultato /= num; return this;}
}
