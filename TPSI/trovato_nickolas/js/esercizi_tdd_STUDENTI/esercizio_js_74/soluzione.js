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
        console.log(`Auto: ${this.marca} ${this.modello}, Anno: ${this.anno}, Colore: ${this.colore}, Carburante: ${this.carburante}`);
    }
}

const auto1 = new Automobile("Fiat", "Panda", 2020, "Rosso", "Benzina");
const auto2 = new Automobile("Volkswagen", "Golf", 2019, "Blu", "Diesel");
const auto3 = new Automobile("Tesla", "Model S", 2022, "Nero", "Elettrico");
const auto4 = new Automobile("Toyota", "Yaris", 2021, "Bianco", "Ibrido");
const auto5 = new Automobile("BMW", "Serie 3", 2018, "Grigio", "Diesel");

[auto1, auto2, auto3, auto4, auto5].forEach(auto => {
    auto.accendi();
    auto.info();
    auto.spegni();
});
