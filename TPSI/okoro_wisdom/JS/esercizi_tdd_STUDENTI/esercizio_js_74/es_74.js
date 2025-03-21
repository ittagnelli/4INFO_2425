export class Automobile {
    constructor(marca, modello, anno, colore, carburante) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.colore = colore;
        this.carburante = carburante;
    }

    accendi() {
        console.log(`${this.marca} ${this.modello} è stata accesa.`);
    }

    spegni() {
        console.log(`${this.marca} ${this.modello} è stata spenta.`);
    }

    info() {
        console.log(`Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}, Colore: ${this.colore}, Carburante: ${this.carburante}`);
    }
}

const auto1 = new Automobile("Toyota", "Yaris", 2020, "Rosso", "Benzina");
const auto2 = new Automobile("Ford", "Focus", 2018, "Blu", "Diesel");
const auto3 = new Automobile("BMW", "Serie 3", 2022, "Nero", "Ibrido");
const auto4 = new Automobile("Audi", "A3", 2019, "Grigio", "Benzina");
const auto5 = new Automobile("Mercedes", "Classe A", 2021, "Bianco", "Elettrico");

auto1.accendi(); auto1.spegni(); auto1.info();
auto2.accendi(); auto2.spegni(); auto2.info();
auto3.accendi(); auto3.spegni(); auto3.info();
auto4.accendi(); auto4.spegni(); auto4.info();
auto5.accendi(); auto5.spegni(); auto5.info();
