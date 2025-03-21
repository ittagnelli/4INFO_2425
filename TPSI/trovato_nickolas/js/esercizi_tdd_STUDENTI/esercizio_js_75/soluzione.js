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
        console.log(`${this.nome} emette un verso caratteristico della sua specie.`);
    }

    muoviti() {
        console.log(`${this.nome} si sta muovendo.`);
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
        console.log(`${this.marca} ${this.modello} è stata accesa.`);
    }

    spegni() {
        console.log(`${this.marca} ${this.modello} è stata spenta.`);
    }
}

export class Poligono extends Enumera {
    constructor(nLati, lunghezza, colore) {
        super();
        this.nLati = nLati;
        this.lunghezza = lunghezza;
        this.colore = colore;
    }

    calcolaPerimetro() {
        console.log(`Il perimetro del poligono è ${this.nLati * this.lunghezza}.`);
    }

    cambiaColore(nuovoColore) {
        this.colore = nuovoColore;
        console.log(`Il poligono ora è di colore ${this.colore}.`);
    }
}

const animale1 = new Animale("Leo", "Leone", 5);
const animale2 = new Animale("Milo", "Gatto", 2);

const auto1 = new Automobile("Tesla", "Model 3", 2022);
const auto2 = new Automobile("BMW", "Serie 5", 2020);

const poligono1 = new Poligono(4, 5, "Rosso");
const poligono2 = new Poligono(3, 6, "Blu");

[animale1, animale2, auto1, auto2, poligono1, poligono2].forEach(obj => obj.enumera());
