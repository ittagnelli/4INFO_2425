export class Automobile {
    constructor(marca, veicolo, cavalli, cilindrata, colore) {
        this.marca = marca;
        this.veicolo = veicolo;
        this.cavalli = cavalli;
        this.cilindrata = cilindrata;
        this.colore = colore;

    }

    getColore() {
        return this.colore;
    }

    getVeicolo() {
        return this.veicolo;
    }

    getMarca() {
        return this.marca;
    }
}