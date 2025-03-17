class Quadrato {
    constructor(lato) {
        this._lato = lato; 
    }

    get lato() {
        return this._lato;
    }

    set lato(valore) {
        if (valore > 0) {
            this._lato = valore;
        } else {
            console.error("La lunghezza del lato deve essere maggiore di zero.");
        }
    }

    calcolaPerimetro() {
        return this._lato * 4;
    }

    calcolaArea() {
        return this._lato * this._lato;
    }
}

