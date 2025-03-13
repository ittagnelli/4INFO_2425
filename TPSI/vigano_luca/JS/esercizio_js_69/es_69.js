class Quadrato {
    constructor(lato) {
        this.lato = lato;
    }

    set lato(valore) {
        this._lato = valore;
        this._perimetro = valore * 4;
        this._area = valore * valore;
    }

    get lato() {
        return this._lato;
    }

    get perimetro() {
        return this._perimetro;
    }

    get area() {
        return this._area;
    }
}

function main() {
    const quadrato = new Quadrato(4);
    console.log(quadrato.lato);       // Output: 4
    console.log(quadrato.perimetro);  // Output: 16
    console.log(quadrato.area);       // Output: 16
}

main();