export class Automobile {


  constructor() {



    this._passeggeri = 0;
    this._velocità = 0;
    this._cambio = 1;
    this.attivo = false;

  }

  get passeggeri() {

    return this._passeggeri;
  }

  set passeggeri(num) {

    if (num < 1 || num > 5) {

      console.log("passeggeri non valido");
      return;
    }
    if (this.attivo && this._velocità > 0) {
      console.log("veicolo in movimento");
      return;
    }

    this._passeggeri = num;
  }

  get stato() {

    return this.attivo;
  }

  set stato(val) {

    this.attivo = val;
  }

  get velocità() {

    return this._velocità;
  }

  set velocità(val) {

    if (!this.attivo) {

      console.log("motore spento");
      return;
    }
    if (val < 0 || val > 180) {

      console.log("velocità non valida");
      return;
    }
    if (val > this._velocità + 30 || val < this._velocità - 30) {

      console.log("variazione eccessiva");
      return;
    }

    this._velocità = val;
  }

  get cambio() {
    return this._cambio;
  }

  aggiungiCambia() {

    if (this._cambio >= 6) {

      console.log("cambio non valido");
      return;
    }

    this._cambio++;
  }

  rimuoviCambia() {

    if (this._cambio <= 1) {

      console.log("cambio non valido");
      return;
    }

    this._cambio--;

  }
  
}

