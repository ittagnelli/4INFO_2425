class Enumera {
    enumera() {
        console.log(Object.keys(this));
    }
}

export class Animale extends Enumera {
    constructor(nome, specie, età) {
        super();
        this.nome = nome;
        this.specie = specie;
        this.età = età;
    }

    verso() {
        console.log(`${this.nome} fa un verso strano.`);
    }

    dormi() {
        console.log(`${this.nome} sta dormendo.`);
    }
}

export class Automobile extends Enumera {
    constructor(marca, modello, anno) {
        super();
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    accendi() {
        console.log(`${this.marca} ${this.modello} è accesa.`);
    }

    spegni() {
        console.log(`${this.marca} ${this.modello} è spenta.`);
    }
}

export class Poligono extends Enumera {
    constructor(lati, lunghezza, nome) {
        super();
        this.lati = lati;
        this.lunghezza = lunghezza;
        this.nome = nome;
    }

    area() {
        console.log(`Calcolo dell'area per il poligono ${this.nome} viene ${this.lati**2}`);
    }

    perimetro() {
        console.log(`Il perimetro del ${this.nome} è ${this.lati * this.lunghezza}`);
    }
}


const animale1 = new Animale("Luna", "Gatto", 3);
const animale2 = new Animale("Rex", "Cane", 5);
const auto1 = new Automobile("Ferrari", "F8", 2023);
const auto2 = new Automobile("Lamborghini", "Huracan", 2022);
const poligono1 = new Poligono(4, 5, "Quadrato");
const poligono2 = new Poligono(3, 6, "Triangolo");

animale1.enumera();
animale2.enumera();
auto1.enumera();
auto2.enumera();
poligono1.enumera();
poligono2.enumera();
