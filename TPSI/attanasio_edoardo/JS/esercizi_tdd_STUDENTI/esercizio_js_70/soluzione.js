export class Calcolatrice {
 //INSERISCI QUI IL TUO CODICE

 get get_result(){
    return this._risultato
 }
 set set_result(ris){
    this._risultato = ris
 }
 sum(num){this.risultato =  this.risultato + num; return this.risultato}
 sub(num){this.risultato =  this.risultato - num; return this.risultato}
 mul(num){this.risultato =  this.risultato * num; return this.risultato}
 div(num){this.risultato =  this.risultato / num; return this.risultato}
}
