export class Automobile {
  constructor(pf){
    this._persone = 0;
    this._velocita = 0;
    this._marcia = 1;
    this.accesa = false;
  }

  get persone(){
    return this._persone
  }

  set persone(n){
      if(n < 1 || n > 5){
        throw new Error("numero persone non valido");
      }
      if(this.accesa && this._velocita > 0){
        throw new Error("Errore: macchina in movimento, non è possibile cambiare il numero di persone")
      }

      this._persone = n;
  }

  get on_off(){
    return this.accesa;
  }

  set on_off(val){
    this.accesa = val
  }

  get velocita(){
    return this._velocita;
  }

  set velocita(val){

    if(!this.accesa){
      throw new Error("Errore: impossibile cambiare la velocità l'auto è spenta");
    }
    if (val < 0 || val > 180 ){
      throw new Error("Errore: velocità troppo bassa o alta") ;
    }
    if(val > this._velocita + 30 || val < this._velocita - 30){
      throw new Error("Errore: cambio velocità eccessivo");
    }

    this._velocita = val;
  }


  get marcia(){
    return this._marcia;
  }

  aggiungi_marcia(){

    
    if(this._marcia >= 6){
      throw new Error("Errore: marcia non valida");
    }

    this._marcia++;
  }

    togli_marcia(){
    
    if(this._marcia <= 1){
      throw new Error("Errore: marcia non valida");
    }

    this._marcia--;
  }
}
