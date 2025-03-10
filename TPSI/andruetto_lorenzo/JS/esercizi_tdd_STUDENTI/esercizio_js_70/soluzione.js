export class Calcolatrice {
    //INSERISCI QUI IL TUO CODICE
    constructor (ris) { let set_result = ris }
    
    set set_result(ris) { this.result = ris }
    get get_result() { return this.result }
    sum (num) { return this.result + num }
    sub (num) { return this.result - num }
    mul (num) { return this.result * num }
    div (num) { return this.result / num }
}
