class Quadrato {
    constructor(l) { this.lato = l; }
    set lato(val) { this._lato = val; }
    get perimetro() { return this._lato * 4; }
    get area() { return this._lato ** 2; }
}

function main() {
    q = new Quadrato(5);
    console.log(`Il perimetro del quadrato vale: ${q.perimetro}`);
    console.log(`L'area del quadrato vale: ${q.area}`);
}

main();