export class Automobile {
  constructor() {
      this.persone = 0;  
      this.velocita = 0; 
      this.rapporto = 1; 
      this.accesa = false; 
  }

  
  mostraStato() {
      console.log(`Stato attuale: Persone: ${this.persone}, Velocità: ${this.velocita} km/h, Marcia: ${this.rapporto}, Accesa: ${this.accesa}`);
  }

 
  toggleAccensione() {
      this.accesa = !this.accesa;
      console.log(`L'auto è ora ${this.accesa ? "accesa" : "spenta"}`);
      this.mostraStato();
  }

  
  setPersone(n) {
      if (this.velocita > 0) {
          console.log("Impossibile cambiare il numero di persone mentre l'auto è in movimento!");
          return;
      }
      if (n >= 0 && n <= 5) {
          this.persone = n;
          console.log(`Numero di persone aggiornato a ${this.persone}`);
      } else {
          console.log("Numero di persone non valido! Deve essere tra 0 e 5.");
      }
      this.mostraStato();
  }

 
  setVelocita(nuovaVelocita) {
      if (!this.accesa) {
          console.log("Impossibile modificare la velocità con l'auto spenta!");
          return;
      }
      if (nuovaVelocita >= 0 && nuovaVelocita <= 180 && Math.abs(nuovaVelocita - this.velocita) <= 30) {
          this.velocita = nuovaVelocita;
          console.log(`Velocità impostata a ${this.velocita} km/h`);
      } else {
          console.log("Velocità non valida! Deve essere tra 0 e 180 e non superare un incremento/decremento di 30 km/h.");
      }
      this.mostraStato();
  }


  aumentaRapporto() {
      if (!this.accesa) {
          console.log("Impossibile cambiare marcia con l'auto spenta!");
          return;
      }
      if (this.rapporto < 6) {
          this.rapporto++;
          console.log(`Marcia aumentata a ${this.rapporto}`);
      } else {
          console.log("Marcia già al massimo!");
      }
      this.mostraStato();
  }

  
  diminuisciRapporto() {
      if (!this.accesa) {
          console.log("Impossibile cambiare marcia con l'auto spenta!");
          return;
      }
      if (this.rapporto > 1) {
          this.rapporto--;
          console.log(`Marcia scalata a ${this.rapporto}`);
      } else {
          console.log("Marcia già al minimo!");
      }
      this.mostraStato();
  }
}


const auto = new Automobile();
auto.mostraStato();

auto.toggleAccensione(); 
auto.setPersone(3);      
auto.setVelocita(50);    
auto.aumentaRapporto();  
auto.setVelocita(80);    
auto.aumentaRapporto();  
auto.diminuisciRapporto();
auto.setVelocita(30);    
auto.toggleAccensione(); 
