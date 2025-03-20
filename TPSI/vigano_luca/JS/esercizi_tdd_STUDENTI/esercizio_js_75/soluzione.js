class Enumera {
    enumera() {
        return Object.keys(this);
    }
}

export class Animale extends Enumera {
    constructor(specie, nome, eta) {
        super();
        this.specie = specie;
        this.nome = nome;
        this.eta = eta;
    }

    mangia() {
        return `${this.nome} sta mangiando.`;
    }

    dorme() {
        return `${this.nome} sta dormendo.`;
    }
}

export class Automobile extends Enumera {
    constructor(colore, marca, modello) {
        super();
        this.colore = colore;
        this.marca = marca;
        this.modello = modello;
    }

    accendi() {
        return `${this.marca} ${this.modello} è accesa.`;
    }

    guida() {
        return `${this.marca} ${this.modello} è in movimento.`;
    }
}

export class Poligono extends Enumera {
    constructor(lato, n_lati, reg) {
        super();
        this.lato = lato;
        this.n_lati = n_lati;
        this.reg = reg;
    }

    perimetro() {
        return this.lato * this.n_lati;
    }

    area() {
        const apotema = this.lato / (2 * Math.tan(Math.PI / this.n_lati));
        return (this.perimetro() * apotema) / 2;
    }
}

const animale1 = new Animale("Scimmia", "Miss Baker", 27);
const animale2 = new Animale("Cane", "Fido", 5);

const automobile1 = new Automobile("Rosso", "Honda", "Civic Type R");
const automobile2 = new Automobile("Blu", "Toyota", "Supra");

const poligono1 = new Poligono(10, 7, true);
const poligono2 = new Poligono(12, 5, false);

console.log(animale1.enumera());
console.log(animale2.enumera());

console.log(automobile1.enumera());
console.log(automobile2.enumera());

console.log(poligono1.enumera());
console.log(poligono2.enumera());