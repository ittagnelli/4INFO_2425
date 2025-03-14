
class Quadrato {
    constructor(l) {
        this.lato = l; 
    }

    set lato(val) { 
        this._lato = val;
     }


    get area() {
        return this._lato * this._lato;
    }

    get perimetro() {
        return this._lato * 4 
    }
    
        
}


function main() {
    let l = 5;
    let q = new Quadrato(l);
    console.log("2P = ", q.perimetro);
    console.log("A = ", q.area);

}

main()