export class Calcolatrice {
    constructor(l) {
        this.valore_finale = l;
    }

    get addizione() {
        return (valore) => {
            this.valore_finale += valore;
            return this;
        };
    }

    get sottrazione() {
        return (valore) => {
            this.valore_finale -= valore;
            return this;
        };
    }

    get divisione() {
        return (valore) => {
            this.valore_finale /= valore;
            return this;
        };
    }

    get moltiplicazione() {
        return (valore) => {
            this.valore_finale *= valore;
            return this;
        };
    }

    risultato() {
        return this.valore_finale;
    }
}