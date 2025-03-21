class Enumera {
    //INSERISCI QUI IL TUO CODICE
    constructor() {};
    enumera() {
        return Object.keys(this);
    }
}

export class Animale extends Enumera {
    //INSERISCI QUI IL TUO CODICE
    constructor(specie, nome, eta) { 
        super();
        this.specie = specie;
        this.nome = nome;
        this.eta = eta;
    }

    descriviti() {
        return `${this.nome} è una specie ${this.specie} di eta ${this.eta}`
    }

    verso() {
        return `Verso eseguito.`
    }
}

export class Automobile extends Enumera {
   //INSERISCI QUI IL TUO CODICE
    constructor(colore, marca, modello) {
        super();
        this.colore = colore;
        this.marca = marca;
        this.modello = modello;
    }

    accendi() {
        return `L'auto ${this.marca} ${this.modello} è accesa`;
    }

    spegni() {
        return `L'auto ${this.marca} ${this.modello} è spenta`;
    }
}

export class Poligono extends Enumera {
    //INSERISCI QUI IL TUO CODICE
    constructor(lato, n_lati, reg) {
        super();
        this.lato = lato;
        this.n_lati = n_lati;
        this.reg = reg;
    }

    area() {
        return this.reg ? (this.n_lati * this.lato ** 2) / (4 * Math.tan(Math.PI / this.n_lati)) : null;
    }

    perimetro() { return this.n_lati * this.lato };
}