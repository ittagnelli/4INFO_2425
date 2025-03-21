export class Automobile {
  constructor() {
      this._persone = 0;
      this._velocita = 0;
      this._marcia = 1;
      this._accesa = false;
  }

  get persone() {
      return this._persone;
  }

  set persone(value) {
      if (value < 0 || value > 5) {
        
          throw new Error("Il numero di persone deve essere compreso tra 0 e 5.");
      }
      if (this._velocita > 0) {
          throw new Error("Non posso modificare il numero di persone se la velocità è maggiore di 0.");
      }
      this._persone = value;
      this.stato();
  }

  get velocita() {
      return this._velocita;
  }

  set velocita(value) {
      if (!this._accesa) {
          throw new Error("Non posso modificare la velocità se l'auto è spenta.");
      }
      if (value < 0 || value > 180) {
          throw new Error("La velocità deve essere compresa tra 0 e 180.");
      }
      if (Math.abs(value - this._velocita) > 30) {
          throw new Error("Non posso modificare la velocità di più di 30 km/h in eccesso o in difetto.");
      }
      this._velocita = value;
      this.stato();
  }

  get marcia() {
      return this._marcia;
  }

  aggiungi_marcia() {
      if (!this._accesa) {
          throw new Error("Non posso cambiare marcia se l'auto è spenta.");
      }
      if (this._marcia >= 6) {
          throw new Error("Non posso superare il valore massimo di marcia.");
      }
      this._marcia++;
      this.stato();
  }

  togli_marcia() {
      if (!this._accesa) {
          throw new Error("Non posso cambiare marcia se l'auto è spenta.");
      }
      if (this._marcia <= 1) {
          throw new Error("Non posso superare il valore minimo di marcia.");
      }
      this._marcia--;
      this.stato();
  }

  get accesa() {
      return this._accesa;
  }

  set accesa(value) {
      this._accesa = value;
      this.stato();
  }

  stato() {
      console.log(`Stato attuale dell'automobile: Persone: ${this._persone}, Velocità: ${this._velocita}, Marcia: ${this._marcia}, Accesa: ${this._accesa}`);
  }
}

// Main per verificare il corretto funzionamento della classe Automobile
const car = new Automobile();

try {
  car.persone = 5;
  car.accesa = true;
  car.velocita = 10;
  car.aggiungi_marcia();
  car.aggiungi_marcia();
  car.velocita = 40;
  car.togli_marcia();
  car.velocita = 70;
  car.accesa = false;
  car.persone = 3;
} catch (error) {
  console.error(error.message);
}