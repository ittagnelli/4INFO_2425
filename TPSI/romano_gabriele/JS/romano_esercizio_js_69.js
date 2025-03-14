class Quadrato{
    constructor(lato) {
        this.lato = lato;
    }

    get lato(){
        return `LATO: ${this._lato}`;
    } 

    set lato(valore){
        this._lato = valore;
    }

    perimetro(){
        return this._lato * 4;
    }

    area(){
        return this._lato ** 2;
    }
}

let q = new Quadrato(5);
console.log(q.perimetro());
alert(q.area())