export class Calcolatrice {
    //INSERISCI QUI IL TUO CODICE
    constructor () { this.num = 0 }
    
    set_result(ris) { this.num = ris; return this; }
    sum (num) { this.num += num; return this; }
    sub (num) { this.num -= num; return this; }
    mul (num) { this.num *= num; return this; }
    div (num) { this.num /= num; return this; }

    get_result() { return this.num }
}
