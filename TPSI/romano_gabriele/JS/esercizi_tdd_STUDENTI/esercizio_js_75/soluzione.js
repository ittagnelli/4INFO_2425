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

    descrizione() {
        return `${this.nome} è una ${this.specie} di ${this.eta} anni.`;
    }

    verso() {
        return `${this.specie} fa un verso caratteristico.`;
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
        return `${this.marca} ${this.modello} è stata accesa.`;
    }

    spegni() {
        return `${this.marca} ${this.modello} è stata spenta.`;
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
        return this.n_lati * this.lato;
    }

    area() {
        return this.reg ? (this.n_lati * this.lato ** 2) / (4 * Math.tan(Math.PI / this.n_lati)) : null;
    }
}