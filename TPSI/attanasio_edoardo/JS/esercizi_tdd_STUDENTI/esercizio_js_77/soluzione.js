export class Fibonacci {
    //INSERISCI QUI IL TUO CODICE
    calc(n){
        return n <= 1 ? n : this.calc(n - 1) + this.calc(n - 2)
    }
}
