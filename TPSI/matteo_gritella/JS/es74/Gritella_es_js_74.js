export class Automobile {
    

    constructor(marca, modello, colore, prezzo, tipoMotore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
        this.prezzo = prezzo;
        this.tipoMotore = tipoMotore;
    }

    descrizione() {
        console.log(`${this.marca} ${this.modello} - Colore: ${this.colore}, Prezzo: €${this.prezzo}, Motore: ${this.tipoMotore}`);
    }

    cambiaColore(nuovoColore) {
        this.colore = nuovoColore;
    }

    aumentaPrezzo(importo) {
        this.prezzo += importo;
    }
}

let auto1 = new Automobile("Fiat", "Panda", "Rosso", 12000, "Benzina");
let auto2 = new Automobile("Ford", "Focus", "Blu", 15000, "Diesel");

auto1.descrizione();
auto1.cambiaColore("Verde");
auto1.aumentaPrezzo(1000);
auto1.descrizione();

auto2.descrizione();
auto2.cambiaColore("Verde");
auto2.aumentaPrezzo(1000);
auto2.descrizione();